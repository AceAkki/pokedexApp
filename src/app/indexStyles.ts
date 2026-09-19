import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

const indexStyles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: colors.background,
    paddingHorizontal: 5,
    paddingTop: 20,
    alignItems: "flex-start",
  },
  heading: {
    fontFamily: "PokemonHollowNormal",
    fontSize: 20,
    color: colors.primary,
    backgroundColor: colors.secondary,
    // marginVertical: 10,
    // alignSelf: "flex-start",
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    width: "100%",
  },
  image: {
    // flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    resizeMode: "cover",
    width: "100%",
    height: 350,
    // aspectRatio: 1,
  },
  promptWrap: {
    // flex: 1,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    // margin: 20,
  },
  promptTxt: {
    fontSize: 25,
    fontFamily: "Inter-Regular",
  },
  indexBtn: {
    fontFamily: "PokemonSolidNormal",
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    outline: "none",
  },
});

export default indexStyles;
