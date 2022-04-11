import StoresActionTypes from "./stores.types";
import AuthActionTypes from "../auth/auth.types";

const INITIAL_STATE = {

    //fetch stores
    fetchAllStoresLoading: true,
    fetchAllStoresError: null,
    stores: [],

    //get store
    getStoreLoading: true,
    getStoreError: null,
    store: null,

};
const storesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //fetch Stores
        case StoresActionTypes.FETCH_ALL_STORES_START:
            return {
                ...state,
                fetchAllStoresLoading: true,
                fetchAllStoresError: null,
                stores: [],

                addStoreStatus: false,
                deleteStoreStatus: false,
                updateStoreStatus: false,
                getStoreLoading:true,
            }
        case StoresActionTypes.FETCH_ALL_STORES_SUCCESS:
            return {
                ...state,
                fetchAllStoresLoading: false,
                fetchAllStoresError: null,
                stores: action.payload,
            }
        case StoresActionTypes.FETCH_ALL_STORES_FAILURE:
            return {
                ...state,
                fetchAllStoresLoading: false,
                fetchAllStoresError: action.payload,
                stores: [],
            }


        //get store
        case StoresActionTypes.GET_STORE_START:
            return {
                ...state,
                getStoreLoading: true,
                getStoreError: null,
            }
        case StoresActionTypes.GET_STORE_SUCCESS:
            return {
                ...state,
                getStoreLoading: false,
                getStoreError: null,
                store: action.payload,
            }
        case StoresActionTypes.GET_STORE_FAILURE:
            return {
                ...state,
                getStoreLoading: false,
                getStoreError: action.payload,
                store: null,
            }

        default :
            return state;
    }
};

export default storesReducer;
