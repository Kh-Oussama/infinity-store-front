import {all, call, takeLatest, put} from "redux-saga/effects";
import Axios from "axios";
import DeliveryActionTypes from "./delivery.types";
import {retrieveWilayaDetailsFailure, retrieveWilayaDetailsSuccess} from "./delivery.actions";


//Get wilaya
export function* retrieveWilayaDetailsAsync({payload: {id}}) {
    console.log(id);
    try {
        const response = yield Axios.get(`/v1/deliveryfees/${parseInt(id)}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-API-ID': '91304391425917268014',
                'X-API-TOKEN': '89ACOUFPfodU7EocWgegpViivahbP1RtKN6HusBJftlrhXGOlwzucLIxVzva1MKE',
            },
        });
        const wilaya = response.data.data[0];
        yield put(retrieveWilayaDetailsSuccess(wilaya));
    } catch (error) {
        yield put(retrieveWilayaDetailsFailure(error.message));
    }
}


export function* onRetrieveWilayaDetailsStart() {
    yield takeLatest(DeliveryActionTypes.RETRIEVE_THE_WILAYA_DETAILS_START, retrieveWilayaDetailsAsync)
}


export function* deliverySagas() {
    yield all([
        call(onRetrieveWilayaDetailsStart),
    ]);
}

