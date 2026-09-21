import { StyleSheet } from "react-native";

export const colors = {
  primary: "#007AFF",
  secondary: "#00778",
  background: "#F2F2F7",
  text: "#1C1C1E",
};

export const colorType = {
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

export const globalStyles = StyleSheet.create({
  bold900: {
    fontWeight: 900,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 1.5,
    resizeMode: "contain",
  },

  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },
  name: {
    fontSize: 20,
    textTransform: "capitalize",
    textAlign: "center",
    color: colors.primary,
    fontFamily: "PokemonSolidNormal",
  },
  type: {
    fontSize: 18,
    fontWeight: 400,
    textTransform: "capitalize",
    textAlign: "center",
    color: colors.primary,
    fontFamily: "Inter-Regular",
  },
});
