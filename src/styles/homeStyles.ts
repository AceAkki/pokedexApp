import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  pokemonView: {
    borderStyle: "solid",
    borderWidth: 0.7,
    borderColor: "#000",
    borderRadius: 20,
    justifyContent: "space-between",
    gap: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    boxSizing: "border-box",
    width: "100%",
  },
  heading: {
    fontSize: 25,
  },
  type: {
    fontSize: 12,
    borderRadius: 10,
  },

  imgContainer: {
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
});

export default homeStyles;
