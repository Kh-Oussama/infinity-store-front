import ProductsActionTypes from "./products.types";


//fetch all products
export const fetchProductsStart = group => ({
    type : ProductsActionTypes.FETCH_ALL_PRODUCTS_START,
    payload: group
});

export const fetchProductsSuccess = products => ({
    type : ProductsActionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
    payload : products,
});

export const fetchProductsFailure = errorMessage => ({
    type : ProductsActionTypes.FETCH_ALL_PRODUCTS_FAILURE,
    payload : errorMessage,
});

//fetch product By category
export const fetchProductsByCategoryStart = category => ({
    type : ProductsActionTypes.FETCH_PRODUCTS_BY_CATEGORY_START,
    payload: category
});

export const fetchProductsByCategorySuccess = products => ({
    type : ProductsActionTypes.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
    payload : products,
});

export const fetchProductsByCategoryFailure = errorMessage => ({
    type : ProductsActionTypes.FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
    payload : errorMessage,
});

//fetch product By sub-category
export const fetchProductsBySubCategoryStart = subCategory => ({
    type : ProductsActionTypes.FETCH_PRODUCTS_BY_SUB_CATEGORY_START,
    payload: subCategory
});

export const fetchProductsBySubCategorySuccess = products => ({
    type : ProductsActionTypes.FETCH_PRODUCTS_BY_SUB_CATEGORY_SUCCESS,
    payload : products,
});

export const fetchProductsBySubCategoryFailure = errorMessage => ({
    type : ProductsActionTypes.FETCH_PRODUCTS_BY_SUB_CATEGORY_FAILURE,
    payload : errorMessage,
});


//Fetch products by store
export const fetchProductsByStoreStart = store => ({
    type : ProductsActionTypes.FETCH_PRODUCTS_BY_STORE_START,
    payload: store
});

export const fetchProductsByStoreSuccess = products => ({
    type : ProductsActionTypes.FETCH_PRODUCTS_BY_STORE_SUCCESS,
    payload : products,
});

export const fetchProductsByStoreFailure = errorMessage => ({
    type : ProductsActionTypes.FETCH_PRODUCTS_BY_STORE_FAILURE,
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