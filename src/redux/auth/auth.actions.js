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


//resend email verification
export const resendEmailVerificationStart = () => ({
    type: AuthActionTypes.RESEND_EMAIL_VERIFICATION_START,
});

export const resendEmailVerificationSuccess = () => ({
    type: AuthActionTypes.RESEND_EMAIL_VERIFICATION_SUCCESS,
});

export const resendEmailVerificationFailure = error => ({
    type: AuthActionTypes.RESEND_EMAIL_VERIFICATION_FAILURE, payload: error,
});

//enable two factors auth
export const enableTwoFactorAuthenticationStart = () => ({
    type: AuthActionTypes.ENABLE_TWO_FACTOR_AUTHENTICATION_START,
});
export const enableTwoFactorAuthenticationSuccess = () => ({
    type: AuthActionTypes.ENABLE_TWO_FACTOR_AUTHENTICATION_SUCCESS,
});
export const enableTwoFactorAuthenticationFailure = error => ({
    type: AuthActionTypes.ENABLE_TWO_FACTOR_AUTHENTICATION_FAILURE, payload: error,
});

//get recovery codes
export const getRecoveryCodesStart = () => ({
    type: AuthActionTypes.GET_RECOVERY_CODE_START,
});
export const getRecoveryCodesSuccess = recoveryCodes => ({
    type: AuthActionTypes.GET_RECOVERY_CODE_SUCCESS, payload: recoveryCodes,
});
export const getRecoveryCodesFailure = error => ({
    type: AuthActionTypes.GET_RECOVERY_CODE_FAILURE, payload: error,
})

//get qr codes
export const getTwoFactorQrCodeStart = () => ({
    type: AuthActionTypes.GET_TWO_FACTOR_QR_CODE_START,
});
export const getTwoFactorQrCodeSuccess = qrCode => ({
    type: AuthActionTypes.GET_TWO_FACTOR_QR_CODE_SUCCESS, payload: qrCode,
});
export const getTwoFactorQrCodeFailure = error => ({
    type: AuthActionTypes.GET_TWO_FACTOR_QR_CODE_FAILURE, payload: error,
});

//redirect to confirm password
export const redirectToConfirmPassword = () => ({
    type: AuthActionTypes.REDIRECT_TO_CONFIRM_PASSWORD,
});


//confirm password
export const confirmPasswordStart = cred => ({
    type: AuthActionTypes.CONFIRM_PASSWORD_START, payload: cred,
});

export const confirmPasswordSuccess = () => ({
    type: AuthActionTypes.CONFIRM_PASSWORD_SUCCESS,
});

export const confirmPasswordFailure = error => ({
    type: AuthActionTypes.CONFIRM_PASSWORD_FAILURE, payload: error,
});

//disable two factors challenge
export const disableTwoFactorAuthenticationStart = () => ({
    type: AuthActionTypes.DISABLE_TWO_FACTOR_AUTHENTICATION_START,
});

export const disableTwoFactorAuthenticationSuccess = () => ({
    type: AuthActionTypes.DISABLE_TWO_FACTOR_AUTHENTICATION_SUCCESS,
});

export const disableTwoFactorAuthenticationFailure = error => ({
    type: AuthActionTypes.DISABLE_TWO_FACTOR_AUTHENTICATION_FAILURE, payload: error,
});

//redirect to two factors challenge
export const redirectToTwoFactorChallenge = () => ({
    type: AuthActionTypes.REDIRECT_TO_TWO_FACTOR_CHALLENGE,
});

//cancel two factors challenge
export const cancelTwoFactorChallenge = () => ({
    type: AuthActionTypes.CANCEL_TWO_FACTOR_CHALLENGE,
});


/////////////////////////

export const updateProfileInformationStart = cred => ({
    type: AuthActionTypes.UPDATE_PROFILE_INFORMATION_START, payload: cred,
});

export const updateProfileInformationSuccess = () => ({
    type: AuthActionTypes.UPDATE_PROFILE_INFORMATION_SUCCESS,
});

export const updateProfileInformationFailure = error => ({
    type: AuthActionTypes.UPDATE_PROFILE_INFORMATION_FAILURE, payload: error,
});
/////////////////////////


/////////////////////////

/////////////////////

/////////////////////////
export const deleteAccountStart = cred => ({
    type: AuthActionTypes.DELETE_ACCOUNT_START,
});

export const deleteAccountSuccess = () => ({
    type: AuthActionTypes.DELETE_ACCOUNT_SUCCESS,
});

export const deleteAccountFailure = error => ({
    type: AuthActionTypes.DELETE_ACCOUNT_FAILURE, payload: error,
});

//two factor challenge
export const twoFactorChallengeStart = code => ({
    type: AuthActionTypes.TWO_FACTOR_CHALLENGE_START, payload: code,
});

export const twoFactorChallengeSuccess = () => ({
    type: AuthActionTypes.TWO_FACTOR_CHALLENGE_SUCCESS,
});

export const twoFactorChallengeFailure = error => ({
    type: AuthActionTypes.TWO_FACTOR_CHALLENGE_FAILURE, payload: error,
});
