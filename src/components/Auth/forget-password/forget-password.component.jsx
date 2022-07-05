import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';

import Spinner from "../../spinner/spinner.components";
import {
    selectSendForgetPasswordEmailError,
    selectSendForgetPasswordEmailLoading,
    selectSendForgetPasswordEmailStatus
} from "../../../redux/auth/auth.selectors";
import {sendForgetPasswordEmailStart} from "../../../redux/auth/auth.actions";
import {Message} from "semantic-ui-react";
import { withTranslation } from 'react-i18next';
import cookies from "js-cookie";

//this is component for the sign-in form
const ForgetPassword = ({sendForgetPasswordEmail, loading, errors, status, t}) => {
    const lang = cookies.get('i18next') || "en";
    const [userCredentials, setCredentials] = useState({email: ''});
    const {email} = userCredentials;

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    };

    const [emailError, setEmailError] = useState(null);


    //handling errors
    useEffect(() => {
        if (errors) {
            if (errors.email) setEmailError(errors.email); else setEmailError(null);
        }
    }, [errors])

    const handleSubmit = event => {
        event.preventDefault();
        setEmailError(null);
        sendForgetPasswordEmail(email);
    };


    if (loading) return <div className={"spinner-container"}><Spinner custom/></div>;
    return (
        <>
            <div className="sign-in forget-password">
                <div className="logo">
                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                </div>

                {
                    status
                        ?
                        <Message positive attached='bottom' className={"description description-info forget-password-message"}>
                            <i className="fa-solid fa-check-double"/> {t("Check your inbox for the next steps. If you don't receive an email, and it's not in your spam folder this could mean you signed up with a different address.")}
                        </Message>
                        : <>
                            <div className="title" lang={lang}>
                                {t("Enter your email address below and we'll send")} <br/> {t("you a link to reset your password.")}
                            </div>
                            <div className="form">
                                <form onSubmit={handleSubmit} lang={lang}>
                                    <div className="input-block" lang={lang}>
                                        <label htmlFor="">{t("Email")}</label>
                                        <input
                                            type="email"
                                            size="lg"
                                            className="h-auto input-custom"
                                            name={"email"}
                                            value={email}
                                            onChange={handleChange}
                                        />
                                        {
                                            emailError
                                            &&
                                            <span
                                                className={"input-validation-errors"}
                                            >

                                            <i className="fa-solid fa-triangle-exclamation"/>
                                                {emailError}
                                             </span>
                                        }
                                    </div>
                                    <button className={"submit-btn"}>{t("Reset Password")}</button>
                                </form>
                            </div>
                        </>
                }

                <div className="divider"/>

            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectSendForgetPasswordEmailLoading,
    errors: selectSendForgetPasswordEmailError,
    status: selectSendForgetPasswordEmailStatus,
});

const mapDispatchToProps = dispatch => ({
    sendForgetPasswordEmail: (email) => dispatch(sendForgetPasswordEmailStart({email})),
});

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgetPassword)));

