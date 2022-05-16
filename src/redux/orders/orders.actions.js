import OrdersActionTypes from "./orders.types";


//fetch orders
export const fetchOrdersStart = user => ({
    type : OrdersActionTypes.FETCH_ALL_ORDERS_START,
    payload : user,
});

export const fetchOrdersSuccess = data => ({
    type : OrdersActionTypes.FETCH_ALL_ORDERS_SUCCESS,
    payload : data,
});

export const fetchOrdersFailure = errorMessage => ({
    type : OrdersActionTypes.FETCH_ALL_ORDERS_FAILURE,
    payload : errorMessage,
});

//add order
export const addOrderStart = orderInformation =>  ({
    type : OrdersActionTypes.ADD_ORDER_START,
    payload : orderInformation,
});

export const addOrderSuccess = order =>  ({
    type : OrdersActionTypes.ADD_ORDER_SUCCESS,
    payload : order,
});

export const addOrderFailure = errorMessage => ({
    type : OrdersActionTypes.ADD_ORDER_FAILURE,
    payload : errorMessage,
});

//delete order
export const deleteOrderStart = order =>  ({
    type : OrdersActionTypes.DELETE_ORDER_START,
    payload : order,
});

export const deleteOrderSuccess = order =>  ({
    type : OrdersActionTypes.DELETE_ORDER_SUCCESS,
    payload : order,
});

export const deleteOrderFailure = order => ({
    type : OrdersActionTypes.DELETE_ORDER_FAILURE,
    payload : order,
});

//get order
export const getOrderStart = order =>  ({
    type : OrdersActionTypes.GET_ORDER_START,
    payload : order,
});

export const getOrderSuccess = data =>  ({
    type : OrdersActionTypes.GET_ORDER_SUCCESS,
    payload : data,
});

export const getOrderFailure = errorMessage => ({
    type : OrdersActionTypes.GET_ORDER_FAILURE,
    payload : errorMessage,
});

//update order
export const updateOrderStart = order =>  ({
    type : OrdersActionTypes.UPDATE_ORDER_START,
    payload : order,
});

export const updateOrderSuccess = () =>  ({
    type : OrdersActionTypes.UPDATE_ORDER_SUCCESS,
});

export const updateOrderFailure = errorMessage => ({
    type : OrdersActionTypes.UPDATE_ORDER_FAILURE,
    payload : errorMessage,
});
