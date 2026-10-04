import { useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
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
  const { width, height } = Dimensions.get("window");
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
  const englishEntry = pokemon.description.find(
    (entry) => entry.language.name === "en",
  );

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

  const AboutRoute = useCallback(() => {
    let formattedTxt = englishEntry
      ? englishEntry.flavor_text
          .replace(/\f/g, "\n")
          .replace(/\u00ad/g, "")
          .replace(/\n/g, " ")
          .replace(/\r/g, " ")
      : "";

    return (
      <View style={[detailsStyles.detailsTab]}>
        <Text style={detailsStyles.detailsWrap}>{formattedTxt}</Text>

        <View style={{ gap: 15, paddingBottom:20 }}>
          <View style={[globalStyles.typeRow]}>
            <View style={[globalStyles.center, { flex: 1 }]}>
              <Text style={detailsStyles.detailsValue}>
                {pokemon.height / 10} m
              </Text>
              <Text style={detailsStyles.detailsLabel}> Height </Text>
            </View>

            <View style={[globalStyles.center, { flex: 1 }]}>
              <Text style={detailsStyles.detailsValue}>
                {pokemon.weight / 10} kg
              </Text>
              <Text style={detailsStyles.detailsLabel}> Weight </Text>
            </View>
          </View>

          <View style={[globalStyles.typeRow]}>
            <View style={[globalStyles.center, { flex: 1 }]}>
              <Text style={detailsStyles.detailsValue}>
                {pokemon.base_experience}
              </Text>
              <Text style={detailsStyles.detailsLabel}> Base Exp</Text>
            </View>

            <View style={[globalStyles.center, { flex: 1 }]}>
              <Text style={detailsStyles.detailsValue}>
                {pokemon.types.map((type) => (
                  <Text key={type.type.name} style={detailsStyles.detailsValue}>
                    {type.type.name}{" "}
                  </Text>
                ))}
              </Text>
              <Text style={detailsStyles.detailsLabel}> Types </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }, [pokemon, englishEntry]);

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
              width: 250,
              height: 250,
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
              labelStyle: detailsStyles.tabLabel,
            }}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                style={[
                  detailsStyles.tabBar,
                  {
                    backgroundColor:
                      typeColors[pokemonType as keyof typeof typeColors],
                  },
                ]}
                indicatorStyle={detailsStyles.tabIndicator}
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
