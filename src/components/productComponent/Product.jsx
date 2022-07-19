import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./productStyle";
import { useNavigation } from "@react-navigation/native";
import { formatPrice } from "../../utils/Utils";

const Product = ({ article }) => {
  const [like, setLike] = useState(false);

  const navigation = useNavigation();

  const {
    id,
    fields: { price, name, image },
  } = article;

  return (
    <TouchableOpacity
      style={[styles.container]}
      activeOpacity={0.8}
      onPress={() =>
        navigation.push("detail", {
          id,
          like,
        })
      }>
      <>
        <View style={[styles.imgContainer, { transform: [{ scale: 1 }] }]}>
          <Image
            source={{
              uri: image[0].url,
            }}
            resizeMode={"cover"}
            style={[styles.img]}
          />

          <TouchableOpacity style={styles.icon} onPress={() => setLike(!like)}>
            <AntDesign
              name={like ? "heart" : "hearto"}
              size={20}
              color={like ? COLORS.red : COLORS.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{formatPrice(price)}</Text>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default Product;
