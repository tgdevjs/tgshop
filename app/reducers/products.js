import {
  GET_INITIAL_PRODUCT_LIST,
  PRODUCT_LIST_RESULT,
  PRODUCT_LIST_ERROR,
  SET_SEARCH_TERM,
  GET_PRODUCT_LIST
} from "../actions/products";

const initialState = {
  searchTerm: "Shirts",
  productSearch: {
    isFetching: false,
    searchItems: [
      "socks",
      "shoes",
      "shirts",
      "pants",
      "socks1",
      "shoes1",
      "shirts1",
      "pants1",
      "socks2",
      "shoes2",
      "shirts2",
      "pants2",
      "socks3",
      "shoes3",
      "shirts3",
      "pants3",
      "socks4",
      "shoes4",
      "shirts4",
      "pants4"
    ]
  }
};

// const setConversions = (state, action) => {
//     let conversion = {
//       isFetching: true,
//       date: '',
//       rates: {},
//     };

//     // Check for existing conversion
//     if (state.conversions[action.currency]) {
//       conversion = state.conversion[action.currency];
//     }

//     return {
//       ...state.conversions,
//       [action.currency]: conversion,
//     };
//   };

const setProductSearch = (state, action) => {
  let productSearch = {
    isFetching: true,
    searchItems: []
  };

  return productSearch;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_PRODUCT_LIST:
      return { ...state, productSearch: setProductSearch(state, action) };
    case PRODUCT_LIST_RESULT:
      return {
        ...state,
        productSearch: {
          isFetching: false,
          searchItems: [...action.result.searchItems]
        }
      };
    case PRODUCT_LIST_ERROR:
      return { ...state, error: action.error };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };
    case GET_PRODUCT_LIST:
      return { ...state, productSearch: setProductSearch(state, action) };
    default:
      return state;
  }
};

export default reducer;
