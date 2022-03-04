import GroupsActionTypes from "./groups.types";


const INITIAL_STATE = {
    //fetch groups
    fetchAllGroupsLoading: false,
    fetchAllGroupsError: null,
    groups: [],

    //get sub admin
    getGroupLoading: false,
    getGroupError: null,
    group: null,
}

const groupsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //Fetch groups
        case GroupsActionTypes.FETCH_ALL_GROUPS_START:
            return {
                ...state,
                fetchAllGroupsLoading: true,
                fetchAllGroupsError: null,
                groups: [],
            }
        case GroupsActionTypes.FETCH_ALL_GROUPS_SUCCESS:
            return {
                ...state,
                fetchAllGroupsLoading: false,
                fetchAllGroupsError: null,
                groups: action.payload,
            }
        case GroupsActionTypes.FETCH_ALL_GROUPS_FAILURE:
            return {
                ...state,
                fetchAllGroupsLoading: false,
                fetchAllGroupsError: action.payload,
                groups: [],
            }

        //Get group
        case GroupsActionTypes.GET_GROUP_START:
            return {
                ...state,
                getGroupLoading: true,
                getGroupError: null,
                group: null,

                fetchAllGroupsLoading: true,
            }
        case GroupsActionTypes.GET_GROUP_SUCCESS:
            return {
                ...state,
                getGroupLoading: false,
                getGroupError: null,
                group: action.payload[0],
            }
        case GroupsActionTypes.GET_GROUP_FAILURE:
            return {
                ...state,
                getGroupLoading: false,
                getGroupError: action.payload,
                group: null,
            }
        default:
            return state;
    }
}

export default groupsReducer;