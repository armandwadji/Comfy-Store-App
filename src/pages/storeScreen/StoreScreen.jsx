import {
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import StoreProducts from "../../components/storeComponents/storeProducts/StoreProducts";
import { COLORS, URLProducts } from "../../constants/theme";
import BottomSheet from "../../components/storeComponents/bottomSheet/BottomSheet";
import Header from "../../components/storeComponents/header/Header";
import UseProducts from "../../hooks/products/UseProducts";
import axios from "axios";
import EmptySearch from "../../components/storeComponents/emptySearch/EmptySearch";

const StoreScreen = () => {
  const [translate, setTranslate] = useState(false);
  const [productsFilter, setProductsFilter] = useState(null);

  const getTranslate = (value) => {
    setTranslate(value);
  };

  const products = UseProducts();

  const fetchProducts = async () => {
    try {
      const res = await axios.get(URLProducts);
      const data = await res.data;
      setProductsFilter(data);
    } catch (error) {
      console.log(error);
    }
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
          {productsFilter ? (
            productsFilter.length > 0 ? (
              <StoreProducts products={productsFilter} />
            ) : (
              <EmptySearch />
            )
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
