import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./productStyle";
import { useNavigation } from "@react-navigation/native";
import { formatPrice } from "../../utils/Utils";

import * as Animatable from "react-native-animatable";
import { useIsFocused } from "@react-navigation/native";

const Product = ({ article, index }) => {
  const [like, setLike] = useState(false);

  const navigation = useNavigation();

  const {
    id,
    fields: { price, name, image },
  } = article;

  const isFocused = useIsFocused();

  return (
    <TouchableOpacity
      style={[styles.container]}
      activeOpacity={0.8}
      onPress={() =>
        navigation.push("detail", {
          id,
          name,
          price,
          image: image.at(0).url,
          like,
        })
      }>
      <Animatable.View
        animation={isFocused ? "zoomIn" : "zoomOut"}
        duration={200 * (index + 1)}>
        <View style={[styles.imgContainer, { transform: [{ scale: 1 }] }]}>
          <Image
            source={{
              uri: image.at(0).url,
            }}
            resizeMode={"cover"}
            style={[styles.img]}
          />

          <TouchableOpacity style={styles.icon} onPress={() => setLike(!like)}>
            <AntDesign
              name={like ? "heart" : "hearto"}
              size={18}
              color={like ? COLORS.red : COLORS.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{formatPrice(price)}</Text>
        </View>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default Product;
