import { createSelector } from "reselect";

const selectDelivery = state => state.delivery;



//Get wilaya
export const selectRetrieveWilayaLoading = createSelector(
    [selectDelivery],
    delivery => delivery.retrieveWilayaLoading,
);
export const selectWilayaVar = createSelector(
    [selectDelivery],
    delivery => delivery.wilaya,
);
export const selectRetrieveWilayaError = createSelector(
    [selectDelivery],
    delivery => delivery.retrieveWilayaError,
);
