import { ScrollView, View } from "react-native";
import React, { useEffect, useReducer } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGlobalContext } from "../../../context/Context";
import { COLORS } from "../../../constants/theme";
import Search from "../../searchComponent/Search";
import styles from "./BottomSheetStyle";
import searchReducer, { CATEGORY, COMPANY, LIKE, PRICE, SEARCH } from "./BottomSheet.reducer";
import Categories from "./categories/Categories";
import Companies from "./companies/Companies";
import Price from "./price/Price";
import Likes from "./likes/Likes";


const BottomSheet = ( ) => {

  const { filterProducts } = useGlobalContext();

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

        <Search color={COLORS.teal} getSearch={ search=> dispatch( { type: SEARCH, payload: search } ) } meter={-insets.top + 20}/>
        <View style={ { marginTop: "18%" } }>
          <Companies filterState={filterState} getCompany={ company => dispatch( { type: COMPANY, payload: company } ) }/>
          <Price filterState={filterState} getPrice={ price => dispatch( { type: PRICE, payload: parseInt(price) }) }/>
          <Categories filterState={filterState} getCategory ={ category => dispatch( { type: CATEGORY, payload: category } ) }/>
          <Likes filterState={filterState} getLike={ _ => dispatch({ type: LIKE }) }/>
        </View>
      </ScrollView>
    </View>
  );
};

export default BottomSheet;
