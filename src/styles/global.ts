import { StyleSheet } from "react-native";

export const colors = {
  primary: "#007AFF",
  secondary: "#00778",
  background: "#F2F2F7",
  txtLight: "#F2F2F7",
  text: "#1C1C1E",
};
export const colorType = {
  normal: "#A9A8C4",
  fire: "#fb7e7b",
  water: "#76befe",
  electric: "#ffd76f",
  grass: "#49d0b0",
  ice: "#72DCEB",
  fighting: "#EF5967",
  poison: "#C66BE8",
  ground: "#E0AE55",
  flying: "#9B8CFF",
  psychic: "#FF6FAD",
  bug: "#A9D94A",
  rock: "#C6A458",
  ghost: "#8D70D8",
  dragon: "#7864F2",
  dark: "#625477",
  steel: "#A8B4CA",
  fairy: "#F58FBD",
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

  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },

  pokemonView: {
    borderStyle: "solid",
    borderWidth: 0.7,
    borderColor: "#000",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },

  imgContainer: {
    padding: 15,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 60,
    aspectRatio: 1,
    resizeMode: "contain",
    backgroundColor: colors.background,
    borderRadius: 100,
  },

  txtContainer: {
    flex: 2,
  },

  name: {
    fontSize: 18,
    fontWeight: 500,
    textTransform: "capitalize",
    textAlign: "center",
    color: colors.txtLight,
    fontFamily: "Inter-Regular",
  },
  type: {
    marginTop: 8,
    fontSize: 16,
    color: colors.txtLight,
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
});
