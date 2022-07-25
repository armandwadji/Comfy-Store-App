import { View, Text, ActivityIndicator, Image } from "react-native";
import React from "react";
import styles from "./HeaderStyle";
import {
  KaushanScript_400Regular,
  useFonts,
} from "@expo-google-fonts/kaushan-script";

import { Video } from "expo-av";
import { useIsFocused } from "@react-navigation/native";
import { windowWidth } from "../../../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const isFocused = useIsFocused();

  //Variable déterminant la distance du top
  const insets = useSafeAreaInsets();

  let [fontsLoaded, error] = useFonts({
    title: KaushanScript_400Regular,
  });

  //Condition dans le cas où la font n'est pas encore charger
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Video
        source={require("../../../../assets/video/videoHeader.mp4")}
        resizeMode='cover'
        shouldPlay={isFocused ? true : false}
        isLooping={true}
        useNativeControls={false}
        style={[styles.imgBackground]}>
        {/* Logo du Shop */}
        <View
          style={[
            styles.imgcontainer,
            {
              position: "absolute",
              top: insets.top,
              width: windowWidth,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              zIndex: 100,
            },
          ]}>
          <Image
            source={require("../../../../assets/img/logo-white.png")}
            resizeMode='cover'
            style={[
              styles.img,
              {
                height: 60,
                width: 100,
              },
            ]}
          />
        </View>
        {/* Devise du Shop*/}
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontFamily: "title" }]}>
            Shaki Store
          </Text>
        </View>
      </Video>
    </View>
  );
};

export default Header;
