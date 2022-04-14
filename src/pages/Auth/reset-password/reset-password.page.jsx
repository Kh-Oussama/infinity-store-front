import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

import {toast, ToastContainer} from "react-toastify";
import {resetPasswordStart} from "../../../redux/auth/auth.actions";
import {
    selectResetPasswordError,
    selectResetPasswordLoading,
    selectResetPasswordStatus
} from "../../../redux/auth/auth.selectors";
import Spinner from "../../../app/shared/Spinner";


const ResetPasswordPage = ({ resetPassword, loading, errors, status, match }) => {
    // local state
    const [userCredentials, setCredentials] = useState({token: match.params.token,email: match.params.email, password: '', password_confirmation: ''});
    const {token, email, password, password_confirmation} = userCredentials;

    //handling errors
    const[passwordError,setPasswordError] = useState(null);
    const[passwordConfirmationError,setPasswordConfirmationError] = useState(null);
    const[cleanUp,setCleanUp] = useState(false);

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
    },[errors])


    if (loading) return <div className={"spinner-container"}><Spinner/></div>;
    return (
        <>
            <div>
                <div className="toastErr">
                    <ToastContainer />
                </div>
                <div className="d-flex align-items-center auth px-0 sign-up-container">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    {/*<img src={require("../../assets/images/logo.svg")} alt="logo" />*/}
                                    Logo ici
                                </div>
                                <h4>Reset Password</h4>
                                {
                                    !status &&
                                    <>
                                        <h6 className="font-weight-light">Please Enter the new password.</h6>
                                        <form className="pt-3" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg"
                                                    id="exampleInputPassword1"
                                                    placeholder="Password"
                                                    name={"password"}
                                                    value={password}
                                                    onChange={handleChange}
                                                />
                                                {
                                                    passwordError &&
                                                    <span className={"input-validation-errors"}>
                                                    <i className="mdi mdi-alert-outline mr-2 "></i>
                                                        {passwordError}
                                                     </span>
                                                }
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg"
                                                    id="exampleInputPassword1"
                                                    placeholder="Confirm Password"
                                                    name={"password_confirmation"}
                                                    value={password_confirmation}
                                                    onChange={handleChange}
                                                />
                                                {
                                                    passwordConfirmationError &&
                                                    <span className={"input-validation-errors"}>
                                                    <i className="mdi mdi-alert-outline mr-2 "></i>
                                                        {passwordConfirmationError}
                                                     </span>
                                                }
                                            </div>
                                            <div className="mt-3">
                                                <button type={"submit"}
                                                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                                                    Save password
                                                </button>
                                            </div>

                                        </form>
                                    </>
                                }
                                {status && <div className="btn btn-inverse-success align-text-left" style={{margin: '1rem'}}>
                                    Your password has been saved, please return to login page.
                                </div> }
                                <div className="text-center mt-4 font-weight-light">
                                    <Link to="/login" className="text-primary">Login</Link>
                                    <span style={{margin: '0 .5rem'}}>Or</span> <Link to="/register"
                                                                                      className="text-primary">Sign
                                    up</Link>   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectResetPasswordLoading,
    errors: selectResetPasswordError,
    status : selectResetPasswordStatus,
});

const mapDispatchToProps = dispatch => ({
    resetPassword: ( email, password, password_confirmation, token) => dispatch(resetPasswordStart({ email, password, password_confirmation, token})),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage));
