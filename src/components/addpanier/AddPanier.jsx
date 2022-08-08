import { Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useRef } from "react";
import styles from "./AddPanierStyle";
import { useGlobalContext } from "../../context/Context";
import { Modalize } from "react-native-modalize";
import { windowHeight } from "../../constants/theme";
import GoToBasket from "./goToBasket/GoToBasket";

const AddPanier = ({ panier }) => {
  const { increase } = useGlobalContext();
  const { id, name, price, image } = panier;

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      {/* AddPanier */}
      <Animatable.View
        animation='fadeInUp'
        delay={200}
        duration={400}
        easing='ease-in'
        style={[styles.addButtonContainer]}>
        <TouchableOpacity
          onPress={() => {
            increase(id, name, price, image);
            onOpen();
          }}>
          <Text style={[styles.addButton]}>Ajouter au panier</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* Modalize */}
      <Modalize
        ref={modalizeRef}
        modalHeight={windowHeight / 1.3}
        snapPoint={windowHeight / 2.5}>
        <GoToBasket article={panier} />
      </Modalize>
    </>
  );
};

export default AddPanier;
