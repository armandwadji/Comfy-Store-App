import { ScrollView, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../../../constants/theme";
import Search from "../../searchComponent/Search";
import styles from "./BottomSheetStyle";
import Categories from "./categories/Categories";
import Companies from "./companies/Companies";
import Price from "./price/Price";
import Likes from "./likes/Likes";


const BottomSheet = ( {filterState,  getSearch,getCompany, getPrice, getCategory, getLike }) => {

  const insets = useSafeAreaInsets();

  return (
    <View easing='ease' style={[styles.bottomSheetContainer]}>
      <ScrollView>
        <Search color={COLORS.teal} getSearch={ getSearch } meter={-insets.top + 20}/>
        <View style={ { marginTop: "18%" } }>
          <Companies filterState={filterState} getCompany={ getCompany }/>
          <Price filterState={filterState} getPrice={ getPrice }/>
          <Categories filterState={filterState} getCategory ={ getCategory }/>
          <Likes filterState={filterState} getLike={ getLike }/>
        </View>
      </ScrollView>
    </View>
  );
};

export default BottomSheet;
