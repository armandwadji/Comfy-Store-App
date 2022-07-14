import { View, Text, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { COLORS, windowHeight, windowWidth } from "../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import Search from "../../components/searchComponent/Search";
import Header from "../../components/homeComponents/header/Header";

const HomeScreen = () => {
  return (
    <>
      {/* Searchinput */}
      <Search />

      <ScrollView
        showsVerticalScrollIndicator={false}
        snapToEnd={true}
        style={{
          flex: 1,
        }}>
        {/* Header */}
        <Header />

        {/* Featured */}
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
    </>
  );
};

export default HomeScreen;
