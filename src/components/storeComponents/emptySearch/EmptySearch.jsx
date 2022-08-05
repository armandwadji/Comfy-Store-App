import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./EmptySearchStyle";
import { windowHeight } from "../../../constants/theme";

const EmptySearch = () => {
  return (
    <View style={{ height: windowHeight }}>
      <Text style={[styles.textInform]}>Aucun produit disponible</Text>
      <View style={[styles.imgContainer]}>
        <Image
          source={require("../../../../assets/img/empty-search.webp")}
          resizeMode='contain'
          style={[styles.img]}
        />
      </View>
    </View>
  );
};

export default EmptySearch;
