import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../constants/theme";

const Category = ({ category, Categorie, setCategorie }) => {
  return (
    <TouchableOpacity onPress={ _ => setCategorie(category)} style={[ styles.companyBorder, Categorie === category && { backgroundColor: COLORS.orange, borderColor: COLORS.white}]}>
      <Text style={[ styles.company, Categorie === category && { color: COLORS.white } ]}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  companyBorder: {
    marginHorizontal: 5,
    padding: 6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.teal,
    fontSize: 15,
  },
  company: {
    textTransform: "capitalize",
    color: COLORS.teal,
  },
});
