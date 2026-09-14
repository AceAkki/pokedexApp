import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/global";
import indexStyles from "./indexStyles";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 16,
          alignItems: "center",
        }}
      >
        <View style={indexStyles.headerContainer}>
          <Text accessibilityRole="header" style={indexStyles.heading}>
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
          <Pressable>
            <Text>Get Started</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
