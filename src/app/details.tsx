import { useLocalSearchParams } from "expo-router";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
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
        <Text>Loading Pokemon Details</Text>
      </View>
    );
  }
  let pokemonType = pokemon.types[0].type.name;
  let imageSrc = pokemon.sprites.other["official-artwork"]
    .front_default as string;
  return (
    <SafeAreaView
      style={{
        backgroundColor: typeColors[pokemonType as keyof typeof typeColors],
      }}
    >
      <ScrollView
        contentContainerStyle={{
          backgroundColor: typeColors[pokemonType as keyof typeof typeColors],
          borderRadius: 12,
        }}
      >
        <View>
          <View style={detailsStyles.headingContainer}>
            <View style={detailsStyles.headingLeft}>
              <Text style={detailsStyles.heading}>{pokemon.name}</Text>
              <Text style={detailsStyles.type}>
                {pokemon.types[0].type.name}
              </Text>
            </View>
            <View style={detailsStyles.headingRight}>
              <Text style={detailsStyles.id}>#{pokemon.id}</Text>
            </View>
          </View>
          <ImageBackground
            source={require("../../assets/images/pokeball1.png")}
            resizeMode="cover"
            imageStyle={{
              opacity: 0.3,
              width: 300,
              height: 300,
              position: "absolute",
              right: 0,
              left: "auto",
            }}
            style={detailsStyles.imageContainer}
          >
            <Image
              source={{
                uri: imageSrc,
              }}
              style={detailsStyles.image}
            />
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Details;
