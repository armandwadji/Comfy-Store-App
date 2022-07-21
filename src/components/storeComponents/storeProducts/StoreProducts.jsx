import { StyleSheet, View } from "react-native";
import React from "react";
import Product from "../../productComponent/Product";

const StoreProducts = ({ products }) => {
  return (
    <View style={[styles.products]}>
      {products?.map((item, index) => (
        <Product article={item} key={index} index={index} />
      ))}
    </View>
  );
};

export default StoreProducts;

const styles = StyleSheet.create({
  products: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
