import { StyleSheet } from "react-native";

export const colors = {
  primary: "#007AFF",
  secondary: "#007",
  background: "#F2F2F7",
  text: "#1C1C1E",
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
  headerContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: "flex-start",
  },
  heading: {
    fontSize: 44,
    marginVertical: 10,
    fontFamily: "Inter-Regular",
    fontWeight: 700,
    alignSelf: "flex-start",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },
  name: {
    fontSize: 20,
    fontWeight: 800,
    textTransform: "capitalize",
    textAlign: "center",
  },
  type: {
    fontSize: 18,
    fontWeight: 400,
    textTransform: "capitalize",
    textAlign: "center",

    color: colors.primary,
  },
});
