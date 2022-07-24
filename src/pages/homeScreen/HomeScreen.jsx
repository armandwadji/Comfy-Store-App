import { Text, ScrollView, FlatList, StatusBar } from "react-native";
import React, { useState } from "react";

import Search from "../../components/searchComponent/Search";
import Header from "../../components/homeComponents/header/Header";
import Product from "../../components/productComponent/Product";
import UseProducts from "../../hooks/products/UseProducts";
import styles from "./HomeScreenStyle";

import { useIsFocused } from "@react-navigation/native";

const HomeScreen = () => {
  //Méthode pour afficher la barre de recherche au scroll positif de l'utilisateur
  const [scroll, setScroll] = useState(null);
  const handleScroll = (e) => {
    setScroll(Math.round(e.nativeEvent.contentOffset.y));
  };

  //On va chercher la data grace à un hook personnalisé useproducts
  const products = UseProducts();
  const featured = products?.filter((product) => product.fields.featured);

  const isFocused = useIsFocused();

  return (
    <>
      <StatusBar
        barStyle={!isFocused ? "dark-content" : "light-content"}
        animated={true}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        snapToEnd={true}
        bounces={false}
        StickyHeaderComponent={<Search />}
        onScroll={(e) => handleScroll(e)}
        scrollEventThrottle={500}>
        {/* Header */}
        <Header />

        {/* Featured */}
        <Text style={styles.textContainer}>
          <Text style={styles.slashcolor}>/</Text> Featured
        </Text>

        {/* Articles */}
        <FlatList
          data={featured}
          renderItem={({ item, index }) => (
            <Product article={item} index={index} />
          )}
          keyExtractor={(article) => article.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
