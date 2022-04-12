const AuthActionTypes = {
    //sign up
    SIGN_UP_START: 'SIGN_UP_START',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',

    //sign in
    SIGN_IN_START : "SIGN_IN_START",
    SIGN_IN_SUCCESS : "SIGN_IN_SUCCESS",
    SIGN_IN_FAILURE : "SIGN_IN_FAILURE",

    //check the user
    CHECK_USER_SESSION: 'CHECK_USER_SESSION',

    //sign out
    SIGN_OUT_START: 'SIGN_OUT_START',
    SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',

    //forget password
    SEND_FORGET_PASSWORD_EMAIL_START: 'SEND_FORGET_PASSWORD_EMAIL_START',
    SEND_FORGET_PASSWORD_EMAIL_SUCCESS: 'SEND_FORGET_PASSWORD_EMAIL_SUCCESS',
    SEND_FORGET_PASSWORD_EMAIL_FAILURE: 'SEND_FORGET_PASSWORD_EMAIL_FAILURE',

    //reset password
    RESET_PASSWORD_START: 'RESET_PASSWORD_START',
    RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
    RESET_PASSWORD_FAILURE: 'RESET_PASSWORD_FAILURE',

    //resend email verification
    RESEND_EMAIL_VERIFICATION_START: 'RESEND_EMAIL_VERIFICATION_START',
    RESEND_EMAIL_VERIFICATION_SUCCESS: 'RESEND_EMAIL_VERIFICATION_SUCCESS',
    RESEND_EMAIL_VERIFICATION_FAILURE: 'RESEND_EMAIL_VERIFICATION_FAILURE',

    //enable two factors auth
    ENABLE_TWO_FACTOR_AUTHENTICATION_START: 'ENABLE_TWO_FACTOR_AUTHENTICATION_START',
    ENABLE_TWO_FACTOR_AUTHENTICATION_SUCCESS: 'ENABLE_TWO_FACTOR_AUTHENTICATION_SUCCESS',
    ENABLE_TWO_FACTOR_AUTHENTICATION_FAILURE: 'ENABLE_TWO_FACTOR_AUTHENTICATION_FAILURE',

    //get qr codes
    GET_TWO_FACTOR_QR_CODE_START: 'GET_TWO_FACTOR_QR_CODE_START',
    GET_TWO_FACTOR_QR_CODE_SUCCESS: 'GET_TWO_FACTOR_QR_CODE_SUCCESS',
    GET_TWO_FACTOR_QR_CODE_FAILURE: 'GET_TWO_FACTOR_QR_CODE_FAILURE',

    ///get recovery codes
    GET_RECOVERY_CODE_START: 'GET_RECOVERY_CODE_START',
    GET_RECOVERY_CODE_SUCCESS: 'GET_RECOVERY_CODE_SUCCESS',
    GET_RECOVERY_CODE_FAILURE: 'GET_RECOVERY_CODE_FAILURE',

    //redirect to confirm password
    REDIRECT_TO_CONFIRM_PASSWORD: 'REDIRECT_TO_CONFIRM_PASSWORD',

    //confirm password
    CONFIRM_PASSWORD_START: 'CONFIRM_PASSWORD_START',
    CONFIRM_PASSWORD_SUCCESS: 'CONFIRM_PASSWORD_SUCCESS',
    CONFIRM_PASSWORD_FAILURE: 'CONFIRM_PASSWORD_FAILURE',

    //disable two factors auth
    DISABLE_TWO_FACTOR_AUTHENTICATION_START: 'DISABLE_TWO_FACTOR_AUTHENTICATION_START',
    DISABLE_TWO_FACTOR_AUTHENTICATION_SUCCESS: 'DISABLE_TWO_FACTOR_AUTHENTICATION_SUCCESS',
    DISABLE_TWO_FACTOR_AUTHENTICATION_FAILURE: 'DISABLE_TWO_FACTOR_AUTHENTICATION_FAILURE',

    //redirect to two factors challenge
    REDIRECT_TO_TWO_FACTOR_CHALLENGE: 'REDIRECT_TO_TWO_FACTOR_CHALLENGE',
    CANCEL_TWO_FACTOR_CHALLENGE: 'CANCEL_TWO_FACTOR_CHALLENGE',

    //two factor challenge
    TWO_FACTOR_CHALLENGE_START: 'TWO_FACTOR_CHALLENGE_START',
    TWO_FACTOR_CHALLENGE_SUCCESS: 'TWO_FACTOR_CHALLENGE_SUCCESS',
    TWO_FACTOR_CHALLENGE_FAILURE: 'TWO_FACTOR_CHALLENGE_FAILURE',


    UPDATE_PROFILE_INFORMATION_START: 'UPDATE_PROFILE_INFORMATION_START',
    UPDATE_PROFILE_INFORMATION_SUCCESS: 'UPDATE_PROFILE_INFORMATION_SUCCESS',
    UPDATE_PROFILE_INFORMATION_FAILURE: 'UPDATE_PROFILE_INFORMATION_FAILURE',

    DELETE_ACCOUNT_START: 'DELETE_ACCOUNT_START',
    DELETE_ACCOUNT_SUCCESS: 'DELETE_ACCOUNT_SUCCESS',
    DELETE_ACCOUNT_FAILURE: 'DELETE_ACCOUNT_FAILURE',


};

export default AuthActionTypes;