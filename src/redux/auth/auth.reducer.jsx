import AuthActionTypes from "./auth.types";

const INITIAL_STATE = {
    currentUser: null,

    //sign-up
    signUpLoading: false,
    signUpError: null,

    //sign-in
    signInLoading: false,
    signInError: null,

    //check user session
    checkUserSessionLoading: true,

    //sign-out
    signOutLoading: false,
    signOutError: null,

    //send forget password email
    sendForgetPasswordEmailLoading: false,
    sendForgetPasswordEmailError: null,
    sendForgetPasswordEmailStatus: false,

    //reset password
    resetPasswordLoading: false,
    resetPasswordError: null,
    resetPasswordStatus: false,

    //resend email verification
    resendEmailVerificationLoading: false,
    resendEmailVerificationError: null,
    resendEmailVerificationStatus: false,
};
const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //sign-up
        case AuthActionTypes.SIGN_UP_START:
            return {
                ...state,
                signUpLoading: true,
                signUpError: null,
            };
        case AuthActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpLoading: false,
                signUpError: null,
            };
        case AuthActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                signUpLoading: false,
                signUpError: action.payload.errors,
            };

        //sign-in
        case AuthActionTypes.SIGN_IN_START:
            return {
                ...state,
                signInLoading: true,
                signInError: null,
            };
        case AuthActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                signInLoading: false,
                currentUser: action.payload,
                checkUserSessionLoading: false,
                signInError: null,
            };
        case AuthActionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                signInLoading: false,
                signInError: action.payload.errors,
                checkUserSessionLoading: false,
                currentUser: null,
            };

        //check user session
        case AuthActionTypes.CHECK_USER_SESSION:
            return {
                ...state,
                checkUserSessionLoading: true,
            };

        //sign out
        case AuthActionTypes.SIGN_OUT_START:
            return {
                ...state,
                signOutLoading: true,
                signOutError: null,
            };
        case AuthActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                signOutLoading: false,
                currentUser: null,
                signOutError: null,
            };
        case AuthActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                signOutLoading: false,
                signOutError: action.payload,
                currentUser: null,
            };

        //send forget password email
        case AuthActionTypes.SEND_FORGET_PASSWORD_EMAIL_START:
            return {
                ...state,
                sendForgetPasswordEmailLoading: true,
                sendForgetPasswordEmailError: null,
                sendForgetPasswordEmailStatus: false,
            };
        case AuthActionTypes.SEND_FORGET_PASSWORD_EMAIL_SUCCESS:
            return {
                ...state,
                sendForgetPasswordEmailLoading: false,
                sendForgetPasswordEmailError: null,
                sendForgetPasswordEmailStatus: true,
            };
        case AuthActionTypes.SEND_FORGET_PASSWORD_EMAIL_FAILURE:
            return {
                ...state,
                sendForgetPasswordEmailLoading: false,
                sendForgetPasswordEmailError: action.payload.errors,
                sendForgetPasswordEmailStatus: false,
            };

        //reset password
        case AuthActionTypes.RESET_PASSWORD_START:
            return {
                ...state,
                resetPasswordLoading: true,
                resetPasswordError: null,
                resetPasswordStatus: false,
            };
        case AuthActionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordLoading: false,
                resetPasswordError: null,
                resetPasswordStatus: true,
            };
        case AuthActionTypes.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                resetPasswordLoading: false,
                resetPasswordError: action.payload.errors,
                resetPasswordStatus: false,
            };
        default:
            return state;
    }
};

export default authReducer;
