import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Company from '../company/Company';
import { useGlobalContext } from '../../../../context/Context';
import { COLORS } from '../../../../constants/theme';

const Companies = ({filterState, getCompany}) => {

    const { products } = useGlobalContext();

    return (
        <>
            <Text style={[styles.companiesTitle]}>companies</Text>
            <View style={[styles.companiesContainer]}>
                <FlatList
                data={["all", ...new Set(products?.map((item) => item.company))]}
                renderItem={({ item }) => <Company company={item } filterState={filterState} index={item} getCompany={ getCompany } />}
                keyExtractor={(category) => category}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                />
            </View>
            
        </>
    );
}

const styles = StyleSheet.create( {
    companiesTitle: {
        marginBottom: 15,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "capitalize",
        color: COLORS.orange,
      },
      companiesContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
      },
})

export default Companies;
