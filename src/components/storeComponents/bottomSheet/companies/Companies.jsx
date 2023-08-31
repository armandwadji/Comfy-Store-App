import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../constants/theme";

const Companies = ( { company, filterState, getCompany } ) => {

  return (
    <TouchableOpacity onPress={ _ => getCompany() } style={[ styles.companyBorder, company === filterState.company && { backgroundColor: COLORS.orange,borderColor: COLORS.white}]}>
      <Text style={[ styles.company, company === filterState.company && { color: COLORS.white } ]}>
        {company}
      </Text>
    </TouchableOpacity>
  );
};

export default Companies;

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
