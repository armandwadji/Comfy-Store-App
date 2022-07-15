import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";
import styles from "./HeaderStyle";

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/img/main-bcg.jpeg")}
        resizeMode='cover'
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        style={styles.imgBackground}>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>rest, relax, unwind</Text>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btn}>shop now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
