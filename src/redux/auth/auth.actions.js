import AuthActionTypes from "./auth.types";

//sign up
export const signUpStart = credentials => ({
    type: AuthActionTypes.SIGN_UP_START, payload: credentials,
});

export const signUpSuccess = () => ({
    type: AuthActionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = error => ({
    type: AuthActionTypes.SIGN_UP_FAILURE, payload: error,
});


//check user session
export const checkUserSession = () => ({
    type: AuthActionTypes.CHECK_USER_SESSION,
});


//sign in
export const signInStart = emailAndPassword => ({
    type: AuthActionTypes.SIGN_IN_START, payload: emailAndPassword,
});
export const signInSuccess = user => ({
    type: AuthActionTypes.SIGN_IN_SUCCESS, payload: user,
});
export const signInFailure = error => ({
    type: AuthActionTypes.SIGN_IN_FAILURE, payload: error,
});


//sign out
export const signOutStart = () => ({
    type: AuthActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: AuthActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
    type: AuthActionTypes.SIGN_OUT_FAILURE, payload: error,
});


//forget password
export const sendForgetPasswordEmailStart = cred => ({
    type: AuthActionTypes.SEND_FORGET_PASSWORD_EMAIL_START, payload: cred,
});

export const sendForgetPasswordEmailSuccess = () => ({
    type: AuthActionTypes.SEND_FORGET_PASSWORD_EMAIL_SUCCESS,
});

export const sendForgetPasswordEmailFailure = error => ({
    type: AuthActionTypes.SEND_FORGET_PASSWORD_EMAIL_FAILURE, payload: error,
});

//reset password
export const resetPasswordStart = cred => ({
    type: AuthActionTypes.RESET_PASSWORD_START, payload: cred,
});

export const resetPasswordSuccess = () => ({
    type: AuthActionTypes.RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailure = error => ({
    type: AuthActionTypes.RESET_PASSWORD_FAILURE, payload: error,
});


//update information
export const updateProfileInformationStart = cred => ({
    type: AuthActionTypes.UPDATE_PROFILE_INFORMATION_START, payload: cred,
});

export const updateProfileInformationSuccess = () => ({
    type: AuthActionTypes.UPDATE_PROFILE_INFORMATION_SUCCESS,
});

export const updateProfileInformationFailure = error => ({
    type: AuthActionTypes.UPDATE_PROFILE_INFORMATION_FAILURE, payload: error,
});
