import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { COLORS } from '../../../../constants/theme';
import AntDesign from "react-native-vector-icons/AntDesign";


const Likes = ({ filterState, getLike }) => {
    return (
        <View style={styles.likesContainer}>
            <Text style={[styles.likesTitle]}> Likes: </Text>
            <TouchableOpacity style={styles.heart} onPress={ _ => getLike() }>
                <AntDesign name={filterState.like ? "heart" : "hearto"} color={filterState.like ? COLORS.red : COLORS.orange} size={30}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create( {
    likesContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems:'center',
      },
      likesTitle: {
        marginVertical: 20,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "capitalize",
        color: COLORS.orange,
      },
      heart: {
        marginLeft: 15,
        paddingHorizontal:5,
      }
})

export default Likes;
