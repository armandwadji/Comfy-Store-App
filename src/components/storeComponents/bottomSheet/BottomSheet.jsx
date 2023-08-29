import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../../constants/theme";
import Search from "../../searchComponent/Search";
import Slider from "@react-native-community/slider";
import styles from "./BottomSheetStyle";
import Categories from "./categories/Categories";
import Companies from "./companies/Companies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGlobalContext } from "../../../context/Context";

const BottomSheet = ( { getProductFilter } ) => {

  const { products } = useGlobalContext();

  //On trouve le pris maximum des articles
  const prices = [...new Set(products?.map((item) => item.price))];
  const maxPrices = Math.ceil(Math.max(...prices) / 100);

  // On initialise un tableau de produits filters contenant tous les produits au départ.
  let productsFilter = [...products];

  const [price, setPrice] = useState(null);
  const [Company, setCompany] = useState("all");
  const [Categorie, setCategorie] = useState("all");
  const [search, setSearch] = useState("");

  // Fonction qui actualise le filtre en fonction des actions de l'utilisateur
  const handleFilterCompany = (company, price, search, category) => {
    // Filtre selon le prix
    if ( price ) productsFilter = products.filter( product => price === 0 ? [] : product.price / 100 <= price );
    
    // Filtre selon la company
    if ( company !== "all" ) productsFilter = productsFilter.filter( product => product.company === company );
    
    // Filtre selon la category
    if ( category !== "all" ) productsFilter = productsFilter.filter( product => product.category === category );
    
    // Filtre selon la recherche
    if ( search ) productsFilter = productsFilter.filter( product => ( product.name.includes( search.toLowerCase() ) ) );

    // On actualise le filtre apres les modifications
    getProductFilter(productsFilter);
  };

  // On exécute la fonction a chaque fois que l'un des quatres paramètres de cette fonction est modifié
  useEffect(() => {
    handleFilterCompany(Company, price, search, Categorie);
  }, [Company, price, search, Categorie]);

  const insets = useSafeAreaInsets();

  return (
    <View easing='ease' style={[styles.bottomSheetContainer]}>
      <ScrollView>

        {/* SearchComponent */}
        <Search color={COLORS.teal} setSearch={setSearch} meter={-insets.top + 20}/>

        {/* parameters */}
        <View style={ { marginTop: "18%" } }>
          
          {/* Companies */}
            <Text style={[styles.companiesTitle]}>companies</Text>
            <View style={[styles.companiesContainer]}>
              <FlatList
                data={["all", ...new Set(products?.map((item) => item.company))]}
                renderItem={({ item }) => <Companies company={item} Company={Company} setCompany={setCompany} index={item}/>}
                keyExtractor={(category) => category}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </View>

          {/* Price */}
            <Text style={[styles.pricetitle]}> Price : {price && price !== 0 ? price : price===0 ? 0 : maxPrices / 2} {" $"}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={maxPrices}
              thumbTintColor={COLORS.orange}
              minimumTrackTintColor={COLORS.orange}
              maximumTrackTintColor={COLORS.background}
              value={maxPrices / 2}
              onValueChange={(value) => setPrice(parseInt(value))}
            />

          {/* Categories */}
            <Text style={[styles.companiesTitle, { marginVertical: 15 }]}>
              categories
            </Text>
            <View style={[styles.companiesContainer]}>
              <FlatList
                data={[ "all", ...new Set( products?.map( ( item ) => item.category ) ) ]}
                renderItem={({ item }) => <Categories category={item} index={item} Categorie={Categorie} setCategorie={setCategorie} />}
                keyExtractor={(category) => category}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BottomSheet;
