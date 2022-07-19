import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Product from "../../productComponent/Product";
import UseProducts from "../../../hooks/products/UseProducts";

const StoreProducts = () => {
  const products = UseProducts();
  return (
    <View
      style={{
        // backgroundColor: "red",
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
