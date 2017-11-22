import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const ProductListItem = ({ item, onPress, moneyIcon }) => {
  const { caption, imageURI, catalogName } = item || {
    caption: "",
    imageURI: "",
    catalog: ""
  };
  const { price, wasPrice, cashBack } = item.priceInfo || {
    price: null,
    wasPrice: null,
    cashBack: null
  };

  let wasPriceStyle = [styles.textDetail, styles.textLineThrough];

  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Image
          resizeMode="contain"
          style={styles.rowIcon}
          source={{ uri: imageURI }}
        />
        <View style={styles.rowDetail}>
          <Text style={styles.caption}>{caption}</Text>
          <View style={styles.rowDetailRow}>
            {wasPrice ? <Text style={wasPriceStyle}>{wasPrice} </Text> : null}
            <Text style={styles.textDetail}>{price}</Text>
          </View>
          {cashBack ? (
            <View style={styles.rowDetailRow}>
              <Text style={styles.textDetail}>{cashBack}</Text>
              <View style={styles.moneyIcon}>{moneyIcon}</View>
              <Text style={styles.textDetailCashback}>Cashback</Text>
            </View>
          ) : null}
          <Text style={styles.textDetail}>From: {catalogName}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProductListItem.propTypes = {
  onPress: PropTypes.func,
  moneyIcon: PropTypes.object
};

export default ProductListItem;
