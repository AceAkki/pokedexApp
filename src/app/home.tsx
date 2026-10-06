import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// hooks
import useFetchData from "../hooks/useFetchData";

// styles
import detailsStyles from "@/styles/detailsStyles";
import { colors, globalStyles, typeColors, typeIcons } from "@/styles/global";
import homeStyles from "@/styles/homeStyles";

// icons
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// types
import type { Pokemon } from "@/types/pokemonType";

export default function Home() {
  const limit = 20;
  const [offset, setOffset] = useState<number>(0);
  const [newPokemons, setNewPokemons] = useState<Pokemon[]>([]);
  const { pokemons, loading } = useFetchData({
    limit: limit,
    offset: offset,
  });

  useEffect(() => {
    if (pokemons.length) {
      setNewPokemons((prev) => [...prev, ...pokemons]);
    }
  }, [pokemons]);

  if (newPokemons.length === 0) {
    return (
      <SafeAreaView style={[{ flex: 1 }, globalStyles.center]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  const handleLoadMore = () => {
    if (!loading) {
      setOffset((prev) => prev + limit);
    }
  };

  const renderItem = ({ item }: { item: Pokemon }) => {
    let type = item.types[0].type.name;
    let imageSrc = item.sprites.other["official-artwork"]
      .front_default as string;

    return (
      <Link
        href={{ pathname: "/details", params: { name: item.name } }}
        style={{ flex: 1 }}
      >
        <View
          style={[
            homeStyles.pokemonView,
            {
              backgroundColor: typeColors[type as keyof typeof typeColors],
              borderColor: typeColors[type as keyof typeof typeColors],
              borderWidth: 2,
            },
          ]}
        >
          <Text style={[detailsStyles.heading, homeStyles.heading]}>
            {item.name}
          </Text>

          <View style={globalStyles.innerRow}>
            <View style={homeStyles.txtContainer}>
              <FontAwesome6
                name={typeIcons[type as keyof typeof typeIcons] as any}
                size={24}
                color={colors.txtLight}
              />
              {/* <Text style={[detailsStyles.type, homeStyles.type]}>
                {type}
              </Text> */}
            </View>
            <ImageBackground
              style={homeStyles.imgContainer}
              source={require("../../assets/images/pokeball1.png")}
              resizeMode="cover"
              imageStyle={{ opacity: 0.3, width: 100, height: 100 }}
            >
              <Image
                source={{
                  uri: imageSrc,
                }}
                style={homeStyles.image}
              />
            </ImageBackground>
          </View>
        </View>
      </Link>
    );
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ paddingVertical: 30, alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("@/assets/images/bg/4.jpg")}
      resizeMode="cover"
      style={{
        flex: 1,
      }}
      imageStyle={{
        opacity: 0.2,
      }}
    >
      <SafeAreaView>
        <FlatList
          data={newPokemons}
          keyExtractor={(poke) => poke.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ gap: 16 }}
          contentContainerStyle={{
            gap: 16,
            paddingTop: 20,
            paddingHorizontal: 20,
            paddingBottom: 50,
          }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5} // Triggers when 50% from the bottom of the visible list
          ListFooterComponent={renderFooter}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
