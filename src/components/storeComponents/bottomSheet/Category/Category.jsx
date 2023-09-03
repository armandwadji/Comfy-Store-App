import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../../../constants/theme";

const Category = ( { category, filterState, getCategory } ) => {
  
  return (
    <TouchableOpacity onPress={ _ => getCategory(category)} style={[ styles.categoryBorder, category === filterState.category && { backgroundColor: COLORS.orange, borderColor: COLORS.white}]}>
      <Text style={[ styles.category, category === filterState.category && { color: COLORS.white } ]}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryBorder: {
    marginHorizontal: 5,
    padding: 6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.teal,
    fontSize: 15,
  },
  category: {
    textTransform: "capitalize",
    color: COLORS.teal,
  },
});
