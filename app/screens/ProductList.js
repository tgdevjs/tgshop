import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, StatusBar } from "react-native";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { SearchHeader } from "../components/Header";
import { ProductListItem, Separator } from "../components/List";
import { MoneyIcon } from "../components/MoneyIcon";
import {
  getInitialProductList,
  getProductListFromSearchTerm
} from "../actions/products";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});

class ProductCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(getInitialProductList());
  }

  handleChangeText = text => {
    this.props.dispatch(getProductListFromSearchTerm(text));
  };

  handlePressBarcode = () => {
    this.props.navigation.navigate("BarcodeScanner");
  };

  handlePressListItem = item => {
    console.log("ON PRESS PRODUCTT LISTITEM: ", item);
    const title = item.caption || "Product Detail";
    this.props.navigation.navigate("ProductDetail", { title, item });
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="default" tranlucent={false} />
        <SearchHeader
          onPress={this.handlePressSearch}
          onChangeText={this.handleChangeText}
          onPressBarcode={this.handlePressBarcode}
          value={this.props.searchTerm}
        />
        <FlatList
          data={this.props.productList}
          renderItem={({ item }) => (
            <ProductListItem
              onPress={() => this.handlePressListItem(item)}
              moneyIcon={<MoneyIcon />}
              item={item}
            />
          )}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={Separator}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.products.searchTerm,
  productList: state.products.productSearch.searchItems
});

export default connect(mapStateToProps)(ProductCategoryList);
