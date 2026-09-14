import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

const indexStyles = StyleSheet.create({
  headerContainer: {
    width: "100%",
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
    // alignSelf: "flex-start",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  image: {
    // flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 350,
  },
  promptWrap: {
    // flex: 1,
    width: "100%",
    backgroundColor:colors.background,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    // margin: 20,
  },
  promptTxt: {
    fontSize: 30,
  },
});

export default indexStyles;
