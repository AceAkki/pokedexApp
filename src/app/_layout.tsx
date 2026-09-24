import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
    "Inter-Italic": require("../../assets/fonts/Inter-Italic.ttf"),
    "Oswald-ExtraLight": require("../../assets/fonts/Oswald-ExtraLight.ttf"),
    "Oswald-Light": require("../../assets/fonts/Oswald-Light.ttf"),
    "Oswald-Regular": require("../../assets/fonts/Oswald-Regular.ttf"),
    "Oswald-Medium": require("../../assets/fonts/Oswald-Medium.ttf"),
    "Oswald-Bold": require("../../assets/fonts/Oswald-Bold.ttf"),
    "Oswald-SemiBold": require("../../assets/fonts/Oswald-SemiBold.ttf"),
    "ArchivoBlack-Regular": require("../../assets/fonts/ArchivoBlack-Regular.ttf"),
    PokemonHollowNormal: require("../../assets/fonts/PokemonHollowNormal.ttf"),
    PokemonSolidNormal: require("../../assets/fonts/PokemonSolidNormal.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "PokeDex",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="details"
        options={() => ({
          title: "Details",
          headerShown: false,
          headerBackButtonDisplayMode: "minimal",
          presentation: "formSheet",
          sheetAllowedDetents: [0.5, 0.9],
          sheetGrabberVisible: true,
          sheetCornerRadius: 30,
        })}
      />
    </Stack>
  );
}
