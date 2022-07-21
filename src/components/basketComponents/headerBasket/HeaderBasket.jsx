import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/theme";

const HeaderBasket = () => {
  return (
    <View style={[styles.header]}>
      <Text style={styles.title}>panier</Text>
    </View>
  );
};

export default HeaderBasket;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.grey,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.orange,
  },
});
