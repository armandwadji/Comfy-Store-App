import { View } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

const Color = ({ color: { item } }) => {
  return (
    <View style={[styles.color, { backgroundColor: item }]}></View>
  );
};

export default Color;

const styles = StyleSheet.create({
  color: {
    height: 25,
    width: 25,
    borderRadius: 100,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});