import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

const detailsStyles = StyleSheet.create({
  headingContainer: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "Oswald-Bold",
    fontSize: 35,
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
    paddingVertical: 2,
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
    width: 250,
    height: 250,
    aspectRatio: 1,
    alignSelf: "center",
  },
  tabBar: {
    shadowColor: "transparent",
    marginVertical: 10,
    marginHorizontal: 40,
  },
  tabIndicator: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    height: "100%",
    alignItems: "center",
    paddingBottom: 5,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  tabLabel: {
    fontFamily: "Oswald-Medium",
    fontSize: 20,
  },
  detailsTab: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginHorizontal: 15,
    backgroundColor: colors.background,
    borderRadius: 16,
  },
  detailsWrap: {
    flex: 1,
    fontFamily: "Oswald-Light",
    fontSize: 20,
    textTransform: "capitalize",
    padding: 10,
  },
  detailsLabel: {
    fontFamily: "Oswald-Regular",
    opacity: 0.8,
    fontSize: 25,
    textTransform: "uppercase",
    paddingRight: 5,
  },
  detailsValue: {
    fontFamily: "Oswald-ExtraLight",
    fontSize: 30,
    paddingRight: 5,
    textTransform: "capitalize",
  },
});

export default detailsStyles;
