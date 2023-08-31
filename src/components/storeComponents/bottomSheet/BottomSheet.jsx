import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useEffect, useReducer } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGlobalContext } from "../../../context/Context";
import { COLORS } from "../../../constants/theme";
import Search from "../../searchComponent/Search";
import Slider from "@react-native-community/slider";
import styles from "./BottomSheetStyle";
import Categories from "./categories/Categories";
import Companies from "./companies/Companies";
import searchReducer from "./BottomSheet.reducer";

const BottomSheet = ( { setProductsFilter } ) => {

  const { products } = useGlobalContext();

  //On trouve le pris maximum des articles
  const prices = [...new Set(products?.map((item) => item.price))];
  const maxPrices = Math.ceil( Math.max( ...prices ) / 100 );
  
  const templateFilter = {
    price: null,
    company: "all",
    category: "all",
    search: "",
  };

  const [ filterState, dispatch ] = useReducer( searchReducer, templateFilter );

  // On initialise un tableau de produits filters contenant tous les produits au départ.
  let productsFilter = [...products];

  // Fonction qui actualise le filtre en fonction des actions de l'utilisateur
  const handleFilterCompany = () => {

    // Filtre selon le prix
    if ( filterState.price ||  filterState.price === 0 ) productsFilter = products.filter( product =>  product.price / 100 <= filterState.price );
    
    // Filtre selon la company
    if ( filterState.company !== "all" ) productsFilter = productsFilter.filter( product => product.company === filterState.company );
    
    // Filtre selon la category
    if ( filterState.category !== "all" ) productsFilter = productsFilter.filter( product => product.category === filterState.category );
    
    // Filtre selon la recherche
    if ( filterState.search ) productsFilter = productsFilter.filter( product => ( product.name.includes( filterState.search.toLowerCase() ) ) );

    // On actualise le filtre apres les modifications
    setProductsFilter(productsFilter);
  };

  // On exécute la fonction a chaque fois que l'un des quatres paramètres de cette fonction est modifié
  useEffect( _ => handleFilterCompany( ) , [filterState]);

  const insets = useSafeAreaInsets();

  return (
    <View easing='ease' style={[styles.bottomSheetContainer]}>
      <ScrollView>

        {/* SearchComponent */}
        <Search color={COLORS.teal} getSearch={ (value)=> dispatch( { type: "SEARCH", payload: value } ) } meter={-insets.top + 20}/>

        {/* parameters */}
        <View style={ { marginTop: "18%" } }>
          
          {/* Companies */}
          <Text style={[styles.companiesTitle]}>companies</Text>
          <View style={[styles.companiesContainer]}>
            <FlatList
              data={["all", ...new Set(products?.map((item) => item.company))]}
              renderItem={({ item }) => <Companies company={item } filterState={filterState} index={item} getCompany={ ()=> dispatch( { type: "COMPANY", payload: item } ) } />}
              keyExtractor={(category) => category}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            />
          </View>

          {/* Price */}
          <Text style={[styles.pricetitle]}> Price : {filterState.price===null ? maxPrices / 2 : filterState.price} {" $"}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={maxPrices}
            thumbTintColor={COLORS.orange}
            minimumTrackTintColor={COLORS.orange}
            maximumTrackTintColor={COLORS.background}
            value={filterState.price===null ? maxPrices / 2 : filterState.price}
            onValueChange={(value) => dispatch( { type: "PRICE", payload: parseInt(value) } )}
          />

          {/* Categories */}
          <Text style={[styles.companiesTitle, { marginVertical: 15 }]}> categories </Text>
          <View style={[styles.companiesContainer]}>
            <FlatList
              data={[ "all", ...new Set( products?.map( ( item ) => item.category ) ) ]}
              renderItem={({ item }) => <Categories category={item} index={item} filterState={filterState} getCategory={ ()=> dispatch( { type: "CATEGORY", payload: item } ) } />}
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
