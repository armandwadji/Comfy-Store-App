import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { COLORS, windowHeight, windowWidth } from "../../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Modalize } from "react-native-modalize";
import Expedition from "../../detailProduct/detailProductComponents/expedition/Expedition";
import Livraison from "../detailProductComponents/livraison/Livraison";
import GoBack from "../detailProductComponents/goBack/GoBack";

const SavInfo = ({ title, text, goTo }) => {
  const navigation = useNavigation();

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <View style={[styles.SAVContainer, { marginVertical: 5 }]}>
        <TouchableOpacity
          onPress={() => {
            onOpen();
            // navigation.navigate(goTo);
          }}>
          <View
            style={[
              styles.SAVInfoDetail,
              {
                // backgroundColor: "red",
                width: windowWidth,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              },
            ]}>
            <Text>{title}</Text>
            <MaterialIcons
              name='arrow-forward-ios'
              size={15}
              color={COLORS.orange}
              style={{}}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={[
            styles.SAVInfo,
            {
              marginVertical: 5,
              paddingHorizontal: 10,
              opacity: 0.5,
            },
          ]}>
          {text}
        </Text>
        <Text
          style={[
            styles.line,
            {
              backgroundColor: COLORS.background,
              height: 1.5,
              width: windowWidth / 1.05,
              marginLeft: "auto",
              marginRight: "auto",
              marginVertical: 10,
            },
          ]}></Text>
      </View>

      {/* modalize */}
      <Modalize
        ref={modalizeRef}
        modalHeight={windowHeight / 1.3}
        snapPoint={windowHeight / 1.8}>
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

const styles = StyleSheet.create({});
