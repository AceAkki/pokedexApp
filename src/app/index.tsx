import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  let [pokemon, setPokemon] = useState([]);

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
        setPokemon(data.results);
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
            <View key={poke.key}>
              <Text>{poke.name}</Text>
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
});
