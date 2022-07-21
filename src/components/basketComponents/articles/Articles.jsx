import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Article from "../article/Article";

const Articles = () => {
  return (
    <>
      {/* Articles du panier */}
      <View style={[styles.articlesContainer]}>
        <Article />
      </View>
    </>
  );
};

export default Articles;

const styles = StyleSheet.create({
  articlesContainer: {
    // marginTop: 5,
  },
});
