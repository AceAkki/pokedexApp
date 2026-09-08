import { Link, useLocalSearchParams } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";

//hooks
import useFetchData from "../hooks/useFetchData";

const Details = () => {
  const params = useLocalSearchParams();
  const currentName = Array.isArray(params?.name)
    ? params.name[0]
    : params.name;
  let { pokemon } = useFetchData({ name: currentName });
  // console.log(params.name);
  if (!pokemon) {
    <View>
      <Text>Details Loading</Text>;
    </View>;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
      }}
    >
      <Text>{pokemon?.name}</Text>
      <Link href="/" push asChild>
        <Button title="push to sec" />
      </Link>
    </ScrollView>
  );
};
export default Details;
