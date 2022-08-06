import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderBasket from "../../components/basketComponents/headerBasket/HeaderBasket";
import Articles from "../../components/basketComponents/articles/Articles";
import { useGlobalContext } from "../../context/Context";

import Emptybasket from "../../components/basketComponents/emptyBasket/Emptybasket";
import TotalBasket from "../../components/basketComponents/totalBasket/TotalBasket";

const BasketScreen = () => {
  const { totalAmount } = useGlobalContext();

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 10,
        }}>
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          <HeaderBasket />
          {totalAmount === 0 ? (
            <>
              {/*  Lorsque le panier est vide*/}
              <Emptybasket />
            </>
          ) : (
            <>
              {/* Articles du panier */}
              <Articles />

              {/* total du panier */}
              <TotalBasket />
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
