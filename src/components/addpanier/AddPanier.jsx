import { Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import React from "react";
import styles from "./AddPanierStyle";

const AddPanier = ({ navigation }) => {
  return (
    <>
      {/* AddPanier */}
      <Animatable.View
        animation='fadeInUp'
        delay={200}
        duration={400}
        easing='ease-in'
        style={[styles.addButtonContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.addButton]}>Ajouter au panier</Text>
        </TouchableOpacity>
      </Animatable.View>
    </>
  );
};

export default AddPanier;
