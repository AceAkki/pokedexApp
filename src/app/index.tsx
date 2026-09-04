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

      <ScrollView>
        {pokemon.map((poke) => {
          return (
            <View key={poke.name}>
              <Text style={styles.name}>{poke.name}</Text>
              <Text style={styles.type}>{poke.types[0].type.name}</Text>
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
    fontWeight: 300,
  },
});
