import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, windowHeight } from "../../../../constants/theme";
import { Modalize } from "react-native-modalize";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Expedition from "../../detailProduct/detailProductComponents/expedition/Expedition";
import Livraison from "../detailProductComponents/livraison/Livraison";
import GoBack from "../detailProductComponents/goBack/GoBack";
import styles from "./SavInfoStyle";

const SavInfo = ({ title, text, goTo }) => {

  const modalizeRef = useRef(null);

  const onOpen = _ => modalizeRef.current?.open();
  
  return (
    <>
      <View style={[styles.SAVContainer]}>
        <TouchableOpacity onPress={ _ =>  onOpen() }>
          <View style={[styles.SAVInfoDetails]}>
            <Text>{title}</Text>
            <MaterialIcons name='arrow-forward-ios' size={15} color={COLORS.orange} />
          </View>
        </TouchableOpacity>
        <Text style={[styles.SAVInfo]}>{text}</Text>
        <Text style={[styles.line]}></Text>
      </View>

      {/* modalize */}
      <Modalize ref={modalizeRef} modalHeight={windowHeight / 1.3} snapPoint={windowHeight / 1.8}>
        {title === "Expedition" ? (
          <Expedition />
        ) : title === "Livraisons" ? (
          <Livraison />
        ) : (
          <GoBack />
        )}
      </Modalize>
    </>
  );
};

export default SavInfo;
