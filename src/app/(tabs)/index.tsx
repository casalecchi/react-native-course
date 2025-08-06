import Colors from "@/src/constants/Colors";
import { StyleSheet, Text, Image, View } from "react-native";
import products from "@/assets/data/products";

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginVertical: 10,
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});
