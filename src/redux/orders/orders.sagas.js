import OrderActionTypes from "./orders.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import Axios from "axios";
import {
    addOrderFailure,
    addOrderSuccess,
    deleteOrderFailure,
    deleteOrderSuccess,
    fetchOrdersFailure,
    fetchOrdersSuccess,
    getOrderFailure,
    getOrderSuccess,
    updateOrderFailure,
    updateOrderSuccess
} from "./orders.actions";


//FETCH Orders
export function* fetchOrdersAsync({payload: {id}}) {
    try {
        const response = yield Axios.get(`http://localhost:8000/api/auth/orders/${id}/edit`);
        const data = response.data;
        yield put(fetchOrdersSuccess(data));
    } catch (error) {
        yield put(fetchOrdersFailure(error.message));
    }
}

//add order
export function* addOrderAsync({payload: {formData}}) {
    try {
        const response = yield Axios.post("http://localhost:8000/api/auth/orders", formData);
        const order = response.data.order;
        yield put(addOrderSuccess(order));
    } catch (error) {
        yield put(addOrderFailure(error.response.data));
    }
}

//get order
export function* getOrderAsync({payload: {id}}) {

    try {
        const response = yield Axios.get(`http://localhost:8000/api/auth/orders/${id}`);
        const data = response.data;
        yield put(getOrderSuccess(data));
    } catch (error) {
        yield put(getOrderFailure(error.message));
    }
}


//delete order
export function* deleteOrderAsync({payload: {id}}) {
    try {
        yield Axios.delete(`http://localhost:8000/api/auth/orders/${id}`);
        yield put(deleteOrderSuccess({id: id}));
    } catch (error) {
        if (error.response.status === 422) {
            yield put(deleteOrderFailure({id: id}));
        }

    }
}

//update order
export function* updateOrderAsync({payload: {id, formData}}) {
    try {
        yield Axios.post(`http://localhost:8000/api/auth/orders/${id}`, formData,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        );
        yield put(updateOrderSuccess());
    } catch (error) {
        yield put(updateOrderFailure(error.response.data));
    }
}

export function* onFetchOrders() {
    yield takeLatest(OrderActionTypes.FETCH_ALL_ORDERS_START, fetchOrdersAsync)
}

export function* onAddOrderStart() {
    yield takeLatest(OrderActionTypes.ADD_ORDER_START, addOrderAsync)
}

export function* onDeleteOrderStart() {
    yield takeLatest(OrderActionTypes.DELETE_ORDER_START, deleteOrderAsync)
}

export function* onGetOrderStart() {
    yield takeLatest(OrderActionTypes.GET_ORDER_START, getOrderAsync)
}

export function* onUpdateOrderStart() {
    yield takeLatest(OrderActionTypes.UPDATE_ORDER_START, updateOrderAsync)
}

export function* ordersSagas() {
    yield all([
        call(onFetchOrders),
        call(onAddOrderStart),
        call(onUpdateOrderStart),
        call(onGetOrderStart),
        call(onDeleteOrderStart),
    ]);
}

