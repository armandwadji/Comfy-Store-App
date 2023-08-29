import React from "react";
import { FlatList, ActivityIndicator, Text } from "react-native";
import Product from "../../productComponent/Product";
import { COLORS, windowHeight } from "../../../constants/theme";
import styles from "./FeaturedStyle";
import { useGlobalContext } from "../../../context/Context";

const Featured = () => {

  const { products } = useGlobalContext();

  return (
      <>
        <Text style={styles.textContainer}>
          <Text style={styles.slashcolor}>/</Text> Featured
        </Text>
        
        {/* Articles */}
        {products.length > 0 ? (
          <FlatList
            data={products?.filter( ( product ) => product.featured )}
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
