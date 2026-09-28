import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// hooks
import useFetchData from "../hooks/useFetchData";

// styles
import detailsStyles from "@/styles/detailsStyles";
import { colors, globalStyles, typeColors, typeIcons } from "@/styles/global";
import homeStyles from "@/styles/homeStyles";

// icons
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// types
import type { Pokemon } from "@/types/pokemonType";

export default function Home() {
  let [offset, setOffset] = useState<number>(0);
  let limit = 20;
  let [newPokemons, setNewPokemons] = useState<Pokemon[]>([]);
  let { pokemons } = useFetchData({ offset: offset } as any);

  useEffect(() => {
    setNewPokemons((prev) => [...prev, ...pokemons]);
  }, [pokemons, offset]);

  if (newPokemons.length === 0) {
    return (
      <SafeAreaView style={[{ flex: 1 }, globalStyles.center]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={newPokemons}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{
          gap: 16,
          paddingTop: 20,
          paddingHorizontal: 20,
          paddingBottom: 50,
        }}
        ListFooterComponent={
          <Pressable
            onPress={() => {
              setOffset((prev) => prev + limit);
            }}
          >
            <Text>Next</Text>
          </Pressable>
        }
        renderItem={({ item: poke }) => {
          let type = poke.types[0].type.name;
          let imageSrc = poke.sprites.other["official-artwork"]
            .front_default as string;

          return (
            <Link
              key={poke.id}
              href={{ pathname: "/details", params: { name: poke.name } }}
              style={{ flex: 1 }}
            >
              <ImageBackground
                style={[
                  homeStyles.pokemonView,
                  {
                    backgroundColor:
                      typeColors[type as keyof typeof typeColors],
                    borderColor: typeColors[type as keyof typeof typeColors],
                    borderWidth: 2,
                  },
                ]}
              >
                <Text style={[detailsStyles.heading, homeStyles.heading]}>
                  {poke.name}
                </Text>

                <View style={globalStyles.innerRow}>
                  <View style={homeStyles.txtContainer}>
                    <FontAwesome6
                      name={typeIcons[type as keyof typeof typeIcons] as any}
                      size={24}
                      color={colors.txtLight}
                    />
                    {/* <Text style={[detailsStyles.type, homeStyles.type]}>
                      {type}
                    </Text> */}
                  </View>
                  <ImageBackground
                    style={homeStyles.imgContainer}
                    source={require("../../assets/images/pokeball1.png")}
                    resizeMode="cover"
                    imageStyle={{ opacity: 0.3, width: 100, height: 100 }}
                  >
                    <Image
                      source={{
                        uri: imageSrc,
                      }}
                      style={homeStyles.image}
                    />
                  </ImageBackground>
                </View>
              </ImageBackground>
            </Link>
          );
        }}
        keyExtractor={(poke) => poke.name}
      />

      <View></View>
    </SafeAreaView>
  );
}
