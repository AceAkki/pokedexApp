import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchData from "../hooks/useFetchData";

import type { Pokemon } from "@/types/pokemonType";
import { globalStyles, typeColors } from "../styles/global";

export default function Home() {
  let [newPokemons, setNewPokemons] = useState<Pokemon[]>([]);
  let { pokemons } = useFetchData({} as any);

  useEffect(() => {
    setNewPokemons(pokemons);
  }, [pokemons, newPokemons, setNewPokemons]);
  console.log(pokemons);

  if (newPokemons.length === 0) {
    return <Text>Details Loading</Text>;
  }

  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <FlatList
          data={newPokemons}
          numColumns={2}
          style={{ flex: 1 }}
          columnWrapperStyle={{ gap: 16 }}
          contentContainerStyle={{ gap: 16, padding: 20 }}
          renderItem={({ item: poke }) => {
            let type = poke.types[0].type.name;
            let imageSrc = poke.sprites.other["official-artwork"]
              .front_default as string;

            return (
              <Link
                key={poke.name}
                href={{ pathname: "/details", params: { name: poke.name } }}
                style={{ flex: 1 }}
              >
                <ImageBackground
                  style={[
                    {
                      backgroundColor:
                        typeColors[type as keyof typeof typeColors],
                    },
                    globalStyles.pokemonView,
                  ]}
                >
                  <Text style={globalStyles.name}>{poke.name}</Text>

                  <View style={globalStyles.innerRow}>
                    <View style={globalStyles.txtContainer}>
                      <Text
                        style={[
                          globalStyles.type,
                          {
                            color: typeColors[type as keyof typeof typeColors],
                            borderColor:
                              typeColors[type as keyof typeof typeColors] + 60,
                          },
                        ]}
                      >
                        {type}
                      </Text>
                    </View>
                    <ImageBackground
                      style={globalStyles.imgContainer}
                      source={require("../../assets/images/pokeball1.png")}
                      resizeMode="cover"
                      imageStyle={{ opacity: 0.3, width: 100, height: 100 }}
                    >
                      <Image
                        source={{
                          uri: imageSrc,
                        }}
                        style={globalStyles.image}
                      />
                    </ImageBackground>
                  </View>
                </ImageBackground>
              </Link>
            );
          }}
          keyExtractor={(poke) => poke.name}
        />
        <View style={{ flex: 1 }}>
          <Pressable
            onPress={() => {
              let { pokemons } = useFetchData({ limit: 20 } as any);
              setNewPokemons(pokemons);
            }}
          >
            <Text>Next</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
