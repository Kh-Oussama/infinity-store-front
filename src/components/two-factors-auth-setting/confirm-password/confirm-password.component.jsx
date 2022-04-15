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
import './confirm-password.styles.scss';
import {Input} from "semantic-ui-react";
import 'semantic-ui-css/components/input.min.css';
import 'semantic-ui-css/components/icon.min.css';

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

    return (
        <div className="dashboard-content-card">
            {
                loading
                ? <Spinner />
                    : <div className="content">
                        <h1 className="title" >Confirm Password</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <Input
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password...'
                                    type="password"
                                    name={"password"}
                                    value={password}
                                    onChange={handleChange}
                                />

                                {
                                    passwordError
                                    &&
                                    <span className={"input-validation-errors"}>
                               <i className="fa-solid fa-triangle-exclamation"/>
                                        {passwordError}

                                </span>
                                }
                            </div>
                            <button className={"submit-btn"}>Confirm</button>
                        </form>
                    </div>
            }

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

