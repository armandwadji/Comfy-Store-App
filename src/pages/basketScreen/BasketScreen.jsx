import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import HeaderBasket from "../../components/basketComponents/headerBasket/HeaderBasket";
import { COLORS, windowHeight } from "../../constants/theme";
import Articles from "../../components/basketComponents/articles/Articles";
import { useGlobalContext } from "../../context/Context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";

import { formatPrice } from "../../utils/Utils";
import { useIsFocused } from "@react-navigation/native";
import styles from "./BasketScreenStyle";

// Icons
import Feather from "react-native-vector-icons/Feather";

const BasketScreen = () => {
  const { totalPrice, totalAmount } = useGlobalContext();

  //Variable déterminant la distance du top
  const insets = useSafeAreaInsets();

  //Vavriable pour savoir si nous somme sur la fenetre en question
  const isFocused = useIsFocused();

  // Code de reduction
  const [reduction, setReduction] = useState(false);

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
          {totalAmount === 0 ? (
            <View
              style={[
                styles.emptyContainer,
                {
                  height: windowHeight - insets.top * 4,
                },
              ]}>
              <Animatable.Image
                animation={isFocused ? "fadeInDown" : "fadeInUp"}
                easing={"ease-in-out"}
                source={require("../../../assets/img/images.png")}
                resizeMode='contain'
                style={{ height: 150 }}
              />
              <Animatable.Text
                animation={isFocused ? "fadeInUp" : "fadeInDown"}
                style={[styles.emptyBasket]}>
                Votre panier est vide !
              </Animatable.Text>
            </View>
          ) : (
            <>
              {/* Articles du panier */}
              <Articles />
              {/* total du panier */}
              <Animatable.View
                animation={isFocused ? "slideInRight" : "slideOutRight"}
                duration={0}>
                <Text style={[styles.line]}></Text>

                {/* Total Amount & price */}
                <View style={[styles.totalContainer]}>
                  <View style={[styles.left]}>
                    <Text>Sous-total ({totalAmount} Articles)</Text>
                  </View>
                  <View style={[styles.rigth]}>
                    <Text style={[styles.price]}>
                      {formatPrice(totalPrice)}
                    </Text>
                    <Text style={[styles.livraison]}>(Hors livraison)</Text>
                    <View style={[styles.paiement]}>
                      <View style={{ opacity: 0.8 }}>
                        <Text>Ou paiement en </Text>
                      </View>
                      <View style={[styles.treeTimesContainer]}>
                        <Text style={[styles.treeTimes]}>3x</Text>
                      </View>
                      <View>
                        <Text style={{ opacity: 0.8 }}> sans frais</Text>
                        <Text
                          style={{
                            backgroundColor: COLORS.black,
                            height: 0.5,
                            marginTop: 2,
                            marginLeft: 5,
                          }}></Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* Reduction Code */}
                <Text style={[styles.line]}></Text>

                {!reduction ? (
                  <>
                    {/* addCode */}
                    <View style={[styles.reductionCodeContainer]}>
                      <Text style={[styles.reductionCode]}>
                        Code de réduction ou chèque-cadeau ?
                      </Text>
                      <TouchableOpacity onPress={() => setReduction(true)}>
                        <Text style={[styles.addCode]}>Ajoutez-les ici</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                ) : (
                  <>
                    {/* Appliquer */}
                    <View style={[styles.applicationContainer]}>
                      <TextInput
                        placeholder='ex. MX120CFS'
                        keyboardType='ascii-capable'
                        style={[styles.textInput]}></TextInput>
                      <TouchableOpacity style={[styles.btn]}>
                        <Text>APPLIQUER</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}

                {/* Livraison */}
                <Text style={[styles.line]}></Text>
                {/* LivraisonContainer */}
                <View style={[styles.LivraisonContainer]}>
                  {/* Left */}
                  <View style={[styles.livraisonLeft]}>
                    {/* Ligne1 */}
                    <View style={[styles.ligne]}>
                      <Feather name='truck' size={20} style={[styles.icon]} />

                      <Text style={[styles.text]}>
                        Livraison à domicile disponible
                      </Text>
                    </View>

                    {/* Ligne 2 */}
                    <View
                      style={[
                        styles.ligne,
                        {
                          marginTop: 5,
                        },
                      ]}>
                      <Feather name='box' size={20} style={[styles.icon]} />

                      <Text style={[styles.text]}>
                        Point de retrait non disponible (disponible pour les
                        commandes uniquement composées d'articles de petite
                        taille)
                      </Text>
                    </View>
                  </View>

                  {/* right */}
                  <Text style={[styles.livraisonRight]}>70 €</Text>
                </View>
              </Animatable.View>
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
