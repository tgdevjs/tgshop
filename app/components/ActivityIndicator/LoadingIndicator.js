import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

import { styles } from "./styles";

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
export { LoadingIndicator };
