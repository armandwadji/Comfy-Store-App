import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, windowHeight } from "../../../constants/theme";

import Search from "../../searchComponent/Search";

const BottomSheet = ({ translate, getTranslate, products }) => {
  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.y < -5) {
      getTranslate(windowHeight);
      // console.log(e.nativeEvent.contentOffset.y);
    }
  };

  const companies = [
    "all",
    ...new Set(products?.map((item) => item.fields.company)),
  ];

  console.log(companies);
  return (
    <View
      style={[
        styles.bottomSheetContainer,
        {
          top: translate,
        },
      ]}>
      <ScrollView
        onScroll={(e) => handleScroll(e)}
        scrollEventThrottle={500}
        style={{}}>
        <View style={styles.line} />
        <Search color={COLORS.black} />
        <View
          style={{
            marginTop: "25%",
            display: "flex",
          }}>
          <Text
            style={{
              marginBottom: 15,
              marginLeft: 15,
              fontSize: 20,
              fontWeight: "bold",
              textTransform: "capitalize",
              color: COLORS.orange,
            }}>
            companies
          </Text>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}>
            {companies.map((company) => (
              <TouchableOpacity key={company}>
                <Text
                  style={{
                    marginHorizontal: 10,
                    padding: 5,
                    borderWidth: 1,
                    borderRadius: 10,
                    fontSize: 15,
                  }}>
                  {company}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: windowHeight,
    width: "100%",
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: 30,
  },
  line: {
    width: 85,
    height: 4,
    backgroundColor: COLORS.orange,
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
});
