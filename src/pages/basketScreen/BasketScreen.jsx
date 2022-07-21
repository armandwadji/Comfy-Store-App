import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import HeaderBasket from "../../components/basketComponents/headerBasket/HeaderBasket";
import { COLORS, windowHeight, windowWidth } from "../../constants/theme";
import Articles from "../../components/basketComponents/articles/Articles";
import { useGlobalContext } from "../../context/Context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";

import { formatPrice } from "../../utils/Utils";
import { useIsFocused } from "@react-navigation/native";

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
              style={{
                // backgroundColor: "red",
                height: windowHeight - insets.top * 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
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

const styles = StyleSheet.create({
  emptyBasket: {
    marginVertical: 15,
    fontSize: 20,
    textAlign: "center",
  },
  totalContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  line: {
    backgroundColor: COLORS.background,
    height: 1.5,
    width: windowWidth / 1.05,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
  },
  left: {
    // backgroundColor: "green",
    flex: 1,
    paddingLeft: 5,
  },
  rigth: {
    // backgroundColor: "yellow",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  livraison: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 10,
  },
  paiement: {
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  treeTimesContainer: {
    borderWidth: 1,
    borderRadius: "200",
    backgroundColor: COLORS.black,
    color: COLORS.white,
    // marginHorizontal: 5,
    padding: 3,
  },
  treeTimes: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },

  amount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.background,
    width: 100,
    marginVertical: 5,
  },
  deleteContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    paddingRight: 15,
  },
  delete: {
    display: "flex",
    flexDirection: "row",
  },
  deleteText: {
    marginLeft: 10,
    opacity: 0.6,
  },
});
