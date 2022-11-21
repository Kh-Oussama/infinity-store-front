import React, {useEffect, useState} from 'react';
import {Redirect,withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';

import Spinner from "../../spinner/spinner.components";
import {
    selectRedirectToFactorChallenge,
    selectSignInError,
    selectSignInLoading,
    selectTwoFactorsChallengeError, selectTwoFactorsChallengeLoading
} from "../../../redux/auth/auth.selectors";
import {cancelTwoFactorChallenge, signInStart, twoFactorChallengeStart} from "../../../redux/auth/auth.actions";
import { withTranslation } from 'react-i18next';
import cookies from "js-cookie";

//this is component for the sign-in form
const TwoFactorChallenge = ({ switchComponent,twoFactorChallenge, loading, errors, cancelTwoFactorChallenge, t }) => {
    const lang = cookies.get('i18next') || "en";
    const [userCredentials, setCredentials] = useState({code: ''});
    const {code} = userCredentials;

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    };

    const [codeError, setCodeError] = useState(null);


    //handling errors
    useEffect(() => {
        if (errors) {
            if (errors.code) setCodeError(errors.code); else setCodeError(null);
        }
    }, [errors])

    const handleSubmit = event => {
        event.preventDefault();
        setCodeError(null);
        twoFactorChallenge(code);
    };

    useEffect(() => {
        if (codeError)
            switchComponent("sign-in")
    }, [switchComponent, codeError]);

    if (loading) return <div className={"spinner-container"}><Spinner custom /></div>;
    return (
        <>
            <div className="sign-in">
                <div className="logo">
                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                </div>
                <div className="title">
                    {t("Provide the confirmation code below.")}
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                    <div lang={lang} className="input-block">
                        <label htmlFor="">{t("Code")}</label>
                        <input
                            type="text"
                            name={"code"}
                            value={code}
                            onChange={handleChange}
                        />
                    </div>
                    <button className={"submit-btn"}>{t("Confirm")}</button>
                    </form>
                </div>
                <div className="divider"/>
                <div className="sign-in-footer">
                      <span onClick={() => {
                          cancelTwoFactorChallenge();
                          switchComponent("sign-in")
                      }}>{t("Login")}</span>
                    <span style={{color:'black'}}>{t("Or")}</span>
                    <span onClick={() => switchComponent("sign-up")}>{t("Register")}</span>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectTwoFactorsChallengeLoading,
    errors: selectTwoFactorsChallengeError,
});

const mapDispatchToProps = dispatch => ({
    twoFactorChallenge: (code) => dispatch(twoFactorChallengeStart({code})),
    cancelTwoFactorChallenge: () => dispatch(cancelTwoFactorChallenge()),
});

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(TwoFactorChallenge)));

