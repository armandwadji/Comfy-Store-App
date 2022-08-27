import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { formatPrice } from "../../../utils/Utils";
import { useGlobalContext } from "../../../context/Context";
import * as Animatable from "react-native-animatable";
import { useIsFocused } from "@react-navigation/native";
import styles from "./ArticleStyle";

const Article = ({ article, index }) => {
  const { increase, decrease, delPanier } = useGlobalContext();
  const { id, name, price, image, amount } = article;

  //Vavriable pour savoir si nous somme sur la fenetre en question
  const isFocused = useIsFocused();

  return (
    <Animatable.View
      animation={isFocused && amount !== 0 ? "slideInLeft" : "slideOutRight"}
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
              <Text style={[styles.deleteText]}>Supprimer l'article</Text>
            </TouchableOpacity>
            <Text style={[styles.price]}> {formatPrice(price * amount)} </Text>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default Article;
