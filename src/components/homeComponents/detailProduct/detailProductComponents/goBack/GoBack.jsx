import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const GoBack = () => {
  return (
    <ScrollView
      style={{
        // backgroundColor: "red",
        marginHorizontal: 20,
        marginTop: 30,
      }}>
      {/* GoBack */}
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
        retours
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
        Information concernant les retours
      </Text>

      {/* Expedition informations */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontWeight: "300",
            marginBottom: 15,
          }}>
          Vous devez nous faire part de votre décision de retourner votre
          commande dans un delais de 30 jours après sa réception.
        </Text>
        <Text
          style={{
            marginBottom: 15,
            fontWeight: "300",
          }}>
          Vous serez totalement remboursé (moins les frais de retour ou
          d'enlèvement), une fois que nous aurons réceptionné l'article.
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

export default GoBack;

const styles = StyleSheet.create({});
