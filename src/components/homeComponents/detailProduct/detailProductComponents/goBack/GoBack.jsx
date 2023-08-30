import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./GoBackStyle";

const GoBack = () => {
  return (
    <ScrollView style={[styles.goBackContainer]}>
      {/* GoBack */}
      <Text style={[styles.h1]}>retours</Text>

      <Text style={[styles.h2]}>Information concernant les retours</Text>

      {/* GoBack informations */}
      <View style={{ marginBottom: 20 }}>
        <Text style={[styles.text]}>
          Vous devez nous faire part de votre décision de retourner votre
          commande dans un delais de 30 jours après sa réception.
        </Text>
        <Text style={[styles.text]}>
          Vous serez totalement remboursé (moins les frais de retour ou
          d'enlèvement), une fois que nous aurons réceptionné l'article.
        </Text>
        <TouchableOpacity>
          <Text style={[ styles.text, { textDecorationLine: "underline" } ]}>
            En savoir plus
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GoBack;
