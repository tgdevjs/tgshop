export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const PRODUCT_DETAIL_RESULT = 'PRODUCT_DETAIL_RESULT';
export const PRODUCT_DETAIL_ERROR = 'PRODUCT_DETAIL_ERROR';

export const getProductDetail = (prodID) => ({
    type: GET_PRODUCT_DETAIL, prodID,
});