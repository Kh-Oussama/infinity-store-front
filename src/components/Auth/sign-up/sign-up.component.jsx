import React, {useEffect, useState} from 'react';
import Spinner from "../../spinner/spinner.components";
import {createStructuredSelector} from "reselect";
import {
    selectRedirectToFactorChallenge,
    selectSignInError,
    selectSignInLoading, selectSignUpError, selectSignUpLoading,
    selectTwoFactorsChallengeError
} from "../../../redux/auth/auth.selectors";
import {cancelTwoFactorChallenge, signInStart, signUpStart} from "../../../redux/auth/auth.actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

//this is component for the sign-up form
const SignUp = ({switchComponent, signUpStart, loading, signUpErrors}) => {
    // local state
    const [userCredentials, setCredentials] = useState({email: '', password: '', password_confirmation: '', name: ''});
    const {email, password, password_confirmation, name} = userCredentials;

    //handling errors
    const [emailError, setEmailError] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [passwordConfirmationError, setPasswordConfirmationError] = useState(null);

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (password_confirmation !== password) return setPasswordConfirmationError('password confirmation does not match');
        setPasswordError(null);
        setEmailError(null);
        setNameError(null);
        setPasswordConfirmationError(null);
        signUpStart(name, email, password, password_confirmation);

    };


    //handling errors
    useEffect(() => {
        if (signUpErrors) {
            if (signUpErrors.email) setEmailError(signUpErrors.email); else setEmailError(null);
            if (signUpErrors.name) setNameError(signUpErrors.name); else setNameError(null);
            if (signUpErrors.password) setPasswordError(signUpErrors.password); else setPasswordError(null);
        }
    }, [signUpErrors])

    if (loading) return <div className={"spinner-container"}><Spinner custom={true} /></div>;
    return (
        <>
            <div className="sign-in">
                <div className="logo">
                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                </div>
                <div className="title">
                    By signing up, you agree to ourterms & policy

                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                id="exampleInputUsername1"
                                name={"name"}
                                value={name}
                                onChange={handleChange}
                            />
                            {
                                nameError &&
                                <span className={"input-validation-errors"}>
                                                    <i className="mdi mdi-alert-outline mr-2 "/>
                                    {nameError}
                                                     </span>
                            }
                        </div>
                        <div className="input-block">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                id="exampleInputEmail1"
                                name={"email"}
                                value={email}
                                onChange={handleChange}
                            />
                            {
                                emailError &&
                                <span className={"input-validation-errors"}>
                                                    <i className="mdi mdi-alert-outline mr-2 "/>
                                    {emailError}
                                                     </span>
                            }
                        </div>
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
                        <button className={"submit-btn"}>Register</button>
                    </form>
                </div>
                <div className="divider"/>
                <div className="sign-in-footer">
                    Already have an account? <span onClick={() => switchComponent("sign-in")}>Login</span>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = createStructuredSelector({
    loading: selectSignUpLoading,
    signUpErrors: selectSignUpError,
});

const mapDispatchToProps = dispatch => ({
    signUpStart: (name, email, password, password_confirmation) => dispatch(signUpStart({
        name,
        email,
        password,
        password_confirmation
    })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));

