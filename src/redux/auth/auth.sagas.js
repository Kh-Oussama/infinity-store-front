import AuthActionTypes from "./auth.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import Axios from "axios";
import {
    checkUserSession,
    confirmPasswordFailure,
    confirmPasswordSuccess,
    deleteAccountFailure,
    deleteAccountSuccess,
    disableTwoFactorAuthenticationFailure,
    disableTwoFactorAuthenticationSuccess,
    enableTwoFactorAuthenticationFailure,
    enableTwoFactorAuthenticationSuccess,
    getRecoveryCodesFailure,
    getRecoveryCodesSuccess,
    getTwoFactorQrCodeFailure,
    getTwoFactorQrCodeSuccess,
    redirectToConfirmPassword,
    redirectToTwoFactorChallenge,
    resendEmailVerificationFailure,
    resendEmailVerificationSuccess,
    resetPasswordFailure,
    resetPasswordSuccess,
    sendForgetPasswordEmailFailure,
    sendForgetPasswordEmailSuccess,
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess,
    twoFactorChallengeFailure,
    twoFactorChallengeSuccess,
    updateProfileInformationFailure,
    updateProfileInformationSuccess, updateUserPasswordFailure,
    updateUserPasswordSuccess,
} from "./auth.actions";

//Sign-up
export function* SignUp({payload: {name, email, password, password_confirmation}}) {
    const data = {name, email, password, password_confirmation};
    try {
        yield Axios.post("http://localhost:8000/register", data);
        yield isUserAuthenticated();
        yield put(signUpSuccess());
    } catch (error) {
        yield put(signUpFailure(error.response.data));
    }
}

//sign-in
export function* signIn({payload: {email, password}}) {
    const data = {email, password};
    try {
        const response = yield Axios.post("http://localhost:8000/login", data);
        if (response.data.two_factor === true) {
            yield put(redirectToTwoFactorChallenge());
        } else
            yield isUserAuthenticated();
    } catch (error) {
        if (error?.response?.status === 422)
        yield put(signInFailure(error.response.data));
    }
}

//get the user authenticated
export function* isUserAuthenticated() {
    try {
        const response = yield Axios.get("http://localhost:8000/api/client");
        const user = response.data;
        yield put(signInSuccess({id: user.id, ...user}));
    } catch (error) {
        if (error.response.status === 401) yield put(signOutSuccess());
        else  yield put(signInFailure(error.response.data.message));
    }
}

//sign out
export function* SignOut() {
    try {
        yield Axios.post("http://localhost:8000/logout");
        yield (put(signOutSuccess()));
    } catch (error) {
        yield put(signOutFailure(error.response.data))
    }
}

//send forget password email
export function* sendForgetPasswordEmail({payload: {email}}) {
    const data = {email};
    try {
        yield Axios.post("http://localhost:8000/forgot-password", data);
        yield put(sendForgetPasswordEmailSuccess());
    } catch (error) {
        yield put(sendForgetPasswordEmailFailure(error.response.data));
    }
}

//reset password success
export function* resetPassword({payload: {email, password, password_confirmation, token}}) {
    const data = {email, password, password_confirmation, token};
    try {
        yield Axios.post("http://localhost:8000/reset-password", data);
        yield put(resetPasswordSuccess());
    } catch (error) {
        yield put(resetPasswordFailure(error.response.data));
    }
}

//resend email verification
export function* resendEmailVerification() {
    try {
        yield Axios.post("http://localhost:8000/email/verification-notification");
        yield (put(resendEmailVerificationSuccess()));
    } catch (error) {
        yield put(resendEmailVerificationFailure(error.response.data))
    }
}

//enable two factors auth
export function* enableTwoFactorAuthentication() {
    try {
        yield Axios.post("http://localhost:8000/user/two-factor-authentication");
        yield getQrCode();
        yield getRecoveryCodes();
        yield (put(enableTwoFactorAuthenticationSuccess()));
    } catch (error) {
        if (error.response.status === 423) yield put(redirectToConfirmPassword());
        else yield put(enableTwoFactorAuthenticationFailure(error.response.data));
    }
}

//get QR codes
export function* getQrCode() {
    try {
        const response = yield Axios.get("http://localhost:8000/user/two-factor-qr-code");
        const qrCode = response.data.svg;
        yield (put(getTwoFactorQrCodeSuccess(qrCode)));
        yield isUserAuthenticated();
    } catch (error) {
        yield put(getTwoFactorQrCodeFailure(error.response.data))
    }
}

//get RecoveryCodes
export function* getRecoveryCodes() {
    try {
        const response = yield Axios.get("http://localhost:8000/user/two-factor-recovery-codes");
        const recoveryCodes = response.data;
        yield (put(getRecoveryCodesSuccess(recoveryCodes)));
    } catch (error) {
        if (error.response.status === 423) yield put(redirectToConfirmPassword());
        else yield put(getRecoveryCodesFailure(error.response.data));
    }
}

//disable two factors auth
export function* disableTwoFactorAuthentication() {
    try {
        yield Axios.delete("http://localhost:8000/user/two-factor-authentication");
        yield isUserAuthenticated();
        yield (put(disableTwoFactorAuthenticationSuccess()));
    } catch (error) {
        if (error.response.status === 423) yield put(redirectToConfirmPassword());
        else yield put(disableTwoFactorAuthenticationFailure(error.response.data));
    }
}

//confirm password
export function* confirmPassword({payload: {password}}) {
    const data = {password};
    try {
        yield Axios.post("http://localhost:8000/user/confirm-password", data);
        yield (put(confirmPasswordSuccess()));
    } catch (error) {
        yield put(confirmPasswordFailure(error.response.data));
    }
}

//two factor challenge
export function* twoFactorChallenge({payload: {code}}) {
    const data = {code};
    // const recovery_code = code;
    // const data = {recovery_code};
    try {
        yield Axios.post("http://localhost:8000/two-factor-challenge", data);
        yield isUserAuthenticated();
        yield (put(twoFactorChallengeSuccess()));
    } catch (error) {
        yield put(twoFactorChallengeFailure(error.response.data));
    }
}


export function* deleteAccount() {
    try {
        yield Axios.delete("http://localhost:8000/api/delete");
        yield (put(deleteAccountSuccess()));
        yield SignOut();
    } catch (error) {
        if (error.response.status === 423) yield put(redirectToConfirmPassword());
        else yield put(deleteAccountFailure(error.response.data));
    }
}

export function* updateProfileInformation({payload: {id,formData}}) {

    try {
        yield Axios.post(`http://localhost:8000/api/auth/client-profile-information/${id}`, formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        yield put(updateProfileInformationSuccess());
        yield put(checkUserSession());
    } catch (error) {
        yield put(updateProfileInformationFailure(error.response.data));
    }
}

export function* updateUserPassword({payload: {current_password, password, password_confirmation}}) {
    const data = {current_password, password, password_confirmation};
    try {
        yield Axios.put("http://localhost:8000/user/password", data);
        yield put(updateUserPasswordSuccess());
    } catch (error) {
        yield put(updateUserPasswordFailure(error.response.data));
    }
}


//sign in
export function* onSignInStart() {
    yield takeLatest(AuthActionTypes.SIGN_IN_START, signIn)
}

//sign up
export function* onSignUpStart() {
    yield takeLatest(AuthActionTypes.SIGN_UP_START, SignUp)
}

//check user session
export function* onCheckUserSession() {
    yield takeLatest(AuthActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

//sign out
export function* onSignOutStart() {
    yield takeLatest(AuthActionTypes.SIGN_OUT_START, SignOut)
}

//send forget password email
export function* onSendForgetPasswordEmail() {
    yield takeLatest(AuthActionTypes.SEND_FORGET_PASSWORD_EMAIL_START, sendForgetPasswordEmail)
}

//reset password
export function* onResetPassword() {
    yield takeLatest(AuthActionTypes.RESET_PASSWORD_START, resetPassword)
}

//resend email verification
export function* onResendEmailVerification() {
    yield takeLatest(AuthActionTypes.RESEND_EMAIL_VERIFICATION_START, resendEmailVerification)
}

//enable two factors auth
export function* onEnableTwoFactorAuthentication() {
    yield takeLatest(AuthActionTypes.ENABLE_TWO_FACTOR_AUTHENTICATION_START, enableTwoFactorAuthentication)
}

//confirm password
export function* onConfirmPassword() {
    yield takeLatest(AuthActionTypes.CONFIRM_PASSWORD_START, confirmPassword)
}

//two factors auth
export function* onDisableTwoFactorAuthentication() {
    yield takeLatest(AuthActionTypes.DISABLE_TWO_FACTOR_AUTHENTICATION_START, disableTwoFactorAuthentication)
}

//get recovery codes
export function* onGetRecoveryCodes() {
    yield takeLatest(AuthActionTypes.GET_RECOVERY_CODE_START, getRecoveryCodes)
}

//two factor challenge
export function* onTwoFactorChallenge() {
    yield takeLatest(AuthActionTypes.TWO_FACTOR_CHALLENGE_START, twoFactorChallenge)
}


export function* onUpdateProfileInformation() {
    yield takeLatest(AuthActionTypes.UPDATE_PROFILE_INFORMATION_START, updateProfileInformation)
}

export function* onUpdateUserPassword() {
    yield takeLatest(AuthActionTypes.UPDATE_USER_PASSWORD_START, updateUserPassword)
}


export function* onDeleteAccount() {
    yield takeLatest(AuthActionTypes.DELETE_ACCOUNT_START, deleteAccount)
}


export function* authSagas() {
    yield all([
        //sign up
        call(onSignUpStart),
        //sign in
        call(onSignInStart),
        //check user session
        call(onCheckUserSession),
        //sign out
        call(onSignOutStart),
        //send forget password email
        call(onSendForgetPasswordEmail),
        //reset password
        call(onResetPassword),
        //resend email verification
        call(onResendEmailVerification),
        //enable two factors auth
        call(onEnableTwoFactorAuthentication),
        //confirm password
        call(onConfirmPassword),
        //disable two factors auth
        call(onDisableTwoFactorAuthentication),
        //disable two factors auth
        call(onGetRecoveryCodes),
        //two factor challenge
        call(onTwoFactorChallenge),

        call(onUpdateProfileInformation),

        call(onUpdateUserPassword),
        // call(onUpdateProfileInformation),
        // call(onDeleteAccount),

    ]);
}
