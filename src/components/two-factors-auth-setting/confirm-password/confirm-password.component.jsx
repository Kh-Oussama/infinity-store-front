import React, {useEffect, useState} from 'react';
import {createStructuredSelector} from "reselect";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {
    selectConfirmPasswordError,
    selectConfirmPasswordLoading,
    selectConfirmPasswordStatus
} from "../../../redux/auth/auth.selectors";
import {confirmPasswordStart} from "../../../redux/auth/auth.actions";
import Spinner from "../../spinner/spinner.components";

const ConfirmPasswordComponent = ({confirmPassword, loading, status, errors, match}) => {
    const [userCredentials, setCredentials] = useState({password: ''});
    const {password} = userCredentials;

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    };


    const [passwordError, setPasswordError] = useState(null);

    // handling errors
    useEffect(() => {
        if (errors) {
            if (errors.password) setPasswordError(errors.password); else setPasswordError(null);
        }
    }, [errors])

    const handleSubmit = event => {
        event.preventDefault();
        setPasswordError(null);
        confirmPassword(password);
    };
    if (status) return <Redirect to={`/dashboard/${match.params.componentPath}`}/>;
    if (loading) return <Spinner/>;
    return (
        <div className="update-password email-verification-block">
            <div className="form-ct email-verification-block">
                <h1 className={"title"}>Confirm Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <label htmlFor="">password</label>
                        <input
                            type="password"
                            name={"password"}
                            value={password}
                            onChange={handleChange}
                        />
                        {
                            passwordError
                            &&
                            <span className={"input-validation-errors"}>
                            <i className="mdi mdi-alert-outline mr-2 "/>
                            {passwordError}
                     </span>}
                    </div>
                    <button className={"submit-btn"}>Confirm</button>
                </form>
            </div>
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectConfirmPasswordLoading,
    errors: selectConfirmPasswordError,
    status: selectConfirmPasswordStatus,
});

const mapDispatchToProps = dispatch => ({
    confirmPassword: (password) => dispatch(confirmPasswordStart({password})),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmPasswordComponent));

