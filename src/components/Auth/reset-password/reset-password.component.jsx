import React, {useEffect, useState} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';

import Spinner from "../../spinner/spinner.components";
import {
    selectRedirectToFactorChallenge, selectResetPasswordError, selectResetPasswordLoading, selectResetPasswordStatus,
    selectSignInError,
    selectSignInLoading,
    selectTwoFactorsChallengeError
} from "../../../redux/auth/auth.selectors";
import {cancelTwoFactorChallenge, resetPasswordStart, signInStart} from "../../../redux/auth/auth.actions";


//this is component for the sign-in form
const ResetPassword = ({resetPassword, loading, errors, status, match}) => {
    // local state
    const [userCredentials, setCredentials] = useState({
        token: match.params.token,
        email: match.params.email,
        password: '',
        password_confirmation: ''
    });
    const {token, email, password, password_confirmation} = userCredentials;

    //handling errors
    const [passwordError, setPasswordError] = useState(null);
    const [passwordConfirmationError, setPasswordConfirmationError] = useState(null);
    const [cleanUp, setCleanUp] = useState(false);

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        setCleanUp(true);
        if (password_confirmation !== password) return setPasswordConfirmationError('password confirmation does not match');
        setPasswordError(null);
        setPasswordConfirmationError(null);
        resetPassword(email, password, password_confirmation, token);
    };


    //handling errors
    useEffect(() => {
        if (errors) {
            if (errors.password) setPasswordError(errors.password); else setPasswordError(null);
        }
    }, [errors])


    if (loading) return <div className={"spinner-container"}><Spinner/></div>;
    return (
        <>
            <div className="sign-in">
                <div className="logo">
                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                </div>
                <div className="title">
                    Login with your email & password
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="">password</label>
                            <input
                                type="password"
                                id="exampleInputPassword1"
                                name={"password"}
                                value={password}
                                onChange={handleChange}
                            />
                            {
                                passwordError &&
                                <span className={"input-validation-errors"}>
                                                    <i className="mdi mdi-alert-outline mr-2 "/>
                                    {passwordError}
                                                     </span>
                            }
                        </div>
                        <div className="input-block">
                            <label htmlFor="">password</label>
                            <input
                                type="password"
                                id="exampleInputPassword1"
                                name={"password_confirmation"}
                                value={password_confirmation}
                                onChange={handleChange}
                            />
                            {
                                passwordConfirmationError &&
                                <span className={"input-validation-errors"}>
                                                    <i className="mdi mdi-alert-outline mr-2 "/>
                                    {passwordConfirmationError}
                                                     </span>
                            }
                        </div>
                        <button className={"submit-btn"}>Save Password</button>
                    </form>
                </div>
                <div className="divider"/>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectResetPasswordLoading,
    errors: selectResetPasswordError,
    status: selectResetPasswordStatus,
});

const mapDispatchToProps = dispatch => ({
    resetPassword: (email, password, password_confirmation, token) => dispatch(resetPasswordStart({
        email,
        password,
        password_confirmation,
        token
    })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPassword));
