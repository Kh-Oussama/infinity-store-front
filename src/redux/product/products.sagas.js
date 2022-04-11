import {all, call, put, takeLatest} from "redux-saga/effects";
import Axios from "axios";
import ProductsActionTypes from "./products.types";
import {fetchProductsFailure, fetchProductsSuccess} from "./products.actions";


//FETCH Products
export function* fetchAllProductsAsync({payload: {name}}) {
    console.log(name);
    try {
        const response = yield Axios.get(`http://localhost:8000/api/fetch-product-by-group/${name}`);
        const products = response.data.products;
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

//FETCH Products by category
export function* fetchProductsByCategoryAsync({payload: {slug}}) {
    try {
        const response = yield Axios.get(`http://localhost:8000/api/fetch-product-by-category/${slug}`);
        const products = response.data.products;
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

//FETCH Products by category
export function* fetchProductsByStoreAsync({payload: {name}}) {
    try {
        const response = yield Axios.get(`http://localhost:8000/api/fetch-product-by-store/${name}`);
        const products = response.data.products;
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

//FETCH Products by category
export function* fetchProductsBySubCategoryAsync({payload: {slug}}) {
    try {
        const response = yield Axios.get(`http://localhost:8000/api/fetch-product-by-sub-category/${slug}`);
        const products = response.data.products;
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}


export function* onFetchAllProducts() {
    yield takeLatest(ProductsActionTypes.FETCH_ALL_PRODUCTS_START, fetchAllProductsAsync)
}

export function* onFetchProductsByCategory() {
    yield takeLatest(ProductsActionTypes.FETCH_PRODUCTS_BY_CATEGORY_START, fetchProductsByCategoryAsync)
}

export function* onFetchProductsByStore() {
    yield takeLatest(ProductsActionTypes.FETCH_PRODUCTS_BY_STORE_START, fetchProductsByStoreAsync)
}

export function* onFetchProductsBySubCategory() {
    yield takeLatest(ProductsActionTypes.FETCH_PRODUCTS_BY_SUB_CATEGORY_START, fetchProductsBySubCategoryAsync)
}


// export function* onGetGroupStart() {
//     yield takeLatest(ProductsActionTypes.GET_GROUP_START, getGroupAsync)
// }


export function* productsSagas() {
    yield all([
        call(onFetchAllProducts),
        call(onFetchProductsByCategory),
        call(onFetchProductsByStore),
        call(onFetchProductsBySubCategory),
    ]);
}

