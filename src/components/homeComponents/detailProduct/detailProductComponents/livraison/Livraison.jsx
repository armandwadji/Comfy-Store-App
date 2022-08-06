import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./LivraisonStyle";

const Livraison = () => {
  return (
    <ScrollView style={[styles.livraisonContainer]}>
      {/* Expedition */}
      <Text style={[styles.h1]}>livraison</Text>

      <Text style={[styles.h2]}>livraison standard</Text>

      {/* Expedition informations */}
      <View style={{ marginBottom: 20 }}>
        <Text style={[styles.text]}>
          Livraison 6j/7, du lundi au samedi de 8h à 18h
        </Text>
        <Text style={[styles.text]}>
          Devant le pas de votre maison/immeuble.
        </Text>
        <Text style={[styles.text]}>
          Le jour de la livraison, le transporteur vous contactera par email et
          sms pour vous prevenir de leur arrivée.
        </Text>
        <Text style={[styles.text]}>
          En cas d'abscence, un avis de passage sera laissé dans votre boite aux
          lettres et doublé par e-mail afin de vous permettre une
          reprogrammation de votre livraison.
        </Text>
        <TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                textDecorationLine: "underline",
              },
            ]}>
            En savoir plus
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Livraison;
