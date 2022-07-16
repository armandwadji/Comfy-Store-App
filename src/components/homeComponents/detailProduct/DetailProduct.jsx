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
import { formatPrice, truncateText } from "../../utils/Utils";
import Color from "../colorComponent/Color";
import * as Animatable from "react-native-animatable";

const DetailProduct = ({ route, navigation }) => {
  const { id, image } = route.params;
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
      style={[
        StyleSheet.absoluteFillObject,
        {
          // backgroundColor: "teal",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        },
      ]}>
      {loading ? (
        <ActivityIndicator size={30} color={COLORS.orange} />
      ) : (
        <>
          {/* BackNavigate */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.backIcon,
              {
                position: "absolute",
                top: 50,
                zIndex: 1,
                left: 20,
              },
            ]}>
            <MaterialIcons name='arrow-back-ios' size={15} />
          </TouchableOpacity>

          {/* DetailContainer */}
          <View
            style={{
              // backgroundColor: "red",
              height: windowHeight,
              width: windowWidth,
              display: "flex",
              alignItems: "center",
            }}>
            {/* Image */}
            <Image
              source={{ uri: product?.fields.image[0].url }}
              resizeMode='cover'
              style={{
                // backgroundColor: "red",
                height: windowHeight / 3,
                width: windowWidth - 10,
                borderRadius: 5,
                marginTop: 80,
                marginBottom: 5,
              }}
            />

            {/* InfoContainer */}
            <View
              style={[
                styles.info,
                {
                  // backgroundColor: "green",
                  width: windowWidth,
                  paddingHorizontal: 5,
                },
              ]}>
              {/* Title */}
              <View
                style={[
                  styles.titleContainer,
                  {
                    // backgroundColor: "green",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                ]}>
                <Text
                  style={[
                    styles.title,
                    {
                      fontSize: 25,
                      textTransform: "capitalize",
                      paddingHorizontal: 5,
                      color: COLORS.teal,
                    },
                  ]}>
                  {product?.fields.name}
                </Text>
                <AntDesign
                  name='hearto'
                  size={20}
                  color={COLORS.black}
                  style={{ paddingRight: 10 }}
                />
              </View>

              {/* Description */}
              <Text
                style={[
                  styles.description,
                  {
                    // backgroundColor: "red",
                    width: windowWidth / 1.1,
                    paddingRight: 20,
                    paddingLeft: 5,
                    marginVertical: 10,
                    color: COLORS.teal,
                    opacity: 0.8,
                  },
                ]}>
                {descLength
                  ? truncateText(product.fields.description, 110)
                  : product.fields.description}

                {/* Plus pour avoir plus de détail sur la description */}
                {descLength ? (
                  <Text
                    onPress={showDescription}
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: COLORS.orange,
                    }}>
                    {" "}
                    ...
                  </Text>
                ) : (
                  <Text
                    onPress={showDescription}
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      color: COLORS.orange,
                    }}>
                    {"   "}
                    ...
                  </Text>
                )}
              </Text>

              {/* Company */}
              <Text
                style={[
                  styles.categoryContainer,
                  {
                    paddingLeft: 5,
                    marginBottom: 5,
                    color: COLORS.teal,
                    opacity: 0.8,
                    fontSize: 15,
                  },
                ]}>
                par{" "}
                <Text
                  style={[
                    styles.category,
                    {
                      paddingLeft: 5,
                      color: COLORS.orange,
                      textTransform: "capitalize",
                      fontWeight: "500",
                    },
                  ]}>
                  {product.fields.company}
                </Text>
              </Text>

              {/* Price */}
              <View style={{ marginBottom: 5 }}>
                <Text
                  style={[
                    styles.price,
                    {
                      fontSize: 20,
                      textTransform: "capitalize",
                      paddingTop: 5,
                      paddingLeft: 5,
                      color: COLORS.teal,
                      fontWeight: "bold",
                    },
                  ]}>
                  {formatPrice(product.fields.price)}
                </Text>
                <Text
                  style={[
                    styles.sansFrais,
                    {
                      paddingLeft: 5,
                      paddingBottom: 5,
                      color: COLORS.teal,
                      opacity: 0.5,
                      borderBottomWidth: 1,
                      borderBottomColor: COLORS.black,
                    },
                  ]}>
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
          <Animatable.View
            animation='fadeInUp'
            delay={200}
            duration={400}
            easing='ease-in'
            style={[
              styles.addButtonContainer,
              {
                position: "absolute",
                bottom: 80,
                padding: 10,
                width: windowWidth - 40,
                backgroundColor: COLORS.orange,
                zIndex: 1,
                textAlign: "center",
              },
            ]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={[
                  styles.addButton,
                  {
                    color: COLORS.white,
                    textAlign: "center",
                    fontSize: 20,
                  },
                ]}>
                Ajouter au panier
              </Text>
            </TouchableOpacity>
          </Animatable.View>
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
