import StoreActionTypes from "./stores.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import Axios from "axios";
import {fetchStoresFailure, fetchStoresSuccess, getStoreFailure, getStoreSuccess} from "./stores.actions";


//FETCH Groups
export function* fetchStoresAsync() {
    try {
        const response = yield Axios.get("http://localhost:8000/api/get-all-stores");
        const stores = response.data.stores;
        yield put(fetchStoresSuccess(stores));
    } catch (error) {
        yield put(fetchStoresFailure(error.message));
    }
}


//get store
export function* getStoreAsync({payload: {name}}) {
    try {
        const response = yield Axios.get(`http://localhost:8000/api/get-store/${name}`);
        const store = response.data.store;
        yield put(getStoreSuccess(store));
    } catch (error) {
        yield put(getStoreFailure(error.message));
    }
}


export function* onFetchStores() {
    yield takeLatest(StoreActionTypes.FETCH_ALL_STORES_START, fetchStoresAsync)
}

export function* onGetStoreStart() {
    yield takeLatest(StoreActionTypes.GET_STORE_START, getStoreAsync)
}

export function* storesSagas() {
    yield all([
        call(onFetchStores),
        call(onGetStoreStart),
    ]);
}

