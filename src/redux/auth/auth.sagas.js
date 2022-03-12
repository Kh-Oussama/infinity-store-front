import AuthActionTypes from "./auth.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import Axios from "axios";
import {
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
} from "./auth.actions";

//Sign-up
export function* SignUp({payload: {name, email, password, password_confirmation}}) {
    const data = {name, email, password, password_confirmation};
    try {
        yield Axios.post("", data);
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
        const response = yield Axios.post("", data);
        //yield isUserAuthenticated();    
    } catch (error) {
        yield put(signInFailure(error.response.data));
    }
}

//get the user authenticated
export function* isUserAuthenticated() {
    try {
        const response = yield Axios.get("");
        const user = response.data;
        yield put(signInSuccess({id: user.id, ...user}));
    } catch (error) {
        yield put(signInFailure(error.response.data.message));
    }
}

//sign out
export function* SignOut() {
    try {
        yield Axios.post("");
        yield (put(signOutSuccess()));
    } catch (error) {
        yield put(signOutFailure(error.response.data))
    }
}

//send forget password email
export function* sendForgetPasswordEmail({payload: {email}}) {
    const data = {email};
    try {
        yield Axios.post("", data);
        yield put(sendForgetPasswordEmailSuccess());
    } catch (error) {
        yield put(sendForgetPasswordEmailFailure(error.response.data));
    }
}

//reset password success
export function* resetPassword({payload: {email, password, password_confirmation, token}}) {
    const data = {email, password, password_confirmation, token};
    try {
        yield Axios.post("", data);
        yield put(resetPasswordSuccess());
    } catch (error) {
        yield put(resetPasswordFailure(error.response.data));
    }
}

//resend email verification
export function* resendEmailVerification() {
    try {
        yield Axios.post("");
        yield (put(resendEmailVerificationSuccess()));
    } catch (error) {
        yield put(resendEmailVerificationFailure(error.response.data))
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

    ]);
}
