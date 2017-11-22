import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PropType from "prop-types";

import styles from "./styles";

const ProductDetailCard = ({ product }) => {
  let productDisplay = {
    caption: "",
    description: "",
    imageURL: ""
  };

  // Check if product exists
  if (product) {
    productDisplay = product;
  }
  // Check if priceInfo exists
  if (!productDisplay.priceInfo) {
    productDisplay.priceInfo = {
      price: ""
    };
  }
  const { caption, priceInfo, description, imageURL } = productDisplay;

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: imageURL }}
      />
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.price}>{priceInfo.price}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

ProductDetailCard.propTypes = {
  product: PropType.object
};

export default ProductDetailCard;
