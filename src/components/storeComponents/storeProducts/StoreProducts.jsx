import { StyleSheet, View } from "react-native";
import React from "react";
import Product from "../../productComponent/Product";

const StoreProducts = ({ products }) => {
  // const products = UseProducts();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
      {products?.map((item, index) => (
        <Product article={item} key={index} />
      ))}
    </View>
  );
};

export default StoreProducts;

const styles = StyleSheet.create({});
