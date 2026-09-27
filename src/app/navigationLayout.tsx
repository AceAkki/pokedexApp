import { Button } from "@react-navigation/elements";
import {
    createMaterialTopTabNavigator,
    createMaterialTopTabScreen,
} from "@react-navigation/material-top-tabs";
import {
    createStaticNavigation,
    useNavigation,
} from "@react-navigation/native";
import { Text, View } from "react-native";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Profile")}>
        Go to Profile
      </Button>
    </View>
  );
}

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
    </View>
  );
}

const MyTabs = createMaterialTopTabNavigator({
  screens: {
    Home: createMaterialTopTabScreen({
      screen: HomeScreen,
    }),
    Profile: createMaterialTopTabScreen({
      screen: ProfileScreen,
    }),
  },
});

const Navigation = createStaticNavigation(MyTabs);
