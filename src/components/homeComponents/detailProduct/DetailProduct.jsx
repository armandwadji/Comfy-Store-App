import { View, Text } from "react-native";
import React, { useEffect } from "react";
import UseProduct from "../../../hooks/product/UseProduct";

const DetailProduct = ({ route, navigation }) => {
  const { id } = route.params;

  const product = UseProduct(id);

  //   const { price, name, image, company } = product?.fields;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 3000);
  }, []);
  return (
    <>
      {product && (
        <View
          style={{
            flex: 1,
            backgroundColor: "teal",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text>{product?.fields.name}</Text>
        </View>
      )}
    </>
  );
};

export default DetailProduct;
