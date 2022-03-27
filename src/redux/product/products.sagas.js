import {all, call, put, takeLatest} from "redux-saga/effects";
import Axios from "axios";
import ProductsActionTypes from "./products.types";
import {fetchProductsFailure, fetchProductsSuccess} from "./products.actions";


//FETCH Products
export function* fetchProductsAsync() {
    try {
        const response = yield Axios.get("http://localhost:8000/api/get-all-products");
        const products = response.data.products;
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}


// //Get group
// export function* getGroupAsync({payload: {name}}) {
//     try {
//         const response = yield Axios.get(``);
//         const group = response.data.group;
//         yield put(getGroupSuccess(group));
//     } catch (error) {
//         yield put(getGroupFailure(error.message));
//     }
// }


export function* onFetchProducts() {
    yield takeLatest(ProductsActionTypes.FETCH_ALL_PRODUCTS_START, fetchProductsAsync)
}


// export function* onGetGroupStart() {
//     yield takeLatest(ProductsActionTypes.GET_GROUP_START, getGroupAsync)
// }


export function* productsSagas() {
    yield all([
        call(onFetchProducts),
        // call(onGetGroupStart),
    ]);
}

