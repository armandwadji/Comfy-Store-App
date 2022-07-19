import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Search from "../../components/searchComponent/Search";
import StoreProducts from "../../components/storeComponents/storeProducts/StoreProducts";
import { COLORS } from "../../constants/theme";

const StoreScreen = () => {
  return (
    <SafeAreaView>
      <Search color={COLORS.black} />
      <View
        style={{
          marginTop: 70,
        }}>
        <ScrollView>
          <StoreProducts />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StoreScreen;
