import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./HeaderStyle";

const Header = ({ productsFilter, onOpen }) => {
  return (
    <View style={[styles.header]}>
      <View style={styles.left}>
        <Text style={styles.title}>Store</Text>
        <Text style={styles.productsCounts}>
          {productsFilter && productsFilter.length} Produits
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.filter}>filter</Text>

        <TouchableOpacity
          onPress={() => {
            onOpen();
          }}>
          <Ionicons name={"ios-filter"} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
