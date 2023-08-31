import React from "react";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../../constants/theme";
import { StyleSheet, Text } from "react-native";
import { useGlobalContext } from "../../../context/Context";

const TotalAmount = () => {
  // variable pour le nombre total d'articles à afficher
  const { totalAmount } = useGlobalContext();
  return (
    <Animatable.View animation={totalAmount > 0 ? "fadeInUp" : "fadeOutUp"} easing='ease-out' style={[styles.totalAmount]}>
      <Text style={{ color: COLORS.white }}>{totalAmount}</Text>
    </Animatable.View>
  );
};

export default TotalAmount;

const styles = StyleSheet.create({
  totalAmount: {
    position: "absolute",
    backgroundColor: COLORS.orange,
    color: COLORS.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 25,
    borderRadius: 10000,
    zIndex: 100,
    bottom: 28,
    left: 25,
  },
});
