import { all, call, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import GroupsActionTypes from "./groups.types";
import {
    fetchGroupsFailure, fetchGroupsSuccess, getGroupFailure,
    getGroupSuccess
} from "./groups.actions";



//FETCH Groups
export function* fetchGroupsAsync() {
    try {
        const response = yield Axios.get("");
        const groups = response.data.groups;
        yield put(fetchGroupsSuccess(groups));
    } catch (error) {
        yield put(fetchGroupsFailure(error.message));
    }
}


//Get group
export function* getGroupAsync({payload: {name}}) {
    try {
        const response = yield Axios.get(``);
        const group = response.data.group;
        yield put(getGroupSuccess(group));
    } catch (error) {
        yield put(getGroupFailure(error.message));
    }
}



export function* onFetchGroups() {
    yield takeLatest(GroupsActionTypes.FETCH_ALL_GROUPS_START, fetchGroupsAsync)
}


export function* onGetGroupStart() {
    yield takeLatest(GroupsActionTypes.GET_GROUP_START, getGroupAsync)
}


export function* groupsSagas() {
    yield all([
        call(onFetchGroups),
        call(onGetGroupStart),
    ]);
}

