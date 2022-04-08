import ProductsActionTypes from "./products.types";


const INITIAL_STATE = {

    //fetch all products
    fetchAllProductsLoading: true,
    fetchAllProductsError: null,
    products: [],

    //fetch product
    getProductLoading: false,
    getProductError: null,
    product: null,
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //fetch all products
        case ProductsActionTypes.FETCH_ALL_PRODUCTS_START:
            return {
                ...state,
                fetchAllProductsLoading: true,
                fetchAllProductsError: null,
                products: [],
            }
        case ProductsActionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                fetchAllProductsLoading: false,
                fetchAllProductsError: null,
                products: action.payload,
            }
        case ProductsActionTypes.FETCH_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                fetchAllProductsLoading: false,
                fetchAllProductsError: action.payload,
                products: [],
            }

            //fetch product by category
        case ProductsActionTypes.FETCH_PRODUCTS_BY_CATEGORY_START:
            return {
                ...state,
                fetchAllProductsLoading: true,
                fetchAllProductsError: null,
                products: [],
            }
        case ProductsActionTypes.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                fetchAllProductsLoading: false,
                fetchAllProductsError: null,
                products: action.payload,
            }
        case ProductsActionTypes.FETCH_PRODUCTS_BY_CATEGORY_FAILURE:
            return {
                ...state,
                fetchAllProductsLoading: false,
                fetchAllProductsError: action.payload,
                products: [],
            }

        //fetch product by sub-category
        case ProductsActionTypes.FETCH_PRODUCTS_BY_SUB_CATEGORY_START:
            return {
                ...state,
                fetchAllProductsLoading: true,
                fetchAllProductsError: null,
                products: [],
            }
        case ProductsActionTypes.FETCH_PRODUCTS_BY_SUB_CATEGORY_SUCCESS:
            return {
                ...state,
                fetchAllProductsLoading: false,
                fetchAllProductsError: null,
                products: action.payload,
            }
        case ProductsActionTypes.FETCH_PRODUCTS_BY_SUB_CATEGORY_FAILURE:
            return {
                ...state,
                fetchAllProductsLoading: false,
                fetchAllProductsError: action.payload,
                products: [],
            }

        // //get product
        // case ProductsActionTypes.GET_PRODUCT_START:
        //     return {
        //         ...state,
        //         getProductLoading: true,
        //         getProductError: null,
        //         product: null,
        //
        //         fetchAllProductsLoading: true,
        //     }
        // case ProductsActionTypes.GET_PRODUCT_SUCCESS:
        //     return {
        //         ...state,
        //         getProductLoading: false,
        //         getProductError: null,
        //         product: action.payload[0],
        //     }
        // case ProductsActionTypes.GET_PRODUCT_FAILURE:
        //     return {
        //         ...state,
        //         getProductLoading: false,
        //         getProductError: action.payload,
        //         product: null,
        //     }

        default:
            return state;
    }
}

export default productsReducer;