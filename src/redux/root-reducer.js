import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import designUtilitiesReducer from "./design-utilites/design-utilities.reducer";
import productsReducer from "./product/products.reducer";
import groupsReducer from "./group/groups.reducer";
import categoriesReducer from "./categories/categories.reducer";
import subCategoriesReducer from "./sub-categories/subCategories.reducer";
import authReducer from "./auth/auth.reducer";
import storesReducer from "./stores/stores.reducer";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''],
};

const rootReducer = combineReducers({
    design_utilities: designUtilitiesReducer,
    product: productsReducer,
    group: groupsReducer,
    category: categoriesReducer,
    subCategory: subCategoriesReducer,
    auth: authReducer,
    store: storesReducer,
});

export default persistReducer(persistConfig, rootReducer);

