import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Expedition = () => {
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
        Expedition
      </Text>

      {/* Expedition informations */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontWeight: "300",
          }}>
          Nous fabriquons nos modèles à la demande.Leur production peut donc
          prendre un peu de temps, mais la qualité de nos pièces pour un prix
          accéssible vous fera oublier cette attente.
        </Text>
        <Text
          style={{
            marginVertical: 15,
            fontWeight: "300",
          }}>
          L'expédition consiste à l'envoi de nos produits depuis nos usines à
          nos partenaires assurant la livraison finale.
        </Text>
        <Text
          style={{
            fontWeight: "300",
          }}>
          La livraison s'effectue entre 5 et 14 jours ouvrés après réception
          auprès de nos partenaires.
        </Text>
      </View>

      {/* Express */}
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
        Express
      </Text>

      {/* Express informations */}
      <View>
        <Text
          style={{
            fontWeight: "300",
          }}>
          Besoin d'un produit au plus vite ? Les produits indiqués express sont
          expédiés sous 5 jours ouvrés.{" "}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Expedition;

const styles = StyleSheet.create({});
