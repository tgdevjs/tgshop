import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, StatusBar } from "react-native";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { SearchHeader } from "../components/Header";
import { ProductListItem, Separator } from "../components/List";
import { MoneyIcon } from "../components/MoneyIcon";
import {
  getInitialProductList,
  getProductList,
  setSearchTerm
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

  handlePressSearch = () => {
    this.props.dispatch(getProductList());
  };

  handleTextChange = text => {
    this.props.dispatch(setSearchTerm(text));
  };

  handlePress = item => {
    const title = item.caption || "Product Detail";
    this.props.navigation.navigate("ProductDetail", { title, item });
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="default" tranlucent={false} />
        <SearchHeader
          onPress={this.handlePressSearch}
          onChangeText={this.handleTextChange}
        />
        <FlatList
          data={this.props.productList}
          renderItem={({ item }) => (
            <ProductListItem
              onPress={() => this.handlePress(item)}
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
  productList: state.products.productSearch.searchItems
});

export default connect(mapStateToProps)(ProductCategoryList);
