import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../../constants/theme";
import Search from "../../searchComponent/Search";
import Slider from "@react-native-community/slider";
import * as Animatable from "react-native-animatable";
import styles from "./BottomSheetStyle";

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
  const maxPrices = Math.ceil(Math.max(...prices) / 10);

  // On initialise un tableau vide de produits filters
  let productsFilter = [...products];

  const [price, setprice] = useState(maxPrices);
  const [categorie, setCategorie] = useState("all");
  const [search, setSearch] = useState("");

  const handleFilterCompany = (company, price, search) => {
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

  // On exécute la fonction a chaque fois que l'un des trois paramètres de cette fonction est modifié
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
      <ScrollView onScroll={(e) => handleScroll(e)} scrollEventThrottle={500}>
        {/* Top line */}
        <View style={styles.line} />

        {/* SearchComponent */}
        <Search color={COLORS.teal} setSearch={setSearch} />

        {/* parameters */}
        <View
          style={{
            marginTop: "20%",
          }}>
          {/* Companies */}
          <>
            <Text style={[styles.companiesTitle]}>companies</Text>
            <View style={[styles.companiesContainer]}>
              {companies.map((company) => (
                <TouchableOpacity
                  key={company}
                  onPress={() => setCategorie(company)}
                  style={[
                    styles.companyBorder,
                    categorie === company && {
                      backgroundColor: COLORS.orange,
                      borderColor: COLORS.white,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.company,
                      categorie === company && { color: COLORS.white },
                    ]}>
                    {company}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>

          {/* Price */}
          <>
            <Text style={[styles.pricetitle]}>
              Price : {price && price !== 0 && price}
              {" $"}
            </Text>
            <Slider
              style={[styles.slider]}
              minimumValue={0}
              maximumValue={maxPrices}
              thumbTintColor={COLORS.orange}
              minimumTrackTintColor={COLORS.orange}
              maximumTrackTintColor={COLORS.background}
              value={maxPrices / 2}
              onValueChange={(value) => setprice(parseInt(value))}
            />
          </>
        </View>
      </ScrollView>
    </Animatable.View>
  );
};

export default BottomSheet;
