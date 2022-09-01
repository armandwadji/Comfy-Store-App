import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/homeScreen/HomeScreen";
import StoreScreen from "../pages/storeScreen/StoreScreen";
import BasketScreen from "../pages/basketScreen/BasketScreen";
import TotalAmount from "../components/homeComponents/totalAmount/TotalAmount";
import { Animated, StyleSheet, View } from "react-native";
import { useRef } from "react";
import { COLORS, windowHeight, windowWidth } from "../constants/theme";

//Icons
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const BottomTabScreen = ({ route }) => {
  // Variable qui va nous diriger vers le screen correspondant
  const ecran = route.params;

  const Tab = createBottomTabNavigator();
  const offSetAnimation = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            // height: 80,
          },

          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case "Home":
                if (focused) {
                  return <Entypo name='home' size={40} color={COLORS.orange} />;
                } else {
                  return <SimpleLineIcons name='home' size={30} />;
                }

              case "Store":
                if (!focused) {
                  return <SimpleLineIcons name='handbag' size={35} />;
                } else {
                  return (
                    <FontAwesome
                      name='shopping-bag'
                      size={35}
                      color={COLORS.orange}
                    />
                  );
                }

              case "Basket":
                if (!focused) {
                  return (
                    <View
                      style={{
                        position: "relative",
                      }}>
                      <SimpleLineIcons name='basket' size={35} />
                      <TotalAmount />
                    </View>
                  );
                } else {
                  return (
                    <View
                      style={{
                        position: "relative",
                      }}>
                      <FontAwesome
                        name='shopping-cart'
                        size={35}
                        color={COLORS.orange}
                      />
                      <TotalAmount />
                    </View>
                  );
                }

              default:
                // Redirection direct vers le panier
                ecran && (route.name = ecran.screen);
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
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    // width: 40,
    height: 2,
    backgroundColor: COLORS.orange,
    top: windowHeight - 35,
    left: windowWidth / 3 / 2 - 20,
    zIndex: 100,
  },
});

export default BottomTabScreen;
