import CategoriesActionTypes from "./categories.types";


//Fetch groups
export const fetchCategoriesStart = () => ({
    type : CategoriesActionTypes.FETCH_ALL_CATEGORIES_START,
});

export const fetchCategoriesSuccess = categories => ({
    type : CategoriesActionTypes.FETCH_ALL_CATEGORIES_SUCCESS,
    payload : categories,
});

export const fetchCategoriesFailure = errorMessage => ({
    type : CategoriesActionTypes.FETCH_ALL_CATEGORIES_FAILURE,
    payload : errorMessage,
});


//Get categoty
export const getCategoryStart = category =>  ({
    type : CategoriesActionTypes.GET_CATEGORY_START,
    payload : category,
});

export const getCategorySuccess = category =>  ({
    type : CategoriesActionTypes.GET_CATEGORY_SUCCESS,
    payload : category,
});

export const getCategoryFailure = errorMessage => ({
    type : CategoriesActionTypes.GET_CATEGORY_FAILURE,
    payload : errorMessage,
});