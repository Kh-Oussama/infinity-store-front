import DeliveryActionTypes from "./delivery.types";


const INITIAL_STATE = {

    //delivery
    retrieveWilayaLoading: false,
    retrieveWilayaError: null,
    wilaya: null,
}

const deliveryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //Get group
        case DeliveryActionTypes.RETRIEVE_THE_WILAYA_DETAILS_START:
            return {
                ...state,
                retrieveWilayaLoading: true,
                retrieveWilayaError: null,
                wilaya: null,

                fetchAllGroupsLoading: true,
            }
        case DeliveryActionTypes.RETRIEVE_THE_WILAYA_DETAILS_SUCCESS:
            return {
                ...state,
                retrieveWilayaLoading: false,
                retrieveWilayaError: null,
                wilaya: action.payload,
            }
        case DeliveryActionTypes.RETRIEVE_THE_WILAYA_DETAILS_FAILURE:
            return {
                ...state,
                retrieveWilayaLoading: false,
                retrieveWilayaError: action.payload,
                wilaya: null,
            }
        default:
            return state;
    }
}

export default deliveryReducer;