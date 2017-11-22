import React from "react";
import { StyleSheet, Text, View } from "react-native";

import styles from "./styles";

const MoneyIcon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>$</Text>
    </View>
  );
};
export default MoneyIcon;
