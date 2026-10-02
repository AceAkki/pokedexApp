import { useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Progress from "react-native-progress";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

//hooks
import useFetchData from "@/hooks/useFetchData";

// styles
import detailsStyles from "@/styles/detailsStyles";
import { colors, globalStyles, typeColors, typeIcons } from "@/styles/global";

// icons
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
      <SafeAreaView style={[{ flex: 1 }, globalStyles.center]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  let pokemonType = pokemon.types[0].type.name;
  let imageSrc = pokemon.sprites.other["official-artwork"]
    .front_default as string;

  const StatsRoute = useCallback(
    () => (
      <View style={detailsStyles.detailsTab}>
        {pokemon.stats.map((stat) => (
          <View key={stat.stat.name}>
            <Text>{stat.stat.name}</Text>
            <Progress.Bar progress={stat.base_stat / 100} />
            {/* import * as Progress from 'react-native-progress';
            
             */}
            <Text>{stat.base_stat}</Text>
          </View>
        ))}
      </View>
    ),
    [pokemon],
  );

  const AboutRoute = useCallback(
    () => (
      <View style={detailsStyles.detailsTab}>
        <Text style={detailsStyles.detailsWrap}>
          <Text style={detailsStyles.detailsLabel}> Species:</Text>
          {pokemon.species.name}
        </Text>

        <Text style={detailsStyles.detailsWrap}>
          <Text style={detailsStyles.detailsLabel}> Types: </Text>

          {pokemon.types.map((type) => (
            <Text key={type.type.name}>{type.type.name} </Text>
          ))}
        </Text>

        <Text style={detailsStyles.detailsWrap}>
          <Text style={detailsStyles.detailsLabel}> Height: </Text>
          {pokemon.height / 10} m
        </Text>

        <Text style={detailsStyles.detailsWrap}>
          <Text style={detailsStyles.detailsLabel}> Weight: </Text>
          {pokemon.weight / 10} kg
        </Text>
      </View>
    ),
    [pokemon],
  );

  const AbilitiesRoute = useCallback(
    () => (
      <View style={detailsStyles.detailsTab}>
        {pokemon.abilities.map((ability) => (
          <Text key={ability.ability.name}>{ability.ability.name} </Text>
        ))}
      </View>
    ),
    [pokemon],
  );

  const renderScene = SceneMap({
    about: AboutRoute,
    stats: StatsRoute,
    abilities: AbilitiesRoute,
  });

  const routes = [
    { key: "about", title: "About" },
    { key: "stats", title: "Stats" },
    { key: "abilities", title: "Abilities" },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: typeColors[pokemonType as keyof typeof typeColors],
      }}
    >
      <View
        style={{
          flex: 1,
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
        <View style={{ flex: 1, width: "100%" }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            commonOptions={{
              labelStyle: {
                fontSize: 18,
                fontWeight: "bold",
              },
            }}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                style={{
                  backgroundColor:
                    typeColors[pokemonType as keyof typeof typeColors],
                }}
                indicatorStyle={{
                  backgroundColor: colors.primary,
                  borderTopRightRadius: index === 1 ? 26 : index === 2 ? 0 : 26,
                  borderTopLeftRadius: index === 1 ? 26 : index === 2 ? 26 : 0,
                  height: "100%",
                }}
                activeColor={colors.txtLight}
                inactiveColor={colors.txt}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Details;
