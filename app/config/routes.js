import React from "react";
import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import ProductList from "../screens/ProductList";
import ProductDetail from "../screens/ProductDetail";
import BarcodeScannerScreen from "../screens/BarcodeScannerScreen";

import { ImageHeader } from "../components/Header";

const ProductListStack = StackNavigator({
  ProductList: {
    screen: ProductList,
    navigationOptions: {
      headerTitle: "Product List"
    }
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: {
      headerTitle: "Product Detail"
    }
  }
});

export default StackNavigator(
  {
    ProductList: {
      screen: ProductListStack
    },
    BarcodeScanner: {
      screen: BarcodeScannerScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
