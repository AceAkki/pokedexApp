import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

const Details = () => {
  const params = useLocalSearchParams();
  // console.log(params.name);
  return (
    <ScrollView>
      <View>{/*<Text>{params.name}</Text> */}</View>
    </ScrollView>
  );
};
export default Details;
const styles = StyleSheet.create({});
