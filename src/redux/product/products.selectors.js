import { createSelector } from "reselect";

const selectProduct = state => state.product;


//fetch products
export const selectFetchProductsLoading = createSelector(
    [selectProduct],
    product => product.fetchAllProductsLoading,
);
export const selectProducts = createSelector(
    [selectProduct],
    product => product.products,
);
export const selectFetchProductsError = createSelector(
    [selectProduct],
    product => product.fetchAllProductsError,
);

//get product
export const selectGetProductLoading = createSelector(
    [selectProduct],
    product => product.getProductLoading,
);
export const selectProductVar = createSelector(
    [selectProduct],
    product => product.product,
);
export const selectGetProductError = createSelector(
    [selectProduct],
    product => product.getProductError,
);