import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Livraison = () => {
  return (
    <ScrollView
      style={{
        // backgroundColor: "red",
        marginHorizontal: 20,
        marginTop: 30,
      }}>
      {/* Expedition */}
      <Text
        style={[
          styles.title,
          {
            textTransform: "capitalize",
            fontSize: 20,
            fontWeight: "500",
            marginBottom: 20,
          },
        ]}>
        livraison
      </Text>

      <Text
        style={[
          styles.title2,
          {
            textTransform: "capitalize",
            fontSize: 15,
            fontWeight: "400",
            letterSpacing: 1,
            marginBottom: 20,
          },
        ]}>
        livraison standard
      </Text>

      {/* Expedition informations */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontWeight: "300",
            marginBottom: 15,
          }}>
          Livraison 6j/7, du lundi au samedi de 8h à 18h
        </Text>
        <Text
          style={{
            marginBottom: 15,
            fontWeight: "300",
          }}>
          Devant le pas de votre maison/immeuble.
        </Text>
        <Text
          style={{
            fontWeight: "300",
            marginBottom: 15,
          }}>
          Le jour de la livraison, le transporteur vous contactera par email et
          sms pour vous prevenir de leur arrivée.
        </Text>
        <Text
          style={{
            fontWeight: "300",
            marginBottom: 15,
          }}>
          En cas d'abscence, un avis de passage sera laissé dans votre boite aux
          lettres et doublé par e-mail afin de vous permettre une
          reprogrammation de votre livraison.
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "300",
              marginBottom: 15,
              textDecorationLine: "underline",
            }}>
            En savoir plus
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Livraison;

const styles = StyleSheet.create({});
