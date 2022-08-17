import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
// import UseProduct from "../../../hooks/product/UseProduct";
import { COLORS } from "../../../constants/theme";
import styles from "./DetailProductStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Color from "../colorComponent/Color";
import { formatPrice, truncateText } from "../../../utils/Utils";
import AddPanier from "../../addpanier/AddPanier";
import SavInfo from "./savInfos/SavInfo";

const DetailProduct = ({ route, navigation }) => {
  const { id, like, name, price, image, description, company, colors } =
    route.params;

  const [loading, setLoading] = useState(true);

  const [descLength, setDesclength] = useState(true);

  //Méthode pour le paragraphe de description
  const showDescription = () => {
    setDesclength(!descLength);
  };

  //Pour aller chercher le détail du produit
  // const product = UseProduct(id);

  //Pour ajouter dans le panier en cas de click de l'utilisateur
  const panier = { id, name, price, image };

  useEffect(() => {
    route.params && setLoading(false);
  }, [route.params]);
  return (
    <View style={[styles.detailProductContainer]}>
      {loading ? (
        <ActivityIndicator size={"large"} color={COLORS.orange} />
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 50 }}>
            {/* BackNavigate */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.backIcon]}>
              <MaterialIcons
                name='arrow-back-ios'
                size={20}
                color={COLORS.orange}
                style={{}}
              />
            </TouchableOpacity>

            {/* DetailContainer */}
            <View style={[styles.detailContainer]}>
              {/* Image */}
              <Image
                source={{ uri: image }}
                resizeMode='cover'
                style={[styles.img]}
              />

              {/* InfoContainer */}
              <View style={[styles.infoContainer]}>
                {/* Title */}
                <View style={[styles.titleContainer]}>
                  <Text style={[styles.title]}>{name}</Text>

                  <AntDesign
                    name={like ? "heart" : "hearto"}
                    size={20}
                    color={like ? COLORS.red : COLORS.black}
                    style={{ paddingRight: 10 }}
                  />
                </View>

                {/* Description */}
                <Text style={[styles.description]}>
                  {descLength ? truncateText(description, 110) : description}

                  {/* ... pour avoir plus de détail sur la description */}
                  {descLength ? (
                    <Text onPress={showDescription} style={[styles.plusDetail]}>
                      {" "}
                      ...
                    </Text>
                  ) : (
                    <Text onPress={showDescription} style={[styles.plusDetail]}>
                      {"  "}
                      ...
                    </Text>
                  )}
                </Text>

                {/* Company */}
                <Text style={[styles.categoryContainer]}>
                  par <Text style={[styles.category]}>{company}</Text>
                </Text>

                {/* Price */}
                <View style={{ marginBottom: 5 }}>
                  <Text style={[styles.price]}>{formatPrice(price)}</Text>
                  <Text style={[styles.sansFrais]}>
                    ou 3 x {formatPrice(price / 3)} sans frais
                  </Text>
                </View>

                {/* Colors */}
                <FlatList
                  data={colors}
                  keyExtractor={(article, index) => index}
                  horizontal={true}
                  bounces={false}
                  renderItem={(color) => <Color color={color} />}
                />
              </View>

              {/* SAV Info */}

              {/* Expeditions */}
              <SavInfo
                title={"Expedition"}
                text={"Sous 7 jours ouvrés"}
                goTo={"expedition"}
              />

              {/* Livraisons */}
              <SavInfo
                title={"Livraisons"}
                text={"Livraison Standard 70 €"}
                goTo={"livraison"}
              />

              {/* GoBack */}
              <SavInfo
                title={"Retours"}
                text={"Retours faciles"}
                goTo={"goback"}
              />
            </View>
          </ScrollView>

          {/* AddPanier */}
          <AddPanier panier={panier} />
        </>
      )}
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
