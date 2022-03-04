import SubCategoriesTypes from "./subCategories.types";


//fetch sub categries
export const fetchSubCategoriesStart = () => ({
    type : SubCategoriesTypes.FETCH_ALL_SUB_CATEGORIES_START,
});

export const fetchSubCategoriesSuccess = group => ({
    type : SubCategoriesTypes.FETCH_ALL_SUB_CATEGORIES_SUCCESS,
    payload : group,
});

export const fetchSubCategoriesFailure = errorMessage => ({
    type : SubCategoriesTypes.FETCH_ALL_SUB_CATEGORIES_FAILURE,
    payload : errorMessage,
});


//get Sub category
export const getSubCategoryStart = group =>  ({
    type : SubCategoriesTypes.GET_SUB_CATEGORY_START,
    payload : group,
});

export const getSubCategorySuccess = group =>  ({
    type : SubCategoriesTypes.GET_SUB_CATEGORY_SUCCESS,
    payload : group,
});

export const getSubCategoryFailure = errorMessage => ({
    type : SubCategoriesTypes.GET_SUB_CATEGORY_FAILURE,
    payload : errorMessage,
});


