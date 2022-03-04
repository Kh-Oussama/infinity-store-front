import {all, call} from 'redux-saga/effects';
import { productsSagas } from './product/products.sagas';
import { groupsSagas } from './group/groups.sagas';
import { categoriesSagas } from './categories/categories.sagas';


export default function* rootSaga() {
    yield all([
        call(productsSagas),
        call(groupsSagas),
        call(categoriesSagas),
    ])
};
