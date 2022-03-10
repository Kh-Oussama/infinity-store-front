import CategoriesActionTypes from "./categories.types";

const INITIAL_STATE = {

    //fetch categories
    //s
    fetchAllCategoriesLoading: false,
    fetchAllCategoriesError: null,
    categories: [],

    //get sub admin
    getCategoryLoading: false,
    getCategoryError: null,
    category: null,

};
const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //fetch categories
        case CategoriesActionTypes.FETCH_ALL_CATEGORIES_START:
            return {
                ...state,
                fetchAllCategoriesLoading: true,
                fetchAllCategoriesError: null,
                categories: [],
            }
        case CategoriesActionTypes.FETCH_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                fetchAllCategoriesLoading: false,
                fetchAllCategoriesError: null,
                categories: action.payload,
            }
        case CategoriesActionTypes.FETCH_ALL_CATEGORIES_FAILURE:
            return {
                ...state,
                fetchAllCategoriesLoading: false,
                fetchAllCategoriesError: action.payload,
                categories: [],
            }

            //get category
        case CategoriesActionTypes.GET_CATEGORY_START:
            return {
                ...state,
                getCategoryLoading: true,
                getCategoryError: null,
                category: null,

                fetchAllCategoriesLoading: true,
            }
        case CategoriesActionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                getCategoryLoading: false,
                getCategoryError: null,
                category: action.payload[0],
            }
        case CategoriesActionTypes.GET_CATEGORY_FAILURE:
            return {
                ...state,
                getCategoryLoading: false,
                getCategoryError: action.payload,
                category: null,
            }
        default :
            return state;
    }
};

export default categoriesReducer;
