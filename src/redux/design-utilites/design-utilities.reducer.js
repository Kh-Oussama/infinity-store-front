import DesignActionTypes from "./design-utilities.types";
import AuthActionTypes from "../auth/auth.types";

const INITIAL_STATE = {
    current_auth_component : 'sign-in',
    auth_component_hidden : false,
};

const designUtilitiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case DesignActionTypes.TOGGLE_AUTH_COMPONENT:
          return {
              ...state,
              auth_component_hidden : !state.auth_component_hidden,
              current_auth_component : action.payload,
          };

      case DesignActionTypes.SWITCH_AUTH_COMPONENT:
          return {
              ...state,
              current_auth_component : action.payload,
          };

      case AuthActionTypes.SIGN_IN_SUCCESS:
          return {
              ...state,
              auth_component_hidden : false,
          };
      default:
          return state;
  }
};

export default designUtilitiesReducer;
