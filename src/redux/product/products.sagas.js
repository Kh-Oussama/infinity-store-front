import ProductsActionTypes from "./products.types";
import { Axios } from "axios";
import {takeLatest, put, all, call} from 'redux-saga/effects';
import { 
    fetchProductsSuccess, fetchProductsFailure, 
    getProductSuccess,  getProductFailure,
} from "./products.actions";


//Get all products
export function* fetchProductsAsync() {
    try {
        const response = yield Axios.get("");
        const products = response.data.products;
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

//Get product
export function* getProductAsync({payload: {name}}) {
    try {
        const response = yield Axios.get(`http://localhost:8000/api/auth/products/${name}`);
        const product = response.data.product;
        yield put(getProductSuccess(product));
    } catch (error) {
        yield put(getProductFailure(error.message));
    }
}


export function* onFetchProducts() {
    yield takeLatest(ProductsActionTypes.FETCH_ALL_PRODUCTS_START, fetchProductsAsync)
}

export function* onGetProductStart() {
    yield takeLatest(ProductsActionTypes.GET_PRODUCT_START, getProductAsync)
}


export function* productsSagas() {
    yield all([
        call(onFetchProducts),
        call(onGetProductStart),
    ]);
}
