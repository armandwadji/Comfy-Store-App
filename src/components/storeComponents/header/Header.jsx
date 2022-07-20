import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, windowHeight } from "../../../constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({ getTranslate, productsFilter }) => {
  return (
    <View style={[styles.header]}>
      <View style={styles.left}>
        <Text style={styles.title}>Store</Text>
        <Text style={styles.productsCounts}>
          {productsFilter.length} Produits
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.filter}>filter</Text>

        <TouchableOpacity onPress={() => getTranslate(windowHeight / 2)}>
          <Ionicons name={"ios-filter"} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.grey,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.orange,
  },
  productsCounts: {
    fontSize: 10,
    opacity: 0.6,
    marginBottom: 10,
  },

  right: {
    display: "flex",
    flexDirection: "row",
  },
  filter: {
    textTransform: "capitalize",
    marginRight: 15,
  },
});
