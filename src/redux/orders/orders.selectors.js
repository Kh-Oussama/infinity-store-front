import { createSelector } from 'reselect';

const selectOrder = state => state.order;

//fetch orders
export const selectFetchOrdersLoading = createSelector(
    [selectOrder],
    order => order.fetchAllOrdersLoading,
);
export const selectOrders = createSelector(
    [selectOrder],
    order => order.orders,
);
export const selectFetchOrdersError = createSelector(
    [selectOrder],
    order => order.fetchAllOrdersError,
);

export const selectTheCreatedOrder = createSelector(
    [selectOrder],
    order => order.createdOrder,
);

//get order
export const selectGetOrderLoading = createSelector(
    [selectOrder],
    order => order.getOrderLoading,
);
export const selectOrderVar = createSelector(
    [selectOrder],
    order => order.order,
);
export const selectGetOrderError = createSelector(
    [selectOrder],
    order => order.getOrderError,
);

//add order
export const selectAddOrderLoading = createSelector(
    [selectOrder],
    order => order.addOrderLoading,
);
export const selectOrderStats = createSelector(
    [selectOrder],
    order => order.orderStates,
);
export const selectAddOrderStatus = createSelector(
    [selectOrder],
    order => order.addOrderStatus,
);
export const selectAddOrderError = createSelector(
    [selectOrder],
    order => order.addOrderError,
);

//update order
export const selectUpdateOrderLoading = createSelector(
    [selectOrder],
    order => order.updateOrderLoading,
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