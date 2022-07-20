import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import StoreProducts from "../../components/storeComponents/storeProducts/StoreProducts";
import { COLORS, windowHeight } from "../../constants/theme";
import BottomSheet from "../../components/storeComponents/bottomSheet/BottomSheet";
import Header from "../../components/storeComponents/header/Header";
import UseProducts from "../../hooks/products/UseProducts";

const StoreScreen = () => {
  let [translate, setTranslate] = useState(windowHeight);

  const getTranslate = (value) => {
    setTranslate(value);
  };

  const products = UseProducts();

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
          <Header getTranslate={getTranslate} />

          {/* Products */}
          {products ? (
            <StoreProducts products={products} />
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
