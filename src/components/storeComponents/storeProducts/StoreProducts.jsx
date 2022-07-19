import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import Product from "../../productComponent/Product";
import UseProducts from "../../../hooks/products/UseProducts";
import { COLORS } from "../../../constants/theme";

const StoreProducts = () => {
  const products = UseProducts();
  return (
    <>
      {products ? (
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
      ) : (
        <ActivityIndicator size={30} color={COLORS.orange} />
      )}
    </>
  );
};

export default StoreProducts;

const styles = StyleSheet.create({});
