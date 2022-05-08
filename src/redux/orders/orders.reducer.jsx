import OrdersActionTypes from "./orders.types";

const INITIAL_STATE = {

    //fetch orders
    fetchAllOrdersLoading: true,
    fetchAllOrdersError: null,
    orders: [],

    //get order
    getOrderLoading: false,
    getOrderError: null,
    order: null,

    //add order
    addOrderLoading: false,
    addOrderError: null,
    addOrderStatus: false,

   //update order
    updateOrderLoading: false,
    updateOrderError: null,
    updateOrderStatus: false,

    //delete order
    deleteOrderLoading: false,
    deleteOrderError: null,
    deleteOderStatus: false,

};
const ordersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //fetch orders
        case OrdersActionTypes.FETCH_ALL_ORDERS_START:
            return {
                ...state,
                fetchAllOrdersLoading: true,
                fetchAllOrdersError: null,
                orders: [],

                addOrderStatus: false,
                deleteOderStatus: false,
                updateOrderStatus: false,
            }
        case OrdersActionTypes.FETCH_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                fetchAllOrdersLoading: false,
                fetchAllOrdersError: null,
                orders: action.payload,
            }
        case OrdersActionTypes.FETCH_ALL_ORDERS_FAILURE:
            return {
                ...state,
                fetchAllOrdersLoading: false,
                fetchAllOrdersError: action.payload,
                orders: [],
            }

            //get order
        case OrdersActionTypes.GET_ORDER_START:
            return {
                ...state,
                getOrderLoading: true,
                getOrderError: null,
                order: null,

                fetchAllOrdersLoading: true,
            }
        case OrdersActionTypes.GET_ORDER_SUCCESS:
            return {
                ...state,
                getOrderLoading: false,
                getOrderError: null,
                order: action.payload[0],
            }
        case OrdersActionTypes.GET_ORDER_FAILURE:
            return {
                ...state,
                getOrderLoading: false,
                getOrderError: action.payload,
                order: null,
            }

            //add order
        case OrdersActionTypes.ADD_ORDER_START:
            return {
                ...state,
                addOrderLoading: true,
                addOrderError: null,
                addOrderStatus: false,

                fetchAllOrdersLoading: true,
            }
        case OrdersActionTypes.ADD_ORDER_SUCCESS:
            return {
                ...state,
                addOrderLoading: false,
                addOrderError: null,
                addOrderStatus: true,
            }
        case OrdersActionTypes.ADD_ORDER_FAILURE:
            return {
                ...state,
                addOrderLoading: false,
                addOrderError: action.payload,
                addOrderStatus: false,
            }

        //update order
        case OrdersActionTypes.UPDATE_ORDER_START:
            return {
                ...state,
                updateOrderLoading: true,
                updateOrderError: null,
                updateOrderStatus: false,

                fetchAllOrdersLoading: true,
            }
        case OrdersActionTypes.UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                updateOrderLoading: false,
                updateOrderError: null,
                updateOrderStatus: true,
            }
        case OrdersActionTypes.UPDATE_ORDER_FAILURE:
            return {
                ...state,
                updateOrderLoading: false,
                updateOrderError: action.payload,
                updateOrderStatus: false,
            }

            //delete order
        case OrdersActionTypes.DELETE_ORDER_START:
            return {
                ...state,
                deleteOrderLoading: true,
                deleteOrderError: null,
                deleteOderStatus: false,

            }
        case OrdersActionTypes.DELETE_ORDER_SUCCESS:
            return {
                ...state,
                deleteOrderLoading: false,
                deleteOrderError: null,
                deleteOderStatus: true,
                orders: state.orders.filter(
                    reference => reference.id !== action.payload.id
                )
            }
        case OrdersActionTypes.DELETE_ORDER_FAILURE:
            return {
                ...state,
                deleteOrderLoading: false,
                deleteOrderError: action.payload,
                deleteOrderStatus: false,
            }
        default :
            return state;
    }
};

export default ordersReducer;
