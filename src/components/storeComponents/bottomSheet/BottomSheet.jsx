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
import searchReducer, { CATEGORY, COMPANY, PRICE, SEARCH } from "./BottomSheet.reducer";

const BottomSheet = ( ) => {

  const { products, filterProducts } = useGlobalContext();

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

  // On exécute la fonction a chaque fois que l'un des quatres paramètres de cette fonction est modifié
  useEffect( _ => { filterProducts( filterState ) }, [ filterState ] );

  const insets = useSafeAreaInsets();

  return (
    <View easing='ease' style={[styles.bottomSheetContainer]}>
      <ScrollView>

        {/* SearchComponent */}
        <Search color={COLORS.teal} getSearch={ (value)=> dispatch( { type: SEARCH, payload: value } ) } meter={-insets.top + 20}/>

        {/* parameters */}
        <View style={ { marginTop: "18%" } }>
          
          {/* Companies */}
          <Text style={[styles.companiesTitle]}>companies</Text>
          <View style={[styles.companiesContainer]}>
            <FlatList
              data={["all", ...new Set(products?.map((item) => item.company))]}
              renderItem={({ item }) => <Companies company={item } filterState={filterState} index={item} getCompany={ _ => dispatch( { type: COMPANY, payload: item } ) } />}
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
            onValueChange={(value) => dispatch( { type: PRICE, payload: parseInt(value) } )}
          />

          {/* Categories */}
          <Text style={[styles.companiesTitle, { marginVertical: 15 }]}> categories </Text>
          <View style={[styles.companiesContainer]}>
            <FlatList
              data={[ "all", ...new Set( products?.map( ( item ) => item.category ) ) ]}
              renderItem={({ item }) => <Categories category={item} index={item} filterState={filterState} getCategory={ _ => dispatch( { type: CATEGORY, payload: item } ) } />}
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
