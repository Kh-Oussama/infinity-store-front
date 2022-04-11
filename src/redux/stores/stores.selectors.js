import { createSelector } from 'reselect';

const selectStore = state => state.store;

//fetch stores
export const selectFetchStoresLoading = createSelector(
    [selectStore],
    store => store.fetchAllStoresLoading,
);
export const selectStores = createSelector(
    [selectStore],
    store => store.stores,
);
export const selectFetchStoresError = createSelector(
    [selectStore],
    store => store.fetchAllStoresError,
);

//get store
export const selectGetStoreLoading = createSelector(
    [selectStore],
    store => store.getStoreLoading,
);
export const selectStoreVar = createSelector(
    [selectStore],
    store => store.store,
);
export const selectGetStoreError = createSelector(
    [selectStore],
    store => store.getStoreError,
);

