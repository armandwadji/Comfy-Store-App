import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../../constants/theme";
import Search from "../../searchComponent/Search";
import Slider from "@react-native-community/slider";
import styles from "./BottomSheetStyle";
import Categories from "./categories/Categories";
import Companies from "./companies/Companies";

const BottomSheet = ({ products, getProductFilter }) => {
  //On stock toutes les catégories disponibles
  const companies = ["all", ...new Set(products?.map((item) => item.company))];

  //On stock toutes les catégories disponibles
  const categories = [
    "all",
    ...new Set(products?.map((item) => item.category)),
  ];

  //On trouve le pris maximum des articles
  const prices = [...new Set(products?.map((item) => item.price))];
  const maxPrices = Math.ceil(Math.max(...prices) / 100);

  // On initialise un tableau de produits filters contenant tous les produits au départ.
  let productsFilter = [...products];

  const [price, setPrice] = useState(null);
  const [Company, setCompany] = useState("all");
  const [Categorie, setCategorie] = useState("all");
  const [search, setSearch] = useState("");

  const handleFilterCompany = (company, price, search, category) => {
    // Filtre selon le prix
    if (price) {
      productsFilter = products.filter(
        (product) => product.price / 100 <= price
      );
    }

    // Filtre selon la company
    if (company !== "all") {
      productsFilter = productsFilter.filter(
        (product) => product.company === company
      );
    }

    // Filtre selon la category
    if (category !== "all") {
      productsFilter = productsFilter.filter(
        (product) => product.category === category
      );
    }

    // Filtre selon la recherche
    if (search) {
      productsFilter = productsFilter.filter((product) => {
        if (product.name.includes(search.toLowerCase())) {
          return product;
        }
      });
    }

    // On actualise le filtre apres les modifications
    getProductFilter(productsFilter);
  };

  // On exécute la fonction a chaque fois que l'un des trois paramètres de cette fonction est modifié
  useEffect(() => {
    handleFilterCompany(Company, price, search, Categorie);
  }, [Company, price, search, Categorie]);

  return (
    <View easing='ease' style={[styles.bottomSheetContainer]}>
      <ScrollView>
        {/* Top line */}
        <View style={styles.line} />

        {/* SearchComponent */}
        <Search color={COLORS.teal} setSearch={setSearch} />

        {/* parameters */}
        <View
          style={{
            marginTop: "18%",
          }}>
          {/* Companies */}
          <>
            <Text style={[styles.companiesTitle]}>companies</Text>
            <View style={[styles.companiesContainer]}>
              <FlatList
                data={companies}
                renderItem={({ item }) => (
                  <Companies
                    company={item}
                    Company={Company}
                    setCompany={setCompany}
                    index={item}
                  />
                )}
                keyExtractor={(category) => category}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                // bounces={false}
              />
            </View>
          </>

          {/* Price */}
          <>
            <Text style={[styles.pricetitle]}>
              Price : {price && price !== 0 ? price : maxPrices / 2}
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
              onValueChange={(value) => setPrice(parseInt(value))}
            />
          </>

          {/* Categories */}
          <>
            <Text style={[styles.companiesTitle, { marginVertical: 15 }]}>
              categories
            </Text>
            <View style={[styles.companiesContainer]}>
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <Categories
                    category={item}
                    index={item}
                    Categorie={Categorie}
                    setCategorie={setCategorie}
                  />
                )}
                keyExtractor={(category) => category}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                // bounces={false}
              />
            </View>
          </>
        </View>
      </ScrollView>
    </View>
  );
};

export default BottomSheet;
