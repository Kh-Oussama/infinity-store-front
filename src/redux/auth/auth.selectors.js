import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const selectCurrentUser = createSelector(
    [selectAuth],
    auth => auth.currentUser,
);

//sign up
export const selectSignUpLoading = createSelector(
    [selectAuth],
    auth => auth.signUpLoading,
);
export const selectSignUpError = createSelector(
    [selectAuth],
    auth => auth.signUpError,
);

//sign in
export const selectSignInLoading = createSelector(
    [selectAuth],
    auth => auth.signInLoading,
);
export const selectSignInError = createSelector(
    [selectAuth],
    auth => auth.signInError,
);

//check User session
export const selectCheckUserSessionLoading= createSelector(
    [selectAuth],
    auth => auth.checkUserSessionLoading,
);

//sign out
export const selectSignOutLoading = createSelector(
    [selectAuth],
    auth => auth.signOutLoading,
);
export const selectSignOutError = createSelector(
    [selectAuth],
    user => user.signOutError,
);

//send forget password email
export const selectSendForgetPasswordEmailLoading = createSelector(
    [selectAuth],
    auth => auth.sendForgetPasswordEmailLoading,
);
export const selectSendForgetPasswordEmailError = createSelector(
    [selectAuth],
    auth => auth.sendForgetPasswordEmailError,
);
export const selectSendForgetPasswordEmailStatus = createSelector(
    [selectAuth],
    auth => auth.sendForgetPasswordEmailStatus,
);

//password reset
export const selectResetPasswordLoading = createSelector(
    [selectAuth],
    auth => auth.resetPasswordLoading,
);
export const selectResetPasswordError = createSelector(
    [selectAuth],
    auth => auth.resetPasswordError,
);
export const selectResetPasswordStatus  = createSelector(
    [selectAuth],
    auth => auth.resetPasswordStatus,
);

//rsend email verification
export const selectResendEmailVerificationLoading = createSelector(
    [selectAuth],
    auth => auth.resendEmailVerificationLoading,
);
export const selectResendEmailVerificationError = createSelector(
    [selectAuth],
    auth => auth.resendEmailVerificationError,
);
export const selectResendEmailVerificationStatus  = createSelector(
    [selectAuth],
    auth => auth.resendEmailVerificationStatus,
);

//enable two factors auth
export const selectEnableTwoFactorAuthLoading = createSelector(
    [selectAuth],
    auth => auth.enableTwoFactorAuthLoading,
);
export const selectEnableTwoFactorAuthError = createSelector(
    [selectAuth],
    auth => auth.enableTwoFactorAuthError,
);
export const selectEnableTwoFactorAuthStatus  = createSelector(
    [selectAuth],
    auth => auth.enableTwoFactorAuthStatus,
);

//disable two factors auth
export const selectDisableTwoFactorAuthLoading = createSelector(
    [selectAuth],
    auth => auth.disableTwoFactorAuthLoading,
);
export const selectDisableTwoFactorAuthError = createSelector(
    [selectAuth],
    auth => auth.disableTwoFactorAuthError,
);

export const selectDisableTwoFactorAuthStatus= createSelector(
    [selectAuth],
    auth => auth.disableTwoFactorAuthError,
);


//Qr codes
export const selectTwoFactorQrCode= createSelector(
    [selectAuth],
    auth => auth.qrCode
);



//recovery codes
export const selectRedirectToConfirmPassword= createSelector(
    [selectAuth],
    auth => auth.redirectToConfirmPassword
);

//enable two factors auth
export const selectConfirmPasswordLoading = createSelector(
    [selectAuth],
    auth => auth.confirmPasswordLoading,
);
export const selectConfirmPasswordError = createSelector(
    [selectAuth],
    auth => auth.confirmPasswordError,
);
export const selectConfirmPasswordStatus  = createSelector(
    [selectAuth],
    auth => auth.confirmPasswordStatus,
);


//get Recovery Codes
export const selectRecoveryCodesLoading = createSelector(
    [selectAuth],
    auth => auth.getRecoveryCodesLoading,
);
export const selectRecoveryCodesError = createSelector(
    [selectAuth],
    auth => auth.getRecoveryCodesError,
);
export const selectRecoveryCodes = createSelector(
    [selectAuth],
    auth => auth.recoveryCodes,
);


//two factor challenge
export const selectTwoFactorsChallengeLoading = createSelector(
    [selectAuth],
    auth => auth.twoFactorChallengeLoading,
);
export const selectTwoFactorsChallengeError = createSelector(
    [selectAuth],
    auth => auth.twoFactorChallengeError,
);
export const selectTwoFactorsChallengeStatus = createSelector(
    [selectAuth],
    auth => auth.twoFactorChallengeStatus,
);


export const selectRedirectToFactorChallenge= createSelector(
    [selectAuth],
    auth => auth.redirectToTwoFactorChallenge
);