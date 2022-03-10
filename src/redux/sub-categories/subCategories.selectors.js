import { createSelector } from 'reselect';

const selectSubCategory = state => state.subCategory;

//fetch subCategories
export const selectFetchSubCategoriesLoading = createSelector(
    [selectSubCategory],
    subCategory => subCategory.fetchAllSubCategoriesLoading,
);
export const selectSubCategories = createSelector(
    [selectSubCategory],
    subCategory => subCategory.subCategories,
);
export const selectFetchSubCategoriesError = createSelector(
    [selectSubCategory],
    subCategory => subCategory.fetchAllSubCategoriesError,
);

//get subCategory
export const selectGetSubCategoryLoading = createSelector(
    [selectSubCategory],
    subCategory => subCategory.getSubCategoryLoading,
);
export const selectSubCategoryVar = createSelector(
    [selectSubCategory],
    subCategory => subCategory.subCategory,
);
export const selectGetSubCategoryError = createSelector(
    [selectSubCategory],
    subCategory => subCategory.getSubCategoryError,
);
