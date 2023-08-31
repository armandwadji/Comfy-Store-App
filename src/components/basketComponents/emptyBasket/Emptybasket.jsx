import { View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { windowHeight } from "../../../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import styles from "./EmptyBasketStyle";

const Emptybasket = () => {
  //Variable déterminant la distance du top
  const insets = useSafeAreaInsets();

  //Vavriable pour savoir si nous somme sur la fenetre en question
  const isFocused = useIsFocused();

  return (
    <View style={[ styles.emptyContainer, { height: windowHeight - insets.top * 4 } ]}>
      <Animatable.Image
        animation={isFocused ? "fadeInDown" : "fadeInUp"}
        easing={"ease-in-out"}
        source={require("../../../../assets/img/emptyBasket.png")}
        resizeMode='contain'
        style={{ height: 150 }}
      />
      <Animatable.Text animation={isFocused ? "fadeInUp" : "fadeInDown"} style={[styles.emptyBasket]} >
        Votre panier est vide !
      </Animatable.Text>
    </View>
  );
};

export default Emptybasket;
