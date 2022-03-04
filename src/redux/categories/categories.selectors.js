import { createSelector } from 'reselect';

const selectCategory = state => state.category;

//fetch categories
export const selectFetchCategoriesLoading = createSelector(
    [selectCategory],
    category => category.fetchAllCategoriesLoading,
);
export const selectCategories = createSelector(
    [selectCategory],
    category => category.categories,
);
export const selectFetchCategoriesError = createSelector(
    [selectCategory],
    category => category.fetchAllCategoriesError,
);


//Get category
export const selectGetCategoryLoading = createSelector(
    [selectCategory],
    category => category.getCategoryLoading,
);
export const selectCategoryVar = createSelector(
    [selectCategory],
    category => category.category,
);
export const selectGetCategoryError = createSelector(
    [selectCategory],
    category => category.getCategoryError,
);
