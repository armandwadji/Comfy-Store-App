import { View } from "react-native";
import React from "react";

const Color = ({ color: { item } }) => {
  return (
    <View
      style={{
        height: 25,
        width: 25,
        borderRadius: "100%",
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: item,
      }}></View>
  );
};

export default Color;
