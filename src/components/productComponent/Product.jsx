import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./productStyle";
import { useNavigation } from "@react-navigation/native";
import { formatPrice } from "../../utils/Utils";

import * as Animatable from "react-native-animatable";
import { useIsFocused } from "@react-navigation/native";
import { useGlobalContext } from "../../context/Context";

const Product = ( { article, index } ) => {

  const { likes, toggleLikes } = useGlobalContext();

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  return (
    <TouchableOpacity style={[styles.container]} activeOpacity={0.8} onPress={() => navigation.push("detail", { ...article }) }>
      <Animatable.View animation={isFocused ? "zoomIn" : "zoomOut"} duration={200 * (index + 1)}>
        <View style={[styles.imgContainer, { transform: [{ scale: 1 }] }]}>
          <Image source={ { uri: article.image } } resizeMode={ "cover" } style={ [ styles.img ] } />
          <TouchableOpacity style={styles.icon} onPress={() => toggleLikes(article.id)}>
            <AntDesign name={likes.includes(article.id) ? "heart" : "hearto"} size={18} color={likes.includes(article.id) ? COLORS.red : COLORS.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{article.name}</Text>
          <Text style={styles.price}>{formatPrice(article.price)}</Text>
        </View>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default Product;
