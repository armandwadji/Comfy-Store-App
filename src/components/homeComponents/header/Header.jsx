import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./HeaderStyle";
import { KaushanScript_400Regular } from "@expo-google-fonts/kaushan-script";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Header = () => {
  let [fontsLoaded, error] = useFonts({
    title: KaushanScript_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/img/main-bcg.jpeg")}
        resizeMode='cover'
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        style={styles.imgBackground}>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontFamily: "title" }]}>
            rest, relax, unwind
          </Text>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btn}>shop now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
