import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';

import Spinner from "../../spinner/spinner.components";
import {
    selectRedirectToFactorChallenge,
    selectSignInError,
    selectSignInLoading,
    selectTwoFactorsChallengeError
} from "../../../redux/auth/auth.selectors";
import {cancelTwoFactorChallenge, signInStart} from "../../../redux/auth/auth.actions";
import { withTranslation } from 'react-i18next';
import cookies from "js-cookie";


//this is component for the sign-in form
const SignIn = ({
                    switchComponent,
                    signInStart,
                    errors,
                    loading,
                    signInErrors,
                    redirectToTwoFactorChallenge,
                    cancelTwoFactorChallenge,
                    t
                }) => {

    useEffect(() => {
        if (redirectToTwoFactorChallenge)
            switchComponent("two-factors-challenge")
    }, [redirectToTwoFactorChallenge]);

    const lang = cookies.get('i18next') || "en";
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    };

    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [badCredentialsError, setBadCredentialsError] = useState(null);
    const [codeError, setCodeError] = useState(null);

    useEffect(() => {
        cancelTwoFactorChallenge();
    }, [cancelTwoFactorChallenge])

    //handling errors
    useEffect(() => {
        if (signInErrors) {
            if (signInErrors.email && signInErrors.email == 'The email field is required.') setEmailError(signInErrors.email); else setEmailError(null);
            if (signInErrors.password) setPasswordError(signInErrors.password); else setPasswordError(null);
            if (signInErrors.email && signInErrors.email != 'The email field is required.') setBadCredentialsError(signInErrors.email); else setBadCredentialsError(null);
        }
        if (errors) {
            if (errors.code) setCodeError(errors.code); else setCodeError(null);
        }
    }, [signInErrors, errors]);

    const handleSubmit = event => {
        event.preventDefault();
        setBadCredentialsError(null);
        setEmailError(null);
        setPasswordError(null);
        setCodeError(null);
        signInStart(email, password);
    };



    if (loading) return <div className={"spinner-container"}><Spinner custom={true} /></div>;
    return (
        <>
            <div className="sign-in">
                <div className="logo">
                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                </div>
                <div className="title">
                    {t("Login with your email & password")}
                </div>
                {
                    badCredentialsError
                    &&
                    <span className={"input-validation-errors bad-cred"}>
                        <i className="fa-solid fa-triangle-exclamation"/>
                    {badCredentialsError}
                    </span>
                }
                {
                    codeError
                    &&
                    <span className={"input-validation-errors bad-cred"}>
                        <i className="fa-solid fa-triangle-exclamation"/>
                    {codeError}
                                                     </span>}
                <div className="form">
                    <form onSubmit={handleSubmit} lang={lang}>
                        <div className="input-block" lang={lang}>
                            <label htmlFor="">{t("Email")}</label>
                            <input
                                type="email"
                                name={"email"}
                                value={email}
                                onChange={handleChange}
                            />
                            {
                                emailError
                                &&
                                <span className={"input-validation-errors"}>
                               <i className="fa-solid fa-triangle-exclamation"/>
                                {emailError}
                                </span>
                            }
                        </div>
                        <div className="input-block" lang={lang}>
                            <label htmlFor="">{t("Password")}</label>
                            <input
                                type="password"
                                name={"password"}
                                value={password}
                                onChange={handleChange}
                            />
                            <Link to={"/forget-password"} className="auth-link ">
                                {t("Forgot password?")}
                            </Link>
                            {
                                passwordError
                                &&
                                <span className={"input-validation-errors"}>
                               <i className="fa-solid fa-triangle-exclamation"/>
                                {passwordError}

                                </span>
                            }
                        </div>
                        <button className={"submit-btn"}>{t("Login")}</button>
                    </form>
                </div>
                <div className="divider"/>
                <div className="sign-in-footer">
                    {t("Don't have any account?")} <span onClick={() => switchComponent("sign-up")}>{t("Register")}</span>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectSignInLoading,
    signInErrors: selectSignInError,
    redirectToTwoFactorChallenge: selectRedirectToFactorChallenge,
    errors: selectTwoFactorsChallengeError,
});

const mapDispatchToProps = dispatch => ({
    signInStart: (email, password) => dispatch(signInStart({email, password})),
    cancelTwoFactorChallenge: () => dispatch(cancelTwoFactorChallenge()),
});

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn)));

