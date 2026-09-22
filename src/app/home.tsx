import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchData from "../hooks/useFetchData";

import { colorType, globalStyles } from "../styles/global";
export default function Home() {
  let { pokemons } = useFetchData({} as any);
  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
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
              <View
                style={[
                  {
                    backgroundColor: colorType[type as keyof typeof colorType],
                  },
                  globalStyles.pokemonView,
                ]}
              >
                <View style={globalStyles.txtContainer}>
                  <Text style={globalStyles.name}>{poke.name}</Text>
                  <Text
                    style={[
                      globalStyles.type,
                      {
                        backgroundColor:
                          colorType[type as keyof typeof colorType] + 90,
                        borderColor:
                          colorType[type as keyof typeof colorType] + 50,
                      },
                    ]}
                  >
                    {type}
                  </Text>
                </View>
                <View style={globalStyles.imgContainer}>
                  <Image
                    source={{ uri: poke.image }}
                    style={globalStyles.image}
                  />
                </View>
              </View>
            </Link>
          );
        }}
        keyExtractor={(poke) => poke.name}
      />
    </SafeAreaView>
  );
}
