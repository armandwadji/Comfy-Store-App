import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { COLORS, windowWidth } from "../../constants/theme";

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
        {
          position: "absolute",
          top: 60,
          zIndex: 100,
          transform: [{ translateY: value }],
        },
      ]}>
      <TextInput
        placeholder='Recherche'
        placeholderTextColor={COLORS.background}
        style={{
          left: windowWidth / 2,
          transform: [{ translateX: -windowWidth / 2 + 20 }],
          padding: 10,
          paddingLeft: 40,
          color: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.background,
          borderRadius: 5,
          width: windowWidth - 40,
        }}
      />
      <Feather
        name={"search"}
        size={20}
        color={COLORS.background}
        style={{ position: "absolute", top: 8, left: "8%" }}
      />
    </TouchableOpacity>
  );
};

export default Search;
