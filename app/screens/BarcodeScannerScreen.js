import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { BarcodeScanner } from "../components/BarcodeScanner";
import { getProductListFromSearchTerm } from "../actions/products";

class BarcodeScannerScreen extends Component {
  handleOnPress = () => {
    this.goBack();
  };

  handleBarCodeRead = ({ type, data }) => {
    this.goBack();
    this.props.dispatch(getProductListFromSearchTerm(data));
  };

  goBack() {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() {
    return (
      <Container>
        <BarcodeScanner onBarCodeRead={this.handleBarCodeRead} />
        <Button title="Cancel" onPress={this.handleOnPress} />
      </Container>
    );
  }
}

export default connect()(BarcodeScannerScreen);
