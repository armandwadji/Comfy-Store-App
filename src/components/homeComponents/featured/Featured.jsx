import React from "react";
import { FlatList, ActivityIndicator, Text } from "react-native";
import UseProducts from "../../../hooks/products/UseProducts";
import Product from "../../productComponent/Product";
import { COLORS, windowHeight } from "../../../constants/theme";
import styles from "./FeaturedStyle";

const Featured = () => {
  //On va chercher la data grace à un hook personnalisé useproducts
  const products = UseProducts();
  const featured = products?.filter((product) => product.featured);

  return (
      <>
        <Text style={styles.textContainer}>
          <Text style={styles.slashcolor}>/</Text> Featured
        </Text>
        
        {/* Articles */}
        {featured ? (
          <FlatList
            data={featured}
            renderItem={ ( { item, index } ) => <Product article={ item } index={ index } />}
            keyExtractor={ article => article.id}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        ) : (
          <ActivityIndicator size={30} color={COLORS.orange} style={{ flex: 1, height: windowHeight / 2, alignItems: "center" }}/>
        )}
    </>
  );
};

export default Featured;
