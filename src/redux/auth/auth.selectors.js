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
