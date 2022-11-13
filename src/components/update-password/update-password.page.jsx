import React, {useEffect, useState} from "react";
import PasswordGroup from "../input-group/password-group.component";
import {createStructuredSelector} from "reselect";
import {
    selectUpdatePasswordError,
    selectUpdatePasswordLoading,
    selectUpdatePasswordStatus
} from "../../redux/auth/auth.selectors";
import {updateUserPasswordStart} from "../../redux/auth/auth.actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner.components";
import cookies from "js-cookie";
import { withTranslation } from "react-i18next";

const UpdatePassword = ({updatePassword, updateLoading, passwordErrors, updateStatus, t}) => {
    const lang = cookies.get('i18next') || "en";

    const [credentials, setCredentials] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const {oldPassword, newPassword, confirmPassword} = credentials;
    const [passwordConfirmationError, setPasswordConfirmationError] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState(false);


    //security error
    const [oldPasswordError, setOldPasswordError] = useState(null);
    const [newPasswordError, setNewPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);

    const handelChange = e => {
        setOldPasswordError(null);
        setNewPasswordError(null);
        setConfirmPasswordError(null);
        let event = e.target;
        setCredentials({
            ...credentials,
            [event.name]: event.value,
        });
    }

    useEffect(() => {
        if (passwordErrors) {
            if (passwordErrors.current_password) setOldPasswordError(passwordErrors.current_password); else setOldPasswordError(null);
            if (passwordErrors.password) setNewPasswordError(passwordErrors.password); else setNewPasswordError(null);
        }
    }, [passwordErrors]);

    //Function to submit security information
    const handleSecuritySubmit = event => {
        event.preventDefault();
        if (newPassword !== confirmPassword) return setPasswordConfirmationError('password confirmation does not match');



        updatePassword({current_password: oldPassword, password: newPassword, password_confirmation: confirmPassword});
        setUpdateSuccess(true);
    }

    useEffect(() => {
        if (updateStatus) {
            setCredentials({
                ...credentials,
                newPassword: '',
                oldPassword: '',
                confirmPassword: '',
            });
        }
    }, [updateStatus]);


    return (
        <div className="update-password">
            {
                updateLoading
                    ? <Spinner/>
                    :
                    <div className="form-ct">
                        <form onSubmit={handleSecuritySubmit}  lang={lang}>
                            <p>{t('Change Password')}</p>
                            {
                                updateStatus && updateSuccess &&
                                <span className={"input-validation-errors info-success"}>
                               <i className="fa-solid fa-circle-check"/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam .

                                </span>
                            }

                            <PasswordGroup label={t("Old password")} name="oldPassword" value={oldPassword}
                                           onChange={handelChange}/>
                            {
                                oldPasswordError
                                &&
                                <span className={"input-validation-errors"}>
                               <i className="fa-solid fa-triangle-exclamation"/>
                                    {oldPasswordError}

                                </span>
                            }

                            <PasswordGroup label={t("New password")} name="newPassword" value={newPassword}
                                           onChange={handelChange}/>
                            {
                                newPasswordError
                                &&
                                <span className={"input-validation-errors"}>
                               <i className="fa-solid fa-triangle-exclamation"/>
                                    {newPasswordError}

                                </span>
                            }
                            <PasswordGroup label={t("Confirm password")} name="confirmPassword" value={confirmPassword}
                                           onChange={handelChange}/>
                            {
                                passwordConfirmationError
                                &&
                                <span className={"input-validation-errors"}>
                               <i className="fa-solid fa-triangle-exclamation"/>
                                    {passwordConfirmationError}

                                </span>
                            }
                            <div className="submit-ct">
                                <input type="submit" value={t("Submit")} />
                            </div>
                        </form>
                    </div>
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    updateLoading: selectUpdatePasswordLoading,
    passwordErrors: selectUpdatePasswordError,
    updateStatus: selectUpdatePasswordStatus,
});

const mapDispatchToProps = dispatch => ({
    updatePassword: user => dispatch(updateUserPasswordStart(user)),
});

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePassword)));

