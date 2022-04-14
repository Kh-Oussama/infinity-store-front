import React, { useState } from "react";
import PasswordGroup from "../input-group/password-group.component";
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {
    selectAuthComponentHidden,
    selectCurrentAuthComponent
} from "../../redux/design-utilites/design-utilities.selectors";
import {selectGroups} from "../../redux/group/groups.selectors";
import {
    selectCurrentUser,
    selectResendEmailVerificationError, selectResendEmailVerificationLoading,
    selectResendEmailVerificationStatus
} from "../../redux/auth/auth.selectors";
import {switchAuthComponent, toggleAuthComponent} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {resendEmailVerificationStart} from "../../redux/auth/auth.actions";

const EmailVerification = ({ resendEmailVerification, loading, status, errors}) => {


    return (
        <div className="update-password email-verification-block">
            <div className="form-ct email-verification-block">
                <h1 className={"title"}>Infinity Store Team</h1>
                <p className={"description"}>
                    Hi Ousssama,<br/>
                    we're happy signed up for Infinity store, To start exploring our App and neighborhood, please check your inbox and confirm your email address.
                </p>
                <div className="button-block">
                    <button onClick={resendEmailVerification} >
                        Resend email verification
                    </button>
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    loading: selectResendEmailVerificationLoading,
    errors: selectResendEmailVerificationError,
    status: selectResendEmailVerificationStatus,
});

const mapDispatchToProps = dispatch => ({
    resendEmailVerification: () => dispatch(resendEmailVerificationStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerification);
