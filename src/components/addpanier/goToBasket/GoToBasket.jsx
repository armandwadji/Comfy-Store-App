import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { formatPrice } from "../../../utils/Utils";
import { useNavigation } from "@react-navigation/native";
import styles from "./GoToBasketStyle";

// Icon
import AntDesign from "react-native-vector-icons/AntDesign";

const GoToBasket = ({ article }) => {
  const { name, price, image } = article;

  const navigation = useNavigation();

  return (
    <View style={[styles.goToBasketContainer]}>
      {/* AddContainer */}
      <View style={[styles.addContainer]}>
        <AntDesign name='checkcircle' size={18} color={"green"} />
        <Text style={[styles.addContainer_Text]}>Ajouter à votre panier</Text>
      </View>

      {/* InfosContainer */}
      <View style={[styles.infosContainer]}>
        <Image source={{ uri: image }} resizeMode='contain' style={[styles.img]} />
        <View style={[styles.infos]}>
          <Text style={[styles.name]}>{name}</Text>
          <Text style={[styles.price]}>{formatPrice(price)}</Text>
        </View>
      </View>

      {/* Btn */}
      <TouchableOpacity style={[styles.btn]} onPress={ _ => navigation.navigate("bottom", { screen: "Basket" }) } >
        <Text style={[styles.btnText]}>Voir le panier</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoToBasket;
