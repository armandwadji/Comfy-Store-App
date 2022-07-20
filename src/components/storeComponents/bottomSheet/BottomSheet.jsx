import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";
import Search from "../../searchComponent/Search";

import Slider from "@react-native-community/slider";
import { formatPrice } from "../../../utils/Utils";

const BottomSheet = ({
  translate,
  getTranslate,
  products,
  getProductFilter,
}) => {
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

  //On trouve le pris maximum des articles
  const prices = [...new Set(products?.map((item) => item.fields.price))];
  const maxPrices = formatPrice(Math.max(...prices));

  // On initialise un tableau vide de produits filters
  let productsFilter = [...products];

  const [categorie, setCategorie] = useState("all");
  const [price, setprice] = useState(parseInt(maxPrices) + 1);

  const handleFilterCompany = (company, price) => {
    // On change la couleur du boutton clicker
    setCategorie(company);
    setprice(parseInt(price));

    if (company !== "all") {
      productsFilter = productsFilter
        .filter((product) => product.fields.company === company)
        .filter((product) => product.fields.price <= price * 10);
    } else {
      productsFilter = products.filter(
        (product) => product.fields.price <= price * 10
      );
    }

    getProductFilter(productsFilter);
  };

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

        {/* parameters */}
        <View
          style={{
            marginTop: "25%",
            display: "flex",
          }}>
          {/* Companies */}
          <>
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
                marginHorizontal: 10,
              }}>
              {companies.map((company) => (
                <TouchableOpacity
                  key={company}
                  onPress={() => handleFilterCompany(company, price)}
                  style={[
                    {
                      marginHorizontal: 10,
                      padding: 6,
                      borderWidth: 1,
                      borderRadius: 10,
                      fontSize: 15,
                    },
                    categorie === company && {
                      backgroundColor: COLORS.orange,
                      borderColor: COLORS.white,
                    },
                  ]}>
                  <Text
                    style={[
                      categorie === company && { color: COLORS.white },
                      { textTransform: "capitalize" },
                    ]}>
                    {company}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>

          {/* Price */}
          <>
            <Text
              style={{
                marginTop: 15,
                marginBottom: 20,
                marginLeft: 15,
                fontSize: 20,
                fontWeight: "bold",
                textTransform: "capitalize",
                color: COLORS.orange,
              }}>
              Price : {price && price !== 0 && price}
              {" $"}
            </Text>
            <Slider
              style={{
                width: windowWidth - 20,
                height: 20,
              }}
              minimumValue={0}
              maximumValue={parseInt(maxPrices) + 1}
              thumbTintColor={COLORS.orange}
              minimumTrackTintColor={COLORS.orange}
              maximumTrackTintColor={COLORS.background}
              value={maxPrices}
              onValueChange={(value) =>
                handleFilterCompany(categorie, parseInt(value))
              }
            />
          </>
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
