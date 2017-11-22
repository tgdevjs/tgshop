import { combineReducers } from 'redux';

import products from './products';
import productDetail from './productDetail';

export default combineReducers({
    products,
    productDetail,
});
