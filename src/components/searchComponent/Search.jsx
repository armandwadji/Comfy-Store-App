import { View, TextInput } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { COLORS, windowWidth } from "../../constants/theme";

const Search = () => {
  return (
    <View style={{ position: "absolute", top: 60, zIndex: 100 }}>
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
    </View>
  );
};

export default Search;
