import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import StoreProducts from "../../components/storeComponents/storeProducts/StoreProducts";
import { COLORS, URLProducts, windowHeight } from "../../constants/theme";
import BottomSheet from "../../components/storeComponents/bottomSheet/BottomSheet";
import Header from "../../components/storeComponents/header/Header";
import UseProducts from "../../hooks/products/UseProducts";
import axios from "axios";

const StoreScreen = () => {
  const [translate, setTranslate] = useState(windowHeight);
  const [productsFilter, setProductsFilter] = useState("");

  const getTranslate = (value) => {
    setTranslate(value);
  };

  const products = UseProducts();

  const fetchProducts = async () => {
    const res = await axios.get(URLProducts);
    const data = await res.data;
    setProductsFilter(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 10,
        }}>
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          {/* Header */}
          <Header getTranslate={getTranslate} productsFilter={productsFilter} />

          {/* Products */}
          {productsFilter.length > 0 ? (
            <StoreProducts products={productsFilter} />
          ) : (
            <ActivityIndicator size={30} color={COLORS.orange} />
          )}
        </ScrollView>
      </View>

      {/* BottomFilter */}
      {products && (
        <BottomSheet
          translate={translate}
          getTranslate={getTranslate}
          products={products}
          getProductFilter={setProductsFilter}
        />
      )}
    </SafeAreaView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.orange,
  },
  productsCounts: {
    fontSize: 10,
    opacity: 0.6,
    marginTop: 5,
  },

  right: {
    display: "flex",
    flexDirection: "row",
  },
  filter: {
    textTransform: "capitalize",
    marginRight: 15,
  },
});
