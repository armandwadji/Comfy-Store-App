import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

// Icon
import AntDesign from "react-native-vector-icons/AntDesign";
import { formatPrice } from "../../../utils/Utils";
import { COLORS } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
const GoToBasket = ({ article }) => {
  const { name, price, image } = article;

  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.goToBasketContainer,
        {
          marginVertical: 20,
          paddingHorizontal: 30,
        },
      ]}>
      {/* AddContainer */}
      <View
        style={[
          styles.addContainer,
          {
            flexDirection: "row",
            alignItems: "center",
          },
        ]}>
        <AntDesign name='checkcircle' size={18} color={"green"} />
        <Text
          style={[
            styles.addContainer_Text,
            {
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "600",
            },
          ]}>
          Ajouter à votre panier
        </Text>
      </View>

      {/* InfosContainer */}
      <View
        style={[
          styles.infosContainer,
          {
            // backgroundColor: "red",
            marginVertical: 20,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}>
        <Image
          source={{ uri: image }}
          resizeMode='contain'
          style={[
            styles.img,
            {
              height: 100,
              width: 120,
              borderRadius: 5,
            },
          ]}
        />
        <View
          style={[
            styles.infos,
            {
              //   backgroundColor: "green",
              height: "100%",
              marginLeft: 20,
              flexDirection: "column",
              justifyContent: "center",
            },
          ]}>
          <Text
            style={[
              styles.name,
              {
                marginBottom: 10,
                fontSize: 20,
                fontWeight: "300",
              },
            ]}>
            {name}
          </Text>
          <Text
            style={[
              styles.price,
              {
                fontSize: 18,
                fontWeight: "bold",
              },
            ]}>
            {formatPrice(price)}
          </Text>
        </View>
      </View>

      {/* Btn */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("bottom");
        }}
        style={[
          styles.btn,
          {
            backgroundColor: COLORS.black,
          },
        ]}>
        <Text
          style={[
            styles.btnText,
            {
              color: COLORS.white,
              textAlign: "center",
              fontSize: 18,
              padding: 15,
            },
          ]}>
          Voir le panier
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoToBasket;

const styles = StyleSheet.create({});
