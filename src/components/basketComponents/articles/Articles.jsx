import { StyleSheet, View } from "react-native";
import React from "react";
import Article from "../article/Article";
import { useGlobalContext } from "../../../context/Context";

const Articles = () => {
  const { panier } = useGlobalContext();

  return (
    <>
      {/* Articles du panier */}
      <View style={[styles.articlesContainer]}>
        {/* Article */}
        {panier.map((article, index) => <Article article={article} index={index} key={index} /> )}
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
