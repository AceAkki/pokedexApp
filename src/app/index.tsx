import { globalStyles } from "@/styles/global";
import indexStyles from "@/styles/indexStyles";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("@/assets/images/bg/1.jpg")}
      resizeMode="cover"
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: "red",
      }}
      imageStyle={{
        opacity: 0.3,
      }}
    >
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 20,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <View style={indexStyles.headerContainer}>
          <Text accessibilityRole="header" style={indexStyles.heading}>
            PoKéDex
          </Text>
        </View> */}

          <View style={indexStyles.viewContainer}>
            <Image
              source={require("../../assets/images/header.png")}
              style={indexStyles.image}
              accessibilityLabel="Pokédex header image"
              resizeMode="cover"
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

          <View style={indexStyles.viewContainer}>
            <Pressable
              onPress={() => router.push("/home")}
              style={({ pressed }) => [
                indexStyles.indexBtn,
                {
                  backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
                } as any,
              ]}
            >
              <Text style={indexStyles.indexBtnTxt}>Get Started</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
