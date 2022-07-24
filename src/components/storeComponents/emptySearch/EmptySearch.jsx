import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";
import styles from "./EmptySearchStyle";

const EmptySearch = () => {
  return (
    <>
      <Text style={[styles.textInform]}>Aucun produit disponible</Text>
      <View style={[styles.imgContainer]}>
        <Image
          source={require("../../../../assets/img/empty-search.webp")}
          resizeMode='contain'
          style={[styles.img]}
        />
      </View>
    </>
  );
};

export default EmptySearch;
