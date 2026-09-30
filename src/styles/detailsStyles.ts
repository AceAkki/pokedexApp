import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

const detailsStyles = StyleSheet.create({
  headingContainer: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "Oswald-Bold",
    fontSize: 50,
    color: colors.txtLight,
    textTransform: "capitalize",
  },
  headingLeft: {
    justifyContent: "space-between",
  },
  headingRight: {
    alignItems: "center",
    justifyContent: "center",
  },
  type: {
    fontSize: 15,
    fontFamily: "Oswald-Medium",
    textTransform: "uppercase",
    color: colors.txt,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: colors.background,
    alignSelf: "flex-start",
  },
  id: {
    fontSize: 25,
    fontFamily: "ArchivoBlack-Regular",
    color: colors.txtLight,
  },
  imageContainer: { alignItems: "center", justifyContent: "center" },
  image: {
    width: 300,
    height: 300,
    aspectRatio: 1,
    alignSelf: "center",
  },
});

export default detailsStyles;
