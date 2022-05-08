import { createSelector } from 'reselect';

const selectOrder = state => state.order;

//fetch orders
export const selectFetchOrdersLoading = createSelector(
    [selectOrder],
    order => order.fetchAllordersLoading,
);
export const selectOrders = createSelector(
    [selectOrder],
    order => order.orders,
);
export const selectFetchOrdersError = createSelector(
    [selectOrder],
    order => order.fetchAllordersError,
);

//get order
export const selectGetOrderLoading = createSelector(
    [selectOrder],
    order => order.getorderLoading,
);
export const selectOrderVar = createSelector(
    [selectOrder],
    order => order.order,
);
export const selectGetOrderError = createSelector(
    [selectOrder],
    order => order.getorderError,
);

//add order
export const selectAddOrderLoading = createSelector(
    [selectOrder],
    order => order.addorderLoading,
);
export const selectAddOrderStatus = createSelector(
    [selectOrder],
    order => order.addorderStatus,
);
export const selectAddOrderError = createSelector(
    [selectOrder],
    order => order.addorderError,
);

//update order
export const selectUpdateOrderLoading = createSelector(
    [selectOrder],
    order => order.updateorderLoading,
);
export const selectUpdateOrderStatus = createSelector(
    [selectOrder],
    order => order.updateOrderStatus,
);
export const selectUpdateOrderError = createSelector(
    [selectOrder],
    order => order.updateOrderError,
);

//delete order
export const selectDeleteOrderLoading = createSelector(
    [selectOrder],
    order => order.deleteOrderLoading,
);
export const selectDeleteOrderStatus = createSelector(
    [selectOrder],
    order => order.deleteOrderStatus,
);
export const selectDeleteOrderError = createSelector(
    [selectOrder],
    order => order.deleteOrderError,
);