import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
