import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";

const Header = () => {
  return (
    <View style={{ position: "relative" }}>
      <ImageBackground
        source={require("../../../../assets/img/main-bcg.jpeg")}
        resizeMode='cover'
        borderBottomLeftRadius={40}
        borderBottomRightRadius={40}
        style={{
          width: windowWidth,
          height: windowHeight - 80,
        }}>
        <View
          style={{
            position: "absolute",
            top: "40%",
            left: "10%",
          }}>
          <Text
            style={{
              color: COLORS.white,

              fontSize: 50,
              textTransform: "capitalize",
            }}>
            rest, relax, unwind
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              width: 100,
              borderColor: COLORS.white,
              borderRadius: 5,
              padding: 5,
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 15,
                textAlign: "center",
                textTransform: "capitalize",
              }}>
              shop now
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
