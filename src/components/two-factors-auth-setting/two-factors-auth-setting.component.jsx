import React, {useEffect} from "react";
import {Redirect, withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {
    selectCurrentUser,
    selectDisableTwoFactorAuthLoading,
    selectEnableTwoFactorAuthError,
    selectEnableTwoFactorAuthLoading,
    selectRecoveryCodesLoading,
    selectRedirectToConfirmPassword,
    selectTwoFactorQrCode
} from "../../redux/auth/auth.selectors";
import {connect} from "react-redux";
import {
    disableTwoFactorAuthenticationStart,
    enableTwoFactorAuthenticationStart,
    getRecoveryCodesStart
} from "../../redux/auth/auth.actions";
import Spinner from "../spinner/spinner.components";
import EnableTwoFactorComponent from "./enable-two-factor.component";
import DisableTwoFactorComponent from "./disable-two-factor.component";

const TwoFactorAuthSettings = ({
                                   loading,
                                   status,
                                   errors,
                                   currentUser,
                                   enableTwoFactorAuthentication,
                                   redirectToConfirmPassword,
                                   match,
                                   qrCode,
                                   disableTwoFactorAuthentication,
                                   loadingDisableTwoFactorAuth,
                                   loadingRecoveryCodes,
                                   getRecoveryCodes,
                               }) => {

    useEffect(() => {
        getRecoveryCodes();
    }, [getRecoveryCodes]);

    if (redirectToConfirmPassword) return <Redirect to={`/dashboard/confirm-password/two-factors-auth`}/>;
    if (loading || loadingDisableTwoFactorAuth || loadingRecoveryCodes) return   <div className="dashboard-content-card"><Spinner /></div>;
    return (

                    !currentUser.two_factor_enabled
                        ? <EnableTwoFactorComponent enableTwoFactorAuthentication={enableTwoFactorAuthentication}/>
                        : <DisableTwoFactorComponent disableTwoFactorAuthentication={disableTwoFactorAuthentication}
                                                     qrCode={qrCode}/>

    );
}

const mapStateToProps = createStructuredSelector({
    loading: selectEnableTwoFactorAuthLoading,
    errors: selectEnableTwoFactorAuthError,
    loadingRecoveryCodes: selectRecoveryCodesLoading,
    loadingDisableTwoFactorAuth: selectDisableTwoFactorAuthLoading,
    //redirect to confirm password
    redirectToConfirmPassword: selectRedirectToConfirmPassword,
    //qr codes
    qrCode: selectTwoFactorQrCode,
    //current user
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    enableTwoFactorAuthentication: () => dispatch(enableTwoFactorAuthenticationStart()),
    disableTwoFactorAuthentication: () => dispatch(disableTwoFactorAuthenticationStart()),
    getRecoveryCodes: () => dispatch(getRecoveryCodesStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TwoFactorAuthSettings));


