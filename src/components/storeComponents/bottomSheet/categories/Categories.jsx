import Category from "../Category/Category";
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { useGlobalContext } from '../../../../context/Context';
import { COLORS } from '../../../../constants/theme';

const Categories = ( { filterState, getCategory } ) => {

    const { products } = useGlobalContext();

    return (
        <>
            <Text style={[styles.categoriesTitle, { marginVertical: 10 }]}> categories </Text>
            <View style={[styles.categoriesContainer]}>
                <FlatList
                data={[ "all", ...new Set( products?.map( ( item ) => item.category ) ) ]}
                renderItem={({ item }) => <Category category={item} index={item} filterState={filterState} getCategory= {getCategory} />}
                keyExtractor={(category) => category}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    categoriesTitle: {
        marginBottom: 15,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "capitalize",
        color: COLORS.orange,
        },
    categoriesContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
  });

export default Categories;
