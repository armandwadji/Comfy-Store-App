import { Text, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/theme";
import Search from "../../components/searchComponent/Search";
import Header from "../../components/homeComponents/header/Header";
import Product from "../../components/productComponent/Product";
import UseProducts from "../../hooks/products/UseProducts";

const HomeScreen = () => {
  //Méthode pour afficher la barre de recherche au scroll positif de l'utilisateur
  const [scroll, setScroll] = useState(null);
  const handleScroll = (e) => {
    setScroll(Math.round(e.nativeEvent.contentOffset.y));
  };

  //On va chercher la data grace à un hook personnalisé useproducts
  const products = UseProducts();
  const featured = products?.filter((product) => product.fields.featured);
  // console.log(featured.length);
  return (
    <>
      {/* Searchinput */}
      <Search scroll={scroll} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        snapToEnd={true}
        onScroll={(e) => handleScroll(e)}
        scrollEventThrottle={10000}
        style={{
          flex: 1,
        }}>
        {/* Header */}
        <Header />

        {/* Featured */}
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginVertical: 10,
            color: COLORS.teal,
          }}>
          <Text style={{ color: COLORS.orange }}>/</Text> Featured
        </Text>

        {/* Articles */}
        <FlatList
          data={featured}
          renderItem={(article) => <Product article={article} />}
          keyExtractor={(article) => article.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
