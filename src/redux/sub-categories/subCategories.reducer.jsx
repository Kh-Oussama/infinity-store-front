import SubCategoryTypes from "./subCategories.types";

const INITIAL_STATE = {

    //fetch subCategories
    //s
    fetchAllSubCategoriesLoading: false,
    fetchAllSubCategoriesError: null,
    subCategories: [],

    //get sub admin
    getSubCategoryLoading: false,
    getSubCategoryError: null,
    subCategory: null,

};
const subCategoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //fetch subCategories
        case SubCategoryTypes.FETCH_ALL_SUB_CATEGORIES_START:
            return {
                ...state,
                fetchAllSubCategoriesLoading: true,
                fetchAllSubCategoriesError: null,
                subCategories: [],
            }
        case SubCategoryTypes.FETCH_ALL_SUB_CATEGORIES_SUCCESS:
            return {
                ...state,
                fetchAllSubCategoriesLoading: false,
                fetchAllSubCategoriesError: null,
                subCategories: action.payload,
            }
        case SubCategoryTypes.FETCH_ALL_SUB_CATEGORIES_FAILURE:
            return {
                ...state,
                fetchAllSubCategoriesLoading: false,
                fetchAllSubCategoriesError: action.payload,
                subCategories: [],
            }

            //get subCategory
        case SubCategoryTypes.GET_SUB_CATEGORY_START:
            return {
                ...state,
                getSubCategoryLoading: true,
                getSubCategoryError: null,
                subCategory: null,
                fetchAllSubCategoriesLoading: true,
            }
        case SubCategoryTypes.GET_SUB_CATEGORY_SUCCESS:
            return {
                ...state,
                getSubCategoryLoading: false,
                getSubCategoryError: null,
                subCategory: action.payload[0],
            }
        case SubCategoryTypes.GET_SUB_CATEGORY_FAILURE:
            return {
                ...state,
                getSubCategoryLoading: false,
                getSubCategoryError: action.payload,
                subCategory: null,
            }
        default :
            return state;
    }
};

export default subCategoriesReducer;
