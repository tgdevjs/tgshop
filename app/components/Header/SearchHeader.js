import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from "react-native";
import color from "color";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

const SearchHeader = props => {
  const { onPressBarcode } = props;
  const underlayColor = color(styles.$underlayColorBase).darken(
    styles.$underlayColorModifier
  );
  return (
    <View style={styles.searchHeaderContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          defaultValue=""
          placeholder={"Search"}
          placeholderTextColor={styles.$inputText}
          {...props}
        />
        <TouchableHighlight
          style={styles.buttonHighlight}
          onPress={onPressBarcode}
          underlayColor={underlayColor}
        >
          <View style={styles.buttonContainer}>
            <FontAwesome name="barcode" size={30} color="#000" />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

SearchHeader.propTypes = {
  onPressBarcode: PropTypes.func,
  onChangeText: PropTypes.func
};

export default SearchHeader;
