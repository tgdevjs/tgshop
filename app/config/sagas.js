import { takeEvery, call, put, select } from "redux-saga/effects";
import {
  GET_INITIAL_PRODUCT_LIST,
  PRODUCT_LIST_RESULT,
  PRODUCT_LIST_ERROR,
  GET_PRODUCT_LIST
} from "../actions/products";
import {
  GET_PRODUCT_DETAIL,
  PRODUCT_DETAIL_RESULT,
  PRODUCT_DETAIL_ERROR
} from "../actions/productDetail";
import { API_KEY } from "../../appconfig.json";

// Product List
export const getProductList = term =>
  fetch(`http://api.shop.com/sites/v1/search/Term/${term}?apikey=${API_KEY}`);

const fetchProductList = function*(action) {
  try {
    // Get productList using searchTerm
    const searchTerm = yield select(state => state.products.searchTerm);
    const response = yield call(getProductList, searchTerm);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: PRODUCT_LIST_ERROR, error: result.error });
    } else {
      yield put({ type: PRODUCT_LIST_RESULT, result });
    }
  } catch (error) {
    yield put({ type: PRODUCT_LIST_ERROR, error: error.message });
  }
};

// Product Detail
export const getProductDetail = prodId =>
  fetch(
    `http://api.shop.com/stores/v1/products/${prodId}?siteId=260&apikey=${
      API_KEY
    }`
  );

const fetchProductDetail = function*(action) {
  try {
    const response = yield call(getProductDetail, action.prodID);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: PRODUCT_DETAIL_ERROR, error: result.error });
    } else {
      yield put({ type: PRODUCT_DETAIL_RESULT, result });
    }
  } catch (error) {
    yield put({ type: PRODUCT_DETAIL_ERROR, error: error.message });
  }
};

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_PRODUCT_LIST, fetchProductList);
  yield takeEvery(GET_PRODUCT_LIST, fetchProductList);
  yield takeEvery(GET_PRODUCT_DETAIL, fetchProductDetail);
};

export default rootSaga;
