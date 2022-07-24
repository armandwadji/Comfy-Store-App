import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import HeaderBasket from "../../components/basketComponents/headerBasket/HeaderBasket";
import { COLORS, windowHeight, windowWidth } from "../../constants/theme";
import Articles from "../../components/basketComponents/articles/Articles";
import { useGlobalContext } from "../../context/Context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";

import { formatPrice } from "../../utils/Utils";
import { useIsFocused } from "@react-navigation/native";
import styles from "./BasketScreenStyle";

const BasketScreen = () => {
  const { totalPrice, totalAmount } = useGlobalContext();

  //Variable déterminant la distance du top
  const insets = useSafeAreaInsets();

  //Vavriable pour savoir si nous somme sur la fenetre en question
  const isFocused = useIsFocused();

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
            <View
              style={[
                styles.emptyContainer,
                {
                  height: windowHeight - insets.top * 4,
                },
              ]}>
              <Animatable.Image
                animation={isFocused ? "fadeInDown" : "fadeInUp"}
                easing={"ease-in-out"}
                source={require("../../../assets/img/images.png")}
                resizeMode='contain'
                style={{ height: 150 }}
              />
              <Animatable.Text
                animation={isFocused ? "fadeInUp" : "fadeInDown"}
                style={[styles.emptyBasket]}>
                Votre panier est vide !
              </Animatable.Text>
            </View>
          ) : (
            <>
              {/* Articles du panier */}
              <Articles />
              {/* total du panier */}
              <Animatable.View
                animation={isFocused ? "slideInRight" : "slideOutRight"}
                duration={0}>
                <Text style={[styles.line]}></Text>
                <View style={[styles.totalContainer]}>
                  <View style={[styles.left]}>
                    <Text>Sous-total ({totalAmount} Articles)</Text>
                  </View>
                  <View style={[styles.rigth]}>
                    <Text style={[styles.price]}>
                      {formatPrice(totalPrice)}
                    </Text>
                    <Text style={[styles.livraison]}>(Hors livraison)</Text>
                    <View style={[styles.paiement]}>
                      <View style={{ opacity: 0.8 }}>
                        <Text>Ou paiement en </Text>
                      </View>
                      <View style={[styles.treeTimesContainer]}>
                        <Text style={[styles.treeTimes]}>3x</Text>
                      </View>
                      <View>
                        <Text style={{ opacity: 0.8 }}> sans frais</Text>
                        <Text
                          style={{
                            backgroundColor: COLORS.black,
                            height: 0.5,
                            marginTop: 2,
                            marginLeft: 5,
                          }}></Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Animatable.View>
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
