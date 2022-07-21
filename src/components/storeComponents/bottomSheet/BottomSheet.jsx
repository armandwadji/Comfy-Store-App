import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";
import Search from "../../searchComponent/Search";
import Slider from "@react-native-community/slider";
import * as Animatable from "react-native-animatable";

const BottomSheet = ({
  translate,
  getTranslate,
  products,
  getProductFilter,
}) => {
  // Le scroll vers le bas ferme la fenetre de filtre
  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.y < -5) {
      // console.log(e.nativeEvent.contentOffset.y);
      getTranslate(false);
    }
  };

  //On stock toutes les catégories disponibles
  const companies = [
    "all",
    ...new Set(products?.map((item) => item.fields.company)),
  ];

  //On trouve le pris maximum des articles
  const prices = [...new Set(products?.map((item) => item.fields.price))];
  const maxPrices = Math.max(...prices) / 10;

  // On initialise un tableau vide de produits filters
  let productsFilter = [...products];

  const [price, setprice] = useState(parseInt(maxPrices) + 1);
  const [categorie, setCategorie] = useState("all");
  const [search, setSearch] = useState("");

  const handleFilterCompany = (company, price, search) => {
    // On change la couleur du boutton clicker

    setprice(parseInt(price));

    // Filtre selon le prix
    productsFilter = products.filter(
      (product) => product.fields.price / 10 <= price
    );

    // Filtre selon la categorie
    if (company !== "all") {
      productsFilter = productsFilter.filter(
        (product) => product.fields.company === company
      );
    }

    // Filtre selon la recherche
    if (search) {
      productsFilter = productsFilter.filter((product) => {
        if (product.fields.name.includes(search.toLowerCase())) {
          return product;
        }
      });
    }

    // On actualise le filtre apres les modifications
    getProductFilter(productsFilter);
  };

  // On exécute la fonction a chaque fois que l'un des trois paramètre de cette fonction est modifié
  useEffect(() => {
    handleFilterCompany(categorie, price, search);
  }, [categorie, price, search]);

  return (
    <Animatable.View
      animation={translate ? "slideInUp" : "slideOutDown"}
      easing='ease'
      style={[
        styles.bottomSheetContainer,
        translate
          ? {
              display: "block",
            }
          : {
              display: "none",
            },
      ]}>
      <ScrollView
        onScroll={(e) => handleScroll(e)}
        scrollEventThrottle={500}
        style={{}}>
        <View style={styles.line} />
        <Search
          color={COLORS.black}
          setSearch={setSearch}
          handleFilterCompany={handleFilterCompany}
        />

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
                  onPress={() => setCategorie(company)}
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
              onValueChange={(value) => setprice(parseInt(value))}
            />
          </>
        </View>
      </ScrollView>
    </Animatable.View>
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
    top: windowHeight / 2,
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
