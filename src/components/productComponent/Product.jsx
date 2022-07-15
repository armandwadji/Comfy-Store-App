import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, windowWidth } from "../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./productStyle";
import { useNavigation } from "@react-navigation/native";

const Product = ({ article }) => {
  const navigation = useNavigation();

  const {
    id,
    fields: { price, name, image },
  } = article.item;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() =>
        navigation.push("detail", {
          id,
        })
      }>
      <>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: image[0].url,
            }}
            resizeMode={"cover"}
            style={styles.img}
          />
          <TouchableOpacity style={styles.icon}>
            <AntDesign name='hearto' size={25} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price} $</Text>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default Product;
