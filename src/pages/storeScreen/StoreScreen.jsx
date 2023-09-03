import { View,ScrollView,SafeAreaView } from "react-native";
import React, { useRef } from "react";
import { windowHeight } from "../../constants/theme";
import StoreProducts from "../../components/storeComponents/storeProducts/StoreProducts";
import BottomSheet from "../../components/storeComponents/bottomSheet/BottomSheet";
import Header from "../../components/storeComponents/header/Header";
import EmptySearch from "../../components/storeComponents/emptySearch/EmptySearch";

import { Modalize } from "react-native-modalize";
import { useGlobalContext } from "../../context/Context";

const StoreScreen = () => {

  const { productsFilter } = useGlobalContext();

  const modalizeRef = useRef(null);

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
        <BottomSheet setProductsFilter={""} />
      </Modalize>
    </>
  );
};

export default StoreScreen;
