import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
    "Inter-Italic": require("../../assets/fonts/Inter-Italic.ttf"),
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
