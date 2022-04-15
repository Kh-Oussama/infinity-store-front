import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';

import Spinner from "../../spinner/spinner.components";
import {
    selectResetPasswordError,
    selectResetPasswordLoading,
    selectResetPasswordStatus
} from "../../../redux/auth/auth.selectors";
import {resetPasswordStart} from "../../../redux/auth/auth.actions";
import {Message} from "semantic-ui-react";


//this is component for the sign-in form
const ResetPassword = ({resetPassword, loading, errors, status, match, history}) => {
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


    if (loading) return <div className={"spinner-container"}><Spinner custom /></div>;
    return (
        <>
            <div className="sign-in">
                <div className="logo">
                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                </div>

                {
                    status
                        ? <> <Message positive attached='bottom'
                                      className={"description description-info forget-password-message"}>
                            <i className="fa-solid fa-check-double"/> Check your inbox for the next steps. If you
                            don't receive an email, and it's not in your spam folder this could mean you signed up
                            with a different address.
                        </Message>
                            <div className="sign-in-footer">
                                Go back to login page ? <span onClick={() => history.push('/auth')}>Login</span>
                            </div>
                        </>
                        :
                        <>
                            <div className="title">
                                Reset Password
                            </div>
                            <div className="form">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-block">
                                        <label htmlFor="">Password</label>
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
                                        <label htmlFor="">Confirm Password</label>
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
                        </>

                }
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
