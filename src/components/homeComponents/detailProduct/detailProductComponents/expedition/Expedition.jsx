import { ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./ExpeditionStyle";

const Expedition = () => {
  return (
    <ScrollView style={[styles.expeditionContainer]}>
      {/* Expedition */}
      <Text style={[styles.title]}>Expedition</Text>

      {/* Expedition informations */}
      <View style={{ marginBottom: 20, fontWeight: "300" }}>
        <Text style={[styles.text]}>
          Nous fabriquons nos modèles à la demande.Leur production peut donc
          prendre un peu de temps, mais la qualité de nos pièces pour un prix
          accéssible vous fera oublier cette attente.
        </Text>
        <Text
          style={[
            styles.text,
            {
              marginVertical: 15,
            },
          ]}>
          L'expédition consiste à l'envoi de nos produits depuis nos usines à
          nos partenaires assurant la livraison finale.
        </Text>
        <Text style={[styles.text]}>
          La livraison s'effectue entre 5 et 14 jours ouvrés après réception
          auprès de nos partenaires.
        </Text>
      </View>

      {/* Express */}
      <Text style={[styles.title]}>Express</Text>

      {/* Express informations */}
      <View>
        <Text style={[styles.text]}>
          Besoin d'un produit au plus vite ? Les produits indiqués express sont
          expédiés sous 5 jours ouvrés.{" "}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Expedition;
