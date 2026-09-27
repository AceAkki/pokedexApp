import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
  useWindowDimensions
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SceneMap, TabView } from "react-native-tab-view";
// follwing is NativeTabs
//hooks
import useFetchData from "@/hooks/useFetchData";
import detailsStyles from "@/styles/detailsStyles";
import { colors, globalStyles, typeColors, typeIcons } from "@/styles/global";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Details = () => {
  const params = useLocalSearchParams();
  const currentName = Array.isArray(params?.name)
    ? params.name[0]
    : params.name;
  let { pokemon } = useFetchData({ name: currentName });

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  // console.log(params.name);
  if (!pokemon) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  let pokemonType = pokemon.types[0].type.name;
  let imageSrc = pokemon.sprites.other["official-artwork"]
    .front_default as string;

  const FirstRoute = () => (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <Text>Stats</Text>
      {pokemon.stats.map((stat) => (
        <View key={stat.stat.name}>
          <Text>{stat.stat.name}</Text>
          {/* <ProgressBar value={stat.base_stat} maxValue={255} /> */}
        </View>
      ))}
    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <Text>About</Text>
      <Text>Height: {pokemon.height / 10} m</Text>
      <Text>Weight: {pokemon.weight / 10} kg</Text>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const routes = [
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ];

  return (
    <SafeAreaView
      style={{
        backgroundColor: typeColors[pokemonType as keyof typeof typeColors],
      }}
    >
      <View
        style={{
          backgroundColor: typeColors[pokemonType as keyof typeof typeColors],
          borderRadius: 12,
        }}
      >
        <View>
          <View style={detailsStyles.headingContainer}>
            <View style={detailsStyles.headingLeft}>
              <Text style={detailsStyles.heading}>{pokemon.name}</Text>
              <View style={globalStyles.typeRow}>
                <Text style={detailsStyles.type}>{pokemonType}</Text>
                <FontAwesome6
                  name={typeIcons[pokemonType as keyof typeof typeIcons] as any}
                  size={24}
                  color={colors.txtLight}
                />
              </View>
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
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Details;
