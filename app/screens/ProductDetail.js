import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { ProductDetailCard } from "../components/Card";
import { LoadingIndicator } from "../components/ActivityIndicator";
import { getProductDetail } from "../actions/productDetail";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(
      getProductDetail(this.props.navigation.state.params.item.prodID)
    );
  }

  renderProductDetail = () => {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }
    return (
      <ScrollView>
        <ProductDetailCard product={this.props.product} />
      </ScrollView>
    );
  };

  render() {
    return <Container>{this.renderProductDetail()}</Container>;
  }
}

const mapStateToProps = state => {
  const { isFetching, product } = state.productDetail.productDetail;
  return {
    isFetching,
    product
  };
};

export default connect(mapStateToProps)(ProductDetail);
