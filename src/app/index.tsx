import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import useFetchData from "../hooks/useFetchData";
import { globalStyles } from "../styles/global";

const colorType = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export default function Index() {
  let { pokemons } = useFetchData({} as any);
  return (
    <>
      <View style={globalStyles.container}>{/* <Text>Pokedex</Text> */}</View>

      {/* <ScrollView
        contentContainerStyle={{
          gap: 16,
          padding: 20,
        }}
      >
        {pokemon.map((poke) => {
          let type = poke.types[0].type.name;
          return (
            <Link
              key={poke.name}
              href={{ pathname: "/details", params: { name: poke.name } }}
            >
              <View
                style={{
                  backgroundColor:
                    colorType[type as keyof typeof colorType] + 50,
                  paddingHorizontal: 25,
                  paddingVertical: 20,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#000",
                  borderRadius: 20,
                }}
              >
                <Text style={styles.name}>{poke.name}</Text>
                <Text style={styles.type}>{type}</Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={{ uri: poke.image }}
                    style={{ width: 150, height: 150 }}
                  />
                  <Image
                    source={{ uri: poke.imageBack }}
                    style={{ width: 150, height: 150 }}
                  />
                </View>
              </View>
            </Link>
          );
        })}
      </ScrollView> */}
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
                style={{
                  backgroundColor:
                    colorType[type as keyof typeof colorType] + 50,
                  paddingHorizontal: 25,
                  paddingVertical: 20,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#000",
                  borderRadius: 20,
                }}
              >
                <Text style={globalStyles.name}>{poke.name}</Text>
                <Text style={globalStyles.type}>{type}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{ uri: poke.image }}
                    style={{ width: 100, height: 100 }}
                  />
                  <Image
                    source={{ uri: poke.imageBack }}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
              </View>
            </Link>
          );
        }}
        keyExtractor={(poke) => poke.name}
      />
    </>
  );
}
