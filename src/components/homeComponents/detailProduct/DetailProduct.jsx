import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../constants/theme";
import styles from "./DetailProductStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Color from "../colorComponent/Color";
import { formatPrice, truncateText } from "../../../utils/Utils";
import AddPanier from "../../addpanier/AddPanier";
import SavInfo from "./savInfos/SavInfo";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGlobalContext } from "../../../context/Context";

const DetailProduct = ( { route: { params: { id, name, price, image, description, company, colors } }, navigation } ) => {
  
  const { likes, toggleLikes } = useGlobalContext();

  const [descLength, setDesclength] = useState(true);

  //Méthode pour le paragraphe de description
  const showDescription = _ => setDesclength( !descLength );

  //Pour ajouter dans le panier en cas de click de l'utilisateur
  const panier = { id, name, price, image };

  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.detailProductContainer]}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: insets.bottom === 0 ? 80 : insets.bottom }}>
        
          {/* BackNavigate */ }
        <TouchableOpacity onPress={ _ => navigation.goBack()} style={[styles.backIcon]}>
          <MaterialIcons name='arrow-back-ios' size={20} color={COLORS.orange} />
        </TouchableOpacity>

        {/* DetailContainer */}
        <View style={[styles.detailContainer]}>
          {/* Image */}
          <Image source={{ uri: image }} resizeMode='cover' style={[styles.img]} />

          {/* InfoContainer */}
          <View style={[styles.infoContainer]}>
            {/* Title */}
            <View style={[styles.titleContainer]}>
              <Text style={[styles.title]}>{name}</Text>
                <TouchableOpacity onPress={ () => toggleLikes( id ) }>
                  <AntDesign size={20} style={{ paddingRight: 10 }} name={likes.includes(id) ? "heart" : "hearto"} color={likes.includes(id) ? COLORS.red : COLORS.black} />
              </TouchableOpacity>
            </View>

            {/* Description */}
            <Text style={[styles.description]}>
              {descLength ? truncateText(description, 110) : description} <Text onPress={showDescription} style={[styles.plusDetail]}>...</Text>
            </Text>

            {/* Company */}
            <Text style={[styles.categoryContainer]}>
              par <Text style={[styles.category]}>{company}</Text>
            </Text>

            {/* Price */}
            <View style={{ marginBottom: 5 }}>
              <Text style={[styles.price]}>{formatPrice(price)}</Text>
              <Text style={[styles.sansFrais]}> ou 3 x {formatPrice(price / 3)} sans frais </Text>
            </View>

            {/* Colors */}
            <FlatList data={colors} keyExtractor={(article) => article} horizontal={true} bounces={false} renderItem={(color) => <Color color={color} />} />
          </View>

          {/* SAV Info */}

          {/* Expeditions */}
          <SavInfo title={"Expedition"} text={"Sous 7 jours ouvrés"} goTo={"expedition"} />

          {/* Livraisons */}
          <SavInfo title={"Livraisons"} text={"Livraison Standard 70 €"} goTo={"livraison"} />

          {/* GoBack */}
          <SavInfo title={"Retours"} text={"Retours faciles"} goTo={"goback"} />
        </View>
      </ScrollView>

      {/* AddPanier */}
      <AddPanier panier={panier} />
    </View>
  );
};

DetailProduct.sharedElements = (route) => {
  const { id } = route.params;
  return [
    {
      id: id,
    },
  ];
};

export default DetailProduct;
