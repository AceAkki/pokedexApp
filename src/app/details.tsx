import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//hooks
import useFetchData from "../hooks/useFetchData";
import { typeColors } from "../styles/global";
import detailsStyles from "./detailsStyles";

const Details = () => {
  const params = useLocalSearchParams();
  const currentName = Array.isArray(params?.name)
    ? params.name[0]
    : params.name;
  let { pokemon } = useFetchData({ name: currentName });
  // console.log(params.name);
  if (!pokemon) {
    return (
      <View>
        <Text>Details Loading</Text>
      </View>
    );
  }
  let pokemonType = pokemon.types[0].type.name;
  let imageSrc = pokemon.sprites.other["official-artwork"]
    .front_default as string;
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 20,
        }}
      >
        <View
          style={[
            {
              backgroundColor:
                typeColors[pokemonType as keyof typeof typeColors],
            },
            detailsStyles.headerContainer,
          ]}
        >
          <View>
            <Text style={detailsStyles.heading}>{pokemon.name}</Text>
            <Text>{pokemon.types[0].type.name}</Text>
          </View>
          <View>
            <Text>{pokemon.id}</Text>
          </View>
        </View>
        <View>
          <Image
            source={{
              uri: imageSrc,
            }}
            style={detailsStyles.image}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Details;
