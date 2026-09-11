import { StyleSheet } from "react-native";
const indexStyles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  image: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 350,
  },
  promptWrap: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  promptTxt: {
    fontSize: 24,
  },
});

export default indexStyles;
