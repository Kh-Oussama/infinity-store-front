import {all, call} from 'redux-saga/effects';
import { productsSagas } from './product/products.sagas';
import { groupsSagas } from './group/groups.sagas';
import { categoriesSagas } from './categories/categories.sagas';
import { subcategoriesSagas } from './sub-categories/subCategories.sagas';
import {storesSagas} from "./stores/stores.sagas";
import {authSagas} from "./auth/auth.sagas";


export default function* rootSaga() {
    yield all([
        call(productsSagas),
        call(groupsSagas),
        call(categoriesSagas),
        call(subcategoriesSagas),
        call(storesSagas),
        call(authSagas),
    ])
};
