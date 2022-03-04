import CategoriesActionTypes from "./categories.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import Axios from "axios";
import {
    fetchCategoriesFailure,
    fetchCategoriesSuccess,
    getCategoryFailure,
    getCategorySuccess,
} from "./categories.actions";


//FETCH CATEGORIES
export function* fetchCategoriesAsync() {
    try {
        const response = yield Axios.get("");
        const categories = response.data.categories;
        yield put(fetchCategoriesSuccess(categories));
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }
}

//Get category
export function* getCategoryAsync({payload: {slug}}) {
    try {
        const response = yield Axios.get('');
        const category = response.data.category;
        yield put(getCategorySuccess(category));
    } catch (error) {
        yield put(getCategoryFailure(error.message));
    }
}



export function* onFetchCategories() {
    yield takeLatest(CategoriesActionTypes.FETCH_ALL_CATEGORIES_START, fetchCategoriesAsync)
}


export function* onGetCategoryStart() {
    yield takeLatest(CategoriesActionTypes.GET_CATEGORY_START, getCategoryAsync)
}


export function* categoriesSagas() {
    yield all([
        call(onFetchCategories),
        call(onGetCategoryStart),
    ]);
}

