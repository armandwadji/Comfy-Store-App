import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import UseProduct from "../../../hooks/product/UseProduct";
import { COLORS, windowHeight, windowWidth } from "../../../constants/theme";
import styles from "./DetailProductStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Color from "../colorComponent/Color";
import * as Animatable from "react-native-animatable";
import { formatPrice, truncateText } from "../../../utils/Utils";
import AddPanier from "../../addpanier/AddPanier";

const DetailProduct = ({ route, navigation }) => {
  const { id } = route.params;
  const [loading, setLoading] = useState(true);

  const [descLength, setDesclength] = useState(true);

  //Méthode pour le paragraphe de description
  const showDescription = () => {
    setDesclength(!descLength);
  };

  const product = UseProduct(id);

  //   const { price, name, image, company } = product?.fields;

  useEffect(() => {
    product && setLoading(false);
  }, [product]);
  return (
    <View
      style={[StyleSheet.absoluteFillObject, styles.detailProductContainer]}>
      {loading ? (
        <ActivityIndicator size={30} color={COLORS.orange} />
      ) : (
        <>
          {/* BackNavigate */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backIcon]}>
            <MaterialIcons name='arrow-back-ios' size={15} />
          </TouchableOpacity>

          {/* DetailContainer */}
          <View style={[styles.detailContainer]}>
            {/* Image */}
            <Image
              source={{ uri: product?.fields.image[0].url }}
              resizeMode='cover'
              style={[styles.img]}
            />

            {/* InfoContainer */}
            <View style={[styles.infoContainer]}>
              {/* Title */}
              <View style={[styles.titleContainer]}>
                <Text style={[styles.title]}>{product?.fields.name}</Text>
                <AntDesign
                  name='hearto'
                  size={20}
                  color={COLORS.black}
                  style={{ paddingRight: 10 }}
                />
              </View>

              {/* Description */}
              <Text style={[styles.description]}>
                {descLength
                  ? truncateText(product.fields.description, 110)
                  : product.fields.description}

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
                par{" "}
                <Text style={[styles.category]}>{product.fields.company}</Text>
              </Text>

              {/* Price */}
              <View style={{ marginBottom: 5 }}>
                <Text style={[styles.price]}>
                  {formatPrice(product.fields.price)}
                </Text>
                <Text style={[styles.sansFrais]}>
                  ou 3 x {formatPrice(product.fields.price / 3)} sans frais
                </Text>
              </View>

              {/* Colors */}
              <FlatList
                data={product.fields.colors}
                keyExtractor={(article, index) => index}
                horizontal={true}
                renderItem={(color) => <Color color={color} />}
              />
            </View>
          </View>

          {/* AddPanier */}
          <AddPanier navigation={navigation} />
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
