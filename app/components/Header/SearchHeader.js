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

import styles from "./styles";

const SearchHeader = props => {
  const { onPress } = props;
  const underlayColor = color(styles.$underlayColorBase).darken(
    styles.$underlayColorModifier
  );
  return (
    <View style={styles.searchHeaderContainer}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} {...props} />
        <TouchableHighlight
          style={styles.buttonHighlight}
          onPress={onPress}
          underlayColor={underlayColor}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

SearchHeader.propTypes = {
  onPress: PropTypes.func
};

export default SearchHeader;
