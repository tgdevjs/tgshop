export const GET_INITIAL_PRODUCT_LIST = "GET_INITIAL_PRODUCT_LIST";
export const PRODUCT_LIST_RESULT = "PRODUCT_LIST_RESULT";
export const PRODUCT_LIST_ERROR = "PRODUCT_LIST_ERROR";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";

export const getInitialProductList = () => ({
  type: GET_INITIAL_PRODUCT_LIST
});

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm
});

export const getProductList = () => ({
  type: GET_PRODUCT_LIST
});
