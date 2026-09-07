import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="details"
        options={({ route }) => ({
          title: route.params?.name?.toLocaleUpperCase() || "Details",
          headerBackButtonDisplayMode: "minimal",
          presentation: "formSheet",
          sheetAllowedDetents: [0.3, 0.5, 0.7],
          sheetGrabberVisible: true,
          sheetCornerRadius: 16,
          headerShown: false,
        })}
      />
    </Stack>
  );
}
