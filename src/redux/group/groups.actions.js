import GroupsActionTypes from "./groups.types";


//fetch groups
export const fetchGroupsStart = () => ({
    type : GroupsActionTypes.FETCH_ALL_GROUPS_START,
});

export const fetchGroupsSuccess = group => ({
    type : GroupsActionTypes.FETCH_ALL_GROUPS_SUCCESS,
    payload : group,
});

export const fetchGroupsFailure = errorMessage => ({
    type : GroupsActionTypes.FETCH_ALL_GROUPS_FAILURE,
    payload : errorMessage,
});


//Fetch Group
export const getGroupStart = group =>  ({
    type : GroupsActionTypes.GET_GROUP_START,
    payload : group,
});

export const getGroupSuccess = group =>  ({
    type : GroupsActionTypes.GET_GROUP_SUCCESS,
    payload : group,
});

export const getGroupFailure = errorMessage => ({
    type : GroupsActionTypes.GET_GROUP_FAILURE,
    payload : errorMessage,
});