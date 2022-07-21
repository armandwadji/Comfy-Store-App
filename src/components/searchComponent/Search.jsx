import { TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { COLORS } from "../../constants/theme";
import styles from "./SearchStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";

const Search = ({ scroll, color, setSearch }) => {
  //Variable déterminant la distance du top
  const insets = useSafeAreaInsets();

  //Variables pour l'appartion de la barre de scroll en fonction de la direction du scroll
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(scroll);
    const val = scroll;
    const res = val - value;
    // console.log("show :", show);
    // console.log("val :", val);
    // console.log("res :", res);
    if (res > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [scroll]);

  return (
    <Animatable.View
      animation={show ? "fadeInDown" : "fadeOutUp"}
      delay={200}
      duration={200}
      easing='ease-in'
      style={[
        styles.container,
        {
          top: insets.top + 10,
        },
      ]}>
      <TouchableOpacity>
        <TextInput
          onChangeText={(text) => setSearch(text)}
          placeholder='Recherche'
          placeholderTextColor={COLORS.black}
          style={[styles.textInput, { borderColor: color }]}
        />
        <Feather
          name={"search"}
          size={20}
          color={color ? color : COLORS.white}
          style={styles.icon}
        />
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Search;
