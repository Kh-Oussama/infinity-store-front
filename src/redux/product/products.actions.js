import ProductsActionTypes from "./products.types";


//fetch all products
export const fetchProductsStart = () => ({
    type : ProductsActionTypes.FETCH_ALL_PRODUCTS_START,
});

export const fetchProductsSuccess = product => ({
    type : ProductsActionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
    payload : product,
});

export const fetchProductsFailure = errorMessage => ({
    type : ProductsActionTypes.FETCH_ALL_PRODUCTS_FAILURE,
    payload : errorMessage,
});


//fetch product
export const getProductStart = product =>  ({
    type : ProductsActionTypes.GET_PRODUCT_START,
    payload : product,
});

export const getProductSuccess = product =>  ({
    type : ProductsActionTypes.GET_PRODUCT_SUCCESS,
    payload : product,
});

export const getProductFailure = errorMessage => ({
    type : ProductsActionTypes.GET_PRODUCT_FAILURE,
    payload : errorMessage,
});