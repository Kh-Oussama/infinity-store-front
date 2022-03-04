import SubCategoriesTypes from "./subCategories.types";
import {takeLatest, put, all, call} from 'redux-saga/effects';
import Axios from "axios";
import {
    fetchSubCategoriesFailure,
    fetchSubCategoriesSuccess, getSubCategoryFailure,
    getSubCategorySuccess,
} from "./subCategories.actions";


//FETCH SUB Categories
export function* fetchSubCategoriesAsync() {
    try {
        const response = yield Axios.get('');
        const subcategories = response.data.subcategories;
        yield put(fetchSubCategoriesSuccess(subcategories));
    } catch (error) {
        yield put(fetchSubCategoriesFailure(error.message));
    }
}


//Get sub category
export function* getSubCategoryAsync({payload: {slug}}) {
    try {
        const response = yield Axios.get('');
        const subCategory = response.data.subCategory;
        yield put(getSubCategorySuccess(subCategory));
    } catch (error) {
        yield put(getSubCategoryFailure(error.message));
    }
}


export function* onFetchSubCategories() {
    yield takeLatest(SubCategoriesTypes.FETCH_ALL_SUB_CATEGORIES_START, fetchSubCategoriesAsync)
}


export function* onGetSubCategoryStart() {
    yield takeLatest(SubCategoriesTypes.GET_SUB_CATEGORY_START, getSubCategoryAsync)
}


export function* subcategoriesSagas() {
    yield all([
        call(onFetchSubCategories),
        call(onGetSubCategoryStart),
    ]);
}

