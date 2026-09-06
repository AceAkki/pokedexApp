import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

const Details = () => {
  const params = useLocalSearchParams();
  console.log(params.name);
  return <ScrollView></ScrollView>;
};
export default Details;
const styles = StyleSheet.create({});
