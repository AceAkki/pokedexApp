import { StyleSheet } from "react-native";

export const colors = {
  primary: "#007AFF",
  background: "#F2F2F7",
  text: "#1C1C1E",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#fff",
    color: "#1c1010",
  },
});
