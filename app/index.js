import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";

import Navigator from "./config/routes";
import store from "./config/store";

EStyleSheet.build({
  $white: "#ffffff",
  $border: "#E2E2E2",
  $darkBorder: "#5E5E5E",
  $inputText: "#797979",
  $lightGray: "#F0F0F0",
  $darkText: "#343434",
  $moneyGreen: "#019602",
  $orange: "#EB731B",
  $blue: "#3780BA"
  // $outline: 1
});

export default () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);
