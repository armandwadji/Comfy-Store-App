import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useGlobalContext } from '../../../../context/Context';
import { COLORS, windowWidth } from '../../../../constants/theme';
import Slider from "@react-native-community/slider";


const Price = ( { filterState, getPrice } ) => {
    const { products } = useGlobalContext();

    //On trouve le pris maximum des articles
    const prices = [...new Set(products?.map((item) => item.price))];
    const maxPrices = Math.ceil( Math.max( ...prices ) / 100 );

    return (
        <>
            <Text style={[styles.pricetitle]}> Price : {filterState.price===null ? maxPrices / 2 : filterState.price} {" $"}</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={maxPrices}
                thumbTintColor={COLORS.orange}
                minimumTrackTintColor={COLORS.orange}
                maximumTrackTintColor={COLORS.background}
                value={filterState.price===null ? maxPrices / 2 : filterState.price}
                onValueChange={ value =>  getPrice(value) }
            />
        </>
    );
}

const styles = StyleSheet.create( {
    pricetitle: {
        marginTop: 20,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "capitalize",
        color: COLORS.orange,
      },
    slider: {
        width: windowWidth - 40,
        marginLeft: "auto",
        marginRight: "auto",
        height: 20,
      },
})

export default Price;
