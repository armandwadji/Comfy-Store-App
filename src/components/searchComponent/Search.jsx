import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { COLORS, windowWidth } from "../../constants/theme";
import styles from "./SearchStyle";

const Search = ({ scroll }) => {
  const [show, setShow] = useState(null);
  const [value, setvalue] = useState(0);

  useEffect(() => {
    setShow(scroll);
    const val = scroll;
    const res = val - show;
    // console.log("show :", show);
    // console.log("val :", val);
    // console.log("res :", res);
    if (res > 0) {
      setvalue(-100);
    } else {
      setvalue(0);
    }
  }, [scroll]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          transform: [{ translateY: value }],
        },
      ]}>
      <TextInput
        placeholder='Recherche'
        placeholderTextColor={COLORS.background}
        style={styles.textInput}
      />
      <Feather
        name={"search"}
        size={20}
        color={COLORS.background}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default Search;
