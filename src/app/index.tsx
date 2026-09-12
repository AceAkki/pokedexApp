import { Button, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/global";
import indexStyles from "./indexStyles";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globalStyles.headerContainer}>
          <Text accessibilityRole="header" style={globalStyles.heading}>
            Pokédex
          </Text>
        </View>

        <View style={indexStyles.imageContainer}>
          <Image
            source={require("../../assets/images/header.png")}
            style={indexStyles.image}
            accessibilityLabel="Pokédex header image"
            resizeMode="contain"
          />
        </View>

        <View style={indexStyles.promptWrap}>
          <Text style={indexStyles.promptTxt}>
            Learn Everything About{" "}
            <Text style={[globalStyles.bold900, indexStyles.promptTxt]}>
              Pokemon
            </Text>{" "}
            And Become{" "}
            <Text style={[globalStyles.bold900, indexStyles.promptTxt]}>
              Pokemon Master !
            </Text>
          </Text>
        </View>

        <View>
          <Button title="Get Started"></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
