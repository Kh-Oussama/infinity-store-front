import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import designUtilitiesReducer from "./design-utilites/design-utilities.reducer";
import productsReducer from "./product/products.reducer";
import groupsReducer from "./group/groups.reducer";
import categoriesReducer from "./categories/categories.reducer";



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
});

export default persistReducer(persistConfig, rootReducer);

