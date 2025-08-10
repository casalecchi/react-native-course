import Colors from "@/src/constants/Colors";
import { StyleSheet, Text, Image, Pressable } from "react-native";
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-easr-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: product.image ?? defaultPizzaImage }}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    flex: 1,
    padding: 10,
    maxWidth: "49%",
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
