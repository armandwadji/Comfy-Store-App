import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS, windowHeight, windowWidth } from "../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        // backgroundColor: "green",
      }}>
      <View style={{ position: "relative" }}>
        <Image
          source={require("../../../assets/img/main-bcg.jpeg")}
          resizeMode='cover'
          style={{ width: windowWidth, height: windowHeight }}
        />
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
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginVertical: 10,
            color: COLORS.teal,
          }}>
          <Text style={{ color: COLORS.orange }}>/</Text> Featured
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
