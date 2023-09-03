import { FlatList, ScrollView, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useReducer } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGlobalContext } from "../../../context/Context";
import { COLORS } from "../../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import Search from "../../searchComponent/Search";
import Slider from "@react-native-community/slider";
import styles from "./BottomSheetStyle";
import searchReducer, { CATEGORY, COMPANY, LIKE, PRICE, SEARCH } from "./BottomSheet.reducer";
import Categories from "./categories/Categories";
import Companies from "./companies/Companies";


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
    like: false
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
          
          {/* Companies */ }
          <Companies filterState={filterState} getCompany={ item => dispatch( { type: COMPANY, payload: item } ) }/>
          {/* <Text style={[styles.companiesTitle]}>companies</Text>
          <View style={[styles.companiesContainer]}>
            <FlatList
              data={["all", ...new Set(products?.map((item) => item.company))]}
              renderItem={({ item }) => <Company company={item } filterState={filterState} index={item} getCompany={ _ => dispatch( { type: COMPANY, payload: item } ) } />}
              keyExtractor={(category) => category}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            />
          </View> */}

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

          {/* Categories */ }
          <Categories filterState={filterState} getCategory ={ item => dispatch( { type: CATEGORY, payload: item } ) }/>

          {/* Like */ }
          <View style={styles.likesContainer}>
            <Text style={[styles.likesTitle]}> Likes: </Text>
            <TouchableOpacity style={styles.heart} onPress={ _ => dispatch({type: LIKE})}>
              <AntDesign name={filterState.like ? "heart" : "hearto"} color={filterState.like ? COLORS.red : COLORS.orange} size={30}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BottomSheet;
