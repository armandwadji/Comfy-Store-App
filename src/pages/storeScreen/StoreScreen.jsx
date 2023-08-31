import { View,ScrollView,SafeAreaView,ActivityIndicator} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import StoreProducts from "../../components/storeComponents/storeProducts/StoreProducts";
import { COLORS, windowHeight } from "../../constants/theme";
import BottomSheet from "../../components/storeComponents/bottomSheet/BottomSheet";
import Header from "../../components/storeComponents/header/Header";
import EmptySearch from "../../components/storeComponents/emptySearch/EmptySearch";

import { Modalize } from "react-native-modalize";
import { useGlobalContext } from "../../context/Context";

const StoreScreen = () => {
  const { products } = useGlobalContext();
  const [productsFilter, setProductsFilter] = useState(null);

  useEffect( _ => setProductsFilter( products ), [] );

  const modalizeRef = useRef(null);

  const onOpen = () => modalizeRef.current?.open();

  return (
    <>
      <SafeAreaView>
        <View style={{ marginTop: 10 }}>
          <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <Header productsFilter={productsFilter} onOpen={onOpen} />

            {/* Products */}
            { productsFilter
              ? ( productsFilter.length > 0 ? <StoreProducts products={ productsFilter } /> : <EmptySearch /> )
              : ( <ActivityIndicator size={ "large" } color={ COLORS.orange } style={ { flex: 1, height: windowHeight / 2, alignItems: "center" } } /> )
            }
          </ScrollView>
        </View>
      </SafeAreaView>

      {/* BottomFilter */}
      <Modalize ref={modalizeRef} modalHeight={windowHeight / 2} snapPoint={windowHeight / 1.1}>
        <BottomSheet setProductsFilter={setProductsFilter} />
      </Modalize>
    </>
  );
};

export default StoreScreen;
