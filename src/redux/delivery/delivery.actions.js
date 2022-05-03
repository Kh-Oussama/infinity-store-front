
import DeliveryActionTypes from "./delivery.types";

export const retrieveWilayaDetailsStart = wilaya =>  ({
    type : DeliveryActionTypes.RETRIEVE_THE_WILAYA_DETAILS_START,
    payload : wilaya,
});

export const retrieveWilayaDetailsSuccess = wilaya =>  ({
    type : DeliveryActionTypes.RETRIEVE_THE_WILAYA_DETAILS_SUCCESS,
    payload : wilaya,
});

export const retrieveWilayaDetailsFailure = errorMessage => ({
    type : DeliveryActionTypes.RETRIEVE_THE_WILAYA_DETAILS_FAILURE,
    payload : errorMessage,
});