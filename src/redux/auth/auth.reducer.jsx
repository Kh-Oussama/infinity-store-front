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

    //Enable two factors auth
    enableTwoFactorAuthLoading: false,
    enableTwoFactorAuthError: null,
    enableTwoFactorAuthStatus: false,

    //Enable two factors auth
    disableTwoFactorAuthLoading: false,
    disableTwoFactorAuthError: null,
    disableTwoFactorAuthStatus: false,

    //get qr codes
    qrCode: null,

    //recovery codes
    getRecoveryCodesLoading: false,
    getRecoveryCodesError: null,
    recoveryCodes: null,

    //redirect to confirm password
    redirectToConfirmPassword: false,

    //confirm password
    confirmPasswordLoading: false,
    confirmPasswordError: null,
    confirmPasswordStatus: false,

    //redirect to two factors challenges
    redirectToTwoFactorChallenge: false,

    //two factor challenge
    twoFactorChallengeLoading: false,
    twoFactorChallengeError: null,
    twoFactorChallengeStatus: false,
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
                twoFactorChallengeError: null,
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
                redirectToConfirmPassword: false,
                redirectToTwoFactorChallenge: false,
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
                qrCode: null,
                recoveryCodes: null,
                redirectToConfirmPassword: false,
                redirectToTwoFactorChallenge: false,
            };
        case AuthActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                signOutLoading: false,
                currentUser: null,
                signOutError: null,
                checkUserSessionLoading: false,
            };
        case AuthActionTypes.SIGN_OUT_FAILURE :
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
        case AuthActionTypes.SEND_FORGET_PASSWORD_EMAIL_FAILURE :
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
        case AuthActionTypes.RESET_PASSWORD_FAILURE :
            return {
                ...state,
                resetPasswordLoading: false,
                resetPasswordError: action.payload.errors,
                resetPasswordStatus: false,
            };

        //resend email verification
        case AuthActionTypes.RESEND_EMAIL_VERIFICATION_START:
            return {
                ...state,
                resendEmailVerificationLoading: true,
                resendEmailVerificationError: null,
                resendEmailVerificationStatus: false,
            };
        case AuthActionTypes.RESEND_EMAIL_VERIFICATION_SUCCESS:
            return {
                ...state,
                resendEmailVerificationLoading: false,
                resendEmailVerificationError: null,
                resendEmailVerificationStatus: true,
            };
        case AuthActionTypes.RESEND_EMAIL_VERIFICATION_FAILURE :
            return {
                ...state,
                resendEmailVerificationLoading: false,
                resendEmailVerificationError: action.payload.errors,
                resendEmailVerificationStatus: false,
            };

        //enable two factors auth
        case AuthActionTypes.ENABLE_TWO_FACTOR_AUTHENTICATION_START:
            return {
                ...state,
                enableTwoFactorAuthLoading: true,
                enableTwoFactorAuthError: null,
                enableTwoFactorAuthStatus: false,
                redirectToConfirmPassword: false,
            };
        case AuthActionTypes.ENABLE_TWO_FACTOR_AUTHENTICATION_SUCCESS:
            return {
                ...state,
                enableTwoFactorAuthLoading: false,
                enableTwoFactorAuthError: null,
                enableTwoFactorAuthStatus: true,
                redirectToConfirmPassword: false,
            };
        case AuthActionTypes.ENABLE_TWO_FACTOR_AUTHENTICATION_FAILURE :
            return {
                ...state,
                disableTwoFactorAuthLoading: false,
                disableTwoFactorAuthError: action.payload.errors,
                disableTwoFactorAuthStatus: false,
                redirectToConfirmPassword: false,
            };

        //enable two factors auth
        case AuthActionTypes.DISABLE_TWO_FACTOR_AUTHENTICATION_START:
            return {
                ...state,
                disableTwoFactorAuthLoading: true,
                disableTwoFactorAuthError: null,
                disableTwoFactorAuthStatus: false,
                redirectToConfirmPassword: false,
            };
        case AuthActionTypes.DISABLE_TWO_FACTOR_AUTHENTICATION_SUCCESS:
            return {
                ...state,
                disableTwoFactorAuthLoading: false,
                disableTwoFactorAuthError: null,
                disableTwoFactorAuthStatus: true,
                redirectToConfirmPassword: false,
            };
        case AuthActionTypes.DISABLE_TWO_FACTOR_AUTHENTICATION_FAILURE :
            return {
                ...state,
                disableTwoFactorAuthLoading: false,
                disableTwoFactorAuthError: action.payload.errors,
                disableTwoFactorAuthStatus: false,
                recoveryCodes: null,
                qrCode: null,
                redirectToConfirmPassword: false,
            };

        //get qr codes
        case AuthActionTypes.GET_TWO_FACTOR_QR_CODE_SUCCESS :
            return {
                ...state,
                qrCode: action.payload,
            };




        //redirect to confirm password
        case AuthActionTypes.REDIRECT_TO_CONFIRM_PASSWORD :
            return {
                ...state,
                confirmPasswordStatus: false,
                redirectToConfirmPassword: true,
            };


        //confirm password
        case AuthActionTypes.CONFIRM_PASSWORD_START:
            return {
                ...state,
                confirmPasswordLoading: true,
                confirmPasswordError: null,
                confirmPasswordStatus: false,
                enableTwoFactorAuthLoading: false,
                enableTwoFactorAuthStatus: false,
                disableTwoFactorAuthLoading: false,
                disableTwoFactorAuthStatus: false,
                disableTwoFactorAuthError: null,
            };
        case AuthActionTypes.CONFIRM_PASSWORD_SUCCESS:
            return {
                ...state,
                confirmPasswordLoading: false,
                confirmPasswordError: null,
                confirmPasswordStatus: true,
                redirectToConfirmPassword: false,

            };
        case AuthActionTypes.CONFIRM_PASSWORD_FAILURE :
            return {
                ...state,
                confirmPasswordLoading: false,
                confirmPasswordError: action.payload.errors,
                confirmPasswordStatus: false,
            };

        //getRecoveryCodes
        case AuthActionTypes.GET_RECOVERY_CODE_START:
            return {
                ...state,
                getRecoveryCodesLoading: true,
                getRecoveryCodesError: null,
                recoveryCodes: null,
                redirectToConfirmPassword: false,
            };
        case AuthActionTypes.GET_RECOVERY_CODE_SUCCESS:
            return {
                ...state,
                getRecoveryCodesLoading: false,
                getRecoveryCodesError: null,
                recoveryCodes: action.payload,

            };
        case AuthActionTypes.GET_RECOVERY_CODE_FAILURE:
            return {
                ...state,
                getRecoveryCodesLoading: false,
                getRecoveryCodesError: action.payload,
                recoveryCodes: null,

            };

        case AuthActionTypes.GET_TWO_FACTOR_QR_CODE_FAILURE :
            return {
                ...state,
                confirmPasswordLoading: false,
                confirmPasswordError: action.payload.errors,
                confirmPasswordStatus: false,
            };


        //redirect to tow factor challenge
        case AuthActionTypes.REDIRECT_TO_TWO_FACTOR_CHALLENGE :
            return {
                ...state,
                redirectToTwoFactorChallenge: true,
            };

        //redirect to tow factor challenge
        case AuthActionTypes.CANCEL_TWO_FACTOR_CHALLENGE :
            return {
                ...state,
                redirectToTwoFactorChallenge: false,
                signInLoading: false,
            };

        //two factor challenge
        case AuthActionTypes.TWO_FACTOR_CHALLENGE_START:
            return {
                ...state,
                twoFactorChallengeLoading: true,
                twoFactorChallengeError: null,
                twoFactorChallengeStatus: false,

            };
        case AuthActionTypes.TWO_FACTOR_CHALLENGE_SUCCESS:
            return {
                ...state,
                twoFactorChallengeLoading: false,
                twoFactorChallengeError: null,
                twoFactorChallengeStatus: true,
            };
        case AuthActionTypes.TWO_FACTOR_CHALLENGE_FAILURE :
            return {
                ...state,
                twoFactorChallengeLoading: false,
                twoFactorChallengeError: action.payload.errors,
                twoFactorChallengeStatus: false,
                signInLoading: false,
            };

        default :
            return state;
    }
};

export default authReducer;
