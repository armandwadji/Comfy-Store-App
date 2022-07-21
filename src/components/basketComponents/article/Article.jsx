import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, windowWidth } from "../../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { formatPrice } from "../../../utils/Utils";
import { useGlobalContext } from "../../../context/Context";

import * as Animatable from "react-native-animatable";
import { useIsFocused } from "@react-navigation/native";

const Article = ({ article, index }) => {
  const { increase, decrease, delPanier } = useGlobalContext();
  const { id, name, price, image, amount } = article;

  //Vavriable pour savoir si nous somme sur la fenetre en question
  const isFocused = useIsFocused();

  return (
    <>
      {/* Article */}
      <Animatable.View
        animation={isFocused ? "slideInLeft" : "slideOutLeft"}
        duration={400 * (index + 1)}>
        <Text style={[styles.line]}></Text>
        <View style={[styles.articleContainer]}>
          <View style={[styles.left]}>
            <Image
              source={{ uri: image }}
              resizeMode='cover'
              style={[styles.img]}
            />
          </View>
          <View style={[styles.rigth]}>
            <Text style={[styles.title]}>{name}</Text>
            <Text style={[styles.expedition]}>
              Expédition estimée sous 7 jours ouvrés
            </Text>
            <Text style={[styles.price]}>{formatPrice(price)}</Text>
            <View style={[styles.amount]}>
              <TouchableOpacity onPress={() => decrease(id)}>
                <AntDesign name='minus' size={15} />
              </TouchableOpacity>
              <Text style={[styles.amountCount]}>{amount}</Text>
              <TouchableOpacity onPress={() => increase(id)}>
                <AntDesign name='plus' size={15} />
              </TouchableOpacity>
            </View>
            <View style={[styles.deleteContainer]}>
              <TouchableOpacity
                style={[styles.delete]}
                onPress={() => delPanier(id)}>
                <AntDesign name='delete' size={15} />
                <Text style={[styles.deleteText]}>Supprimer l'artilce</Text>
              </TouchableOpacity>
              <Text style={[styles.price]}>
                {" "}
                {formatPrice(price * amount)}{" "}
              </Text>
            </View>
          </View>
        </View>
      </Animatable.View>
    </>
  );
};

export default Article;

const styles = StyleSheet.create({
  line: {
    backgroundColor: COLORS.background,
    height: 1.5,
    width: windowWidth / 1.05,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
  },
  articleContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
  },
  left: {
    // backgroundColor: "green",
    flex: 1,
    position: "relative",
    marginLeft: 2,
  },
  img: {
    position: "absolute",
    top: 5,
    left: 0,
    height: "50%",
    width: "100%",
    borderRadius: 5,
  },
  rigth: {
    // backgroundColor: "yellow",
    flex: 2,
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 5,
  },
  expedition: {
    fontSize: 12,
    opacity: 0.6,
    marginVertical: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 5,
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
  amountCount: {
    fontSize: 16,
  },
  deleteContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
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
