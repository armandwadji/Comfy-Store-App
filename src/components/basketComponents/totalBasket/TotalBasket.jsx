import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../../constants/theme";
import { useGlobalContext } from "../../../context/Context";
import { formatPrice } from "../../../utils/Utils";
import { useIsFocused } from "@react-navigation/native";
import styles from "./TotalBasketStyle";

// Icons
import Feather from "react-native-vector-icons/Feather";

const TotalBasket = () => {
  // On importe le prix et la quantité total
  const { totalPrice, totalAmount } = useGlobalContext();

  //Vavriable pour savoir si nous somme sur la fenetre en question
  const isFocused = useIsFocused();

  // Code de reduction
  const [reduction, setReduction] = useState(false);

  return (
    <>
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
            <Text style={[styles.price]}>{formatPrice(totalPrice)}</Text>
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
                style={[styles.textInput]}
              />
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

              <Text style={[styles.text]}>Livraison à domicile disponible</Text>
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
                Point de retrait non disponible (disponible pour les commandes
                uniquement composées d'articles de petite taille)
              </Text>
            </View>
          </View>

          {/* right */}
          <Text style={[styles.livraisonRight]}>70 €</Text>
        </View>
      </Animatable.View>

      {/* Valider la commande */}
      <Animatable.View
        animation={isFocused ? "bounceIn" : "bounceOutDown"}
        delay={500}
        duration={500}
        easing={"ease-in-circ"}>
        <TouchableOpacity style={[styles.btnValidation]}>
          <Text style={[styles.btnText]}>Valider mon panier</Text>
        </TouchableOpacity>
      </Animatable.View>
    </>
  );
};

export default TotalBasket;
