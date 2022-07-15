import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, windowWidth } from "../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";

const Product = ({ article }) => {
  const {
    id,
    fields: { price, name, image },
  } = article.item;

  return (
    <View
      style={{
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 10,
        width: windowWidth - 50,
      }}>
      <View
        style={{
          width: "100%",
          height: 250,
          backgroundColor: COLORS.background,
          borderRadius: 5,
          position: "relative",
        }}>
        <Image
          source={{
            uri: image[0].url,
          }}
          resizeMode={"cover"}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 5,
          }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 15, top: 10 }}>
          <AntDesign name='hearto' size={25} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          // backgroundColor: "green",
          width: "100%",
        }}>
        <Text
          style={{
            textTransform: "capitalize",
            fontSize: 10,
            marginVertical: 5,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
          }}>
          {price} $
        </Text>
      </View>
    </View>
  );
};

export default Product;
