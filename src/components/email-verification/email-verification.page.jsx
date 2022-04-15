import React from "react";
import {createStructuredSelector} from "reselect";
import {
    selectResendEmailVerificationError,
    selectResendEmailVerificationLoading,
    selectResendEmailVerificationStatus
} from "../../redux/auth/auth.selectors";
import {connect} from "react-redux";
import {resendEmailVerificationStart} from "../../redux/auth/auth.actions";
import Spinner from "../spinner/spinner.components";
import {Message} from "semantic-ui-react";
import 'semantic-ui-css/components/message.min.css';

const EmailVerification = ({resendEmailVerification, loading, status, errors}) => {

    return (
        <div className="update-password email-verification-block">
            <div className="form-ct email-verification-block">
                {
                    loading
                        ? <Spinner/>
                        : <>
                            <h1 className={"title"}>Infinity Store Team</h1>
                            <p className={"description"}>
                                Hi Ousssama,<br/>
                                we're happy signed up for Infinity store, To start exploring our App and neighborhood,
                                please check your inbox and confirm your email address.
                            </p>
                            <div className="button-block">
                                <button onClick={resendEmailVerification}>
                                    Resend Email Verification
                                </button>
                            </div>
                            {
                                status &&
                                <Message error attached='bottom' className={"description description-info"}>
                                    <i className="fa-solid fa-check-double"/> Check your inbox for the next steps. If you
                                    don't receive an email, and it's not in your spam folder this could mean you signed up
                                    with a different address.
                                </Message>
                            }


                        </>
                }
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
