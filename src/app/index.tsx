import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface Pokemon {
  name: string;
  image: string;
  imageBack: string;
  types: PokemonType[];
}

interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

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
  let [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20",
      );
      if (response.ok) {
        const data = await response.json();

        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
            const dets = await res.json();
            return {
              name: pokemon.name,
              image: dets.sprites.front_default,
              imageBack: dets.sprites.back_default,
              types: dets.types,
            };
          }),
        );
        setPokemon(detailedPokemons);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <View style={styles.container}>{/* <Text>Pokedex</Text> */}</View>

      <ScrollView
        contentContainerStyle={{
          gap: 16,
          padding: 20,
        }}
      >
        {pokemon.map((poke) => {
          let type = poke.types[0].type.name;
          return (
            <View
              key={poke.name}
              style={{
                backgroundColor: colorType[type as keyof typeof colorType] + 50,
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
                  style={{ width: 100, height: 100 }}
                />
                <Image
                  source={{ uri: poke.imageBack }}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: 800,
    textTransform: "capitalize",
  },
  type: {
    fontSize: 18,
    fontWeight: 400,
    textTransform: "capitalize",
    backgroundColor: "#fff",
    color: "#1c1010",
  },
});
