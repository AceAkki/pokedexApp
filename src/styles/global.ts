import { StyleSheet } from "react-native";

export const colors = {
  primary: "#007AFF",
  secondary: "#00778",
  background: "#F2F2F7",
  backgroundLight: "#F5F5F599",

  txtLight: "#F2F2F7",
  text: "#1D2128",

  alert: "#D90000",
};
export const typeColors = {
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
    boxSizing: "border-box",
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
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
    boxSizing: "border-box",
    width: "100%",
  },
  innerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imgContainer: {
    // padding: 15,
    flex: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -15,
  },
  image: {
    width: "auto",
    height: 90,
    aspectRatio: 1,

    // backgroundColor: colors.background,
    // borderRadius: 100,
  },

  txtContainer: {
    flex: 1.1,
  },

  name: {
    fontSize: 20,
    textTransform: "capitalize",
    textAlign: "left",
    color: colors.txtLight,
    fontFamily: "ArchivoBlack-Regular",
  },
  type: {
    marginTop: 8,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "left",
    fontFamily: "Oswald-Light",
    borderWidth: 1,
    alignSelf: "flex-start",
    backgroundColor: colors.background,
    borderColor: colors.secondary,
    borderRadius: 5,
  },
});
