import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View
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
  let limit = 8;
  let [offset, setOffset] = useState<number>(0);
  let [newPokemons, setNewPokemons] = useState<Pokemon[]>([]);
  let { pokemons } = useFetchData({ limit: limit, offset: offset } as any);

  useEffect(() => {
    setNewPokemons(pokemons);
  }, [pokemons, offset]);

  if (newPokemons.length === 0) {
    return (
      <SafeAreaView style={[{ flex: 1 }, globalStyles.center]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <ImageBackground
      source={require("@/assets/images/bg/4.jpg")}
      resizeMode="cover"
      style={{
        flex: 1,
      }}
      imageStyle={{
        opacity: 0.2,
      }}
    >
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
            <View style={[globalStyles.typeRow, globalStyles.center]}>
              <Pressable
                disabled={offset === 0}
                onPress={() => {
                  setOffset((prev) => {
                    return prev > 0 ? prev - limit : prev;
                  });
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: offset === 0 ? "#000" : "#999",
                    opacity: pressed ? 0.7 : 1,
                  },
                  globalStyles.buttonMain,
                ]}
              >
                <Text style={globalStyles.buttonMainTxt}>Previous</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setOffset((prev) => prev + limit);
                }}
                style={({ pressed }) => [
                  { opacity: pressed ? 0.2 : 1 },
                  globalStyles.buttonMain,
                ]}
              >
                <Text style={globalStyles.buttonMainTxt}>Next</Text>
              </Pressable>
            </View>
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
          keyExtractor={(poke) => poke.id.toString()}
        />

        <View></View>
      </SafeAreaView>
    </ImageBackground>
  );
}
