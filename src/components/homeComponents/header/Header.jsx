import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React from "react";
import styles from "./HeaderStyle";
import {
  KaushanScript_400Regular,
  useFonts,
} from "@expo-google-fonts/kaushan-script";

const Header = () => {
  let [fontsLoaded, error] = useFonts({
    title: KaushanScript_400Regular,
  });

  //Condition dans le cas où la font n'est pas encore charger
  if (!fontsLoaded) {
    return <ActivityIndicator />;
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
