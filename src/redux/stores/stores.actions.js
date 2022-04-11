import StoresActionTypes from "./stores.types";

//fetch stores
export const fetchStoresStart = () => ({
    type : StoresActionTypes.FETCH_ALL_STORES_START,
});

export const fetchStoresSuccess = stores => ({
    type : StoresActionTypes.FETCH_ALL_STORES_SUCCESS,
    payload : stores,
});

export const fetchStoresFailure = errorMessage => ({
    type : StoresActionTypes.FETCH_ALL_STORES_FAILURE,
    payload : errorMessage,
});

//get Sub admin
export const getStoreStart = store =>  ({
    type : StoresActionTypes.GET_STORE_START,
    payload : store,
});

export const getStoreSuccess = store =>  ({
    type : StoresActionTypes.GET_STORE_SUCCESS,
    payload : store,
});

export const getStoreFailure = errorMessage => ({
    type : StoresActionTypes.GET_STORE_FAILURE,
    payload : errorMessage,
});

//update store
export const updateStoreStart = store =>  ({
    type : StoresActionTypes.UPDATE_STORE_START,
    payload : store,
});
