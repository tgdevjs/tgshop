import {
  GET_PRODUCT_DETAIL,
  PRODUCT_DETAIL_RESULT,
  PRODUCT_DETAIL_ERROR
} from "../actions/productDetail";

const initialState = {
  prodId: "0",
  productDetail: {
    isFetching: false,
    product: {}
  }
};

const setProductDetail = (state, action) => {
  let productDetail = {
    isFetching: true,
    product: {}
  };

  return productDetail;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      return { ...state, productDetail: setProductDetail(state, action) };
    case PRODUCT_DETAIL_RESULT:
      return {
        ...state,
        productDetail: {
          isFetching: false,
          product: { ...action.result }
        }
      };
    case PRODUCT_DETAIL_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default reducer;
