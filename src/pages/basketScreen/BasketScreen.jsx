import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderBasket from "../../components/basketComponents/headerBasket/HeaderBasket";
import { COLORS, windowWidth } from "../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import Articles from "../../components/basketComponents/articles/Articles";

const BasketScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 10,
        }}>
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          <HeaderBasket />

          {/* Articles du panier */}
          <Articles />

          {/* total du panier */}
          <View>
            <Text style={[styles.line]}></Text>
            <View style={[styles.totalContainer]}>
              <View style={[styles.left]}>
                <Text>Sous-total (3 Articles)</Text>
              </View>
              <View style={[styles.rigth]}>
                <Text style={[styles.price]}>1000 €</Text>
                <Text style={[styles.livraison]}>(Hors livraison)</Text>
                <View style={[styles.paiement]}>
                  <View style={{ opacity: 0.8 }}>
                    <Text>Ou paiement en </Text>
                  </View>
                  <View style={[styles.treeTimesContainer]}>
                    <Text style={[styles.treeTimes]}>3x</Text>
                  </View>
                  <View>
                    <Text style={{ opacity: 0.8 }}> sans frais.</Text>
                    <Text
                      style={{
                        backgroundColor: COLORS.black,
                        height: 0.7,
                        marginTop: 2,
                        marginLeft: 3,
                      }}></Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  totalContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  line: {
    backgroundColor: COLORS.background,
    height: 1.5,
    width: windowWidth / 1.05,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
  },
  left: {
    // backgroundColor: "green",
    flex: 1,
    paddingLeft: 2,
  },
  rigth: {
    // backgroundColor: "yellow",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  livraison: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 10,
  },
  paiement: {
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  treeTimesContainer: {
    borderWidth: 1,
    borderRadius: "200",
    backgroundColor: COLORS.black,
    color: COLORS.white,
    // marginHorizontal: 5,
    padding: 3,
  },
  treeTimes: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },

  amount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.background,
    width: 100,
    marginVertical: 5,
  },
  deleteContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    paddingRight: 15,
  },
  delete: {
    display: "flex",
    flexDirection: "row",
  },
  deleteText: {
    marginLeft: 10,
    opacity: 0.6,
  },
});
