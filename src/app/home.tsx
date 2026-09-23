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
import { colorType, globalStyles } from "../styles/global";
export default function Home() {
  let [newPokemons, setNewPokemons] = useState<Pokemon[] | []>([]);
  let { pokemons } = useFetchData({} as any);

  useEffect(() => {
    setNewPokemons(pokemons);
  }, [newPokemons, setNewPokemons]);

  if (newPokemons.length === 0) return;
  console.log(newPokemons, newPokemons.length < 0, newPokemons.length);
  return (
    <SafeAreaView>
      <FlatList
        data={newPokemons}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ gap: 16, padding: 20 }}
        renderItem={({ item: poke }) => {
          let type = poke.types[0].type.name;

          return (
            <Link
              key={poke.name}
              href={{ pathname: "/details", params: { name: poke.name } }}
              style={{ flex: 1 }}
            >
              <ImageBackground
                style={[
                  {
                    backgroundColor: colorType[type as keyof typeof colorType],
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
                          color: colorType[type as keyof typeof colorType],
                          borderColor:
                            colorType[type as keyof typeof colorType] + 60,
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
                      source={{ uri: poke.image }}
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
      <View>
        <Pressable
          onPress={() => {
            let { pokemons } = useFetchData({ limit: 20 } as any);
            setNewPokemons(pokemons);
          }}
        >
          <Text>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
