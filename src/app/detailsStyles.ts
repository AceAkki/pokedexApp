import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

const detailsStyles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingHorizontal: 5,
    paddingTop: 20,
    alignItems: "flex-start",
    flexDirection: "column",
  },
  heading: {
    fontFamily: "Oswald-Bold",
    fontSize: 30,
    color: colors.txtLight,
    backgroundColor: colors.secondary,
    textTransform: "capitalize",
    // marginVertical: 10,
    // alignSelf: "flex-start",
  },
  image: {
    width: "100%",
    height: 300,
    aspectRatio: 1,
  },
});

export default detailsStyles;
