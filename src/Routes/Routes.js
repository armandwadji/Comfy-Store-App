import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/homeScreen/HomeScreen";
import StoreScreen from "../pages/storeScreen/StoreScreen";
import BasketScreen from "../pages/basketScreen/BasketScreen";

//Icons
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { useRef } from "react";
import { windowWidth } from "../constants/theme";

const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator();
  const offSetAnimation = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: "10%",
          },
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case "Home":
                if (focused) {
                  return <Entypo name='home' size={35} />;
                } else {
                  return <SimpleLineIcons name='home' size={35} />;
                }

              case "Store":
                if (!focused) {
                  return <SimpleLineIcons name='handbag' size={35} />;
                } else {
                  return <FontAwesome name='shopping-bag' size={35} />;
                }

              case "Basket":
                if (!focused) {
                  return <SimpleLineIcons name='basket' size={35} />;
                } else {
                  return <FontAwesome name='shopping-cart' size={35} />;
                }

              default:
            }
          },
        })}>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          listeners={{
            focus: () => {
              Animated.spring(offSetAnimation, {
                toValue: 0 * (windowWidth / 3),
                useNativeDriver: true,
              }).start();
            },
          }}
        />
        <Tab.Screen
          name='Store'
          component={StoreScreen}
          listeners={{
            focus: () => {
              Animated.spring(offSetAnimation, {
                toValue: 1 * (windowWidth / 3),
                useNativeDriver: true,
              }).start();
            },
          }}
        />
        <Tab.Screen
          name='Basket'
          component={BasketScreen}
          listeners={{
            focus: () => {
              Animated.spring(offSetAnimation, {
                toValue: 2 * (windowWidth / 3),
                useNativeDriver: true,
              }).start();
            },
          }}
        />
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offSetAnimation,
              },
            ],
          },
        ]}></Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    width: 40,
    height: 2,
    backgroundColor: "black",
    bottom: 30,
    left: windowWidth / 3 / 2 - 20,
    zIndex: 100,
  },
});

export default BottomTabScreen;
