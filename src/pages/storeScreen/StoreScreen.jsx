import { View,ScrollView,SafeAreaView } from "react-native";
import React, { useEffect, useReducer, useRef } from "react";
import { windowHeight } from "../../constants/theme";
import StoreProducts from "../../components/storeComponents/storeProducts/StoreProducts";
import BottomSheet from "../../components/storeComponents/bottomSheet/BottomSheet";
import Header from "../../components/storeComponents/header/Header";
import EmptySearch from "../../components/storeComponents/emptySearch/EmptySearch";

import { Modalize } from "react-native-modalize";
import { useGlobalContext } from "../../context/Context";
import searchReducer, { CATEGORY, COMPANY, LIKE, PRICE, SEARCH } from "../../components/storeComponents/bottomSheet/BottomSheet.reducer";

const StoreScreen = () => {

  const { productsFilter, filterProducts } = useGlobalContext();

  const modalizeRef = useRef( null );
  
  const templateFilter = {
    price: null,
    company: "all",
    category: "all",
    search: "",
    like: false
  };

  const [ filterState, dispatch ] = useReducer( searchReducer, templateFilter );

  const filtersMethod = {
    filterState,
    getSearch: search => dispatch( { type: SEARCH, payload: search } ),
    getCompany: company => dispatch( { type: COMPANY, payload: company } ),
    getPrice: price => dispatch( { type: PRICE, payload: parseInt( price ) } ),
    getCategory: category => dispatch( { type: CATEGORY, payload: category } ),
    getLike: _ => dispatch( { type: LIKE } ),
  }

  // On exécute la fonction a chaque fois que l'un des quatres paramètres de cette fonction est modifié
  useEffect( _ => filterProducts( filterState ) , [ filterState ] );

  const onOpen = () => modalizeRef.current?.open();

  return (
    <>
      <SafeAreaView>
        <View style={{ marginTop: 10 }}>
          <ScrollView stickyHeaderIndices={ [ 0 ] } showsVerticalScrollIndicator={ false }>
            <Header productsFilter={ productsFilter } onOpen={ onOpen } />
            {/* Products */}
            { productsFilter.length > 0 ? <StoreProducts products={ productsFilter } /> : <EmptySearch /> }
          </ScrollView>
        </View>
      </SafeAreaView>

      {/* BottomFilter */}
      <Modalize ref={modalizeRef} modalHeight={windowHeight / 2} snapPoint={windowHeight / 1.1}>
        <BottomSheet {...filtersMethod} />
      </Modalize>
    </>
  );
};

export default StoreScreen;
