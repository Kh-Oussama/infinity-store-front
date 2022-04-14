import React from 'react';
import {createStructuredSelector} from "reselect";
import {selectRecoveryCodes, selectRecoveryCodesError} from "../../redux/auth/auth.selectors";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const DisableTwoFactorComponent = ({qrCode, recoveryCodes, disableTwoFactorAuthentication}) => {


    return (
        <div className="update-password email-verification-block">
            <div className="form-ct email-verification-block">
                <h1 className={"title"}>Infinity Store Team</h1>
                {qrCode &&
                    <p className="description">
                        Scan the qr code below with an authenticator application, such as Google Authenticator on your
                        phone.

                    </p>
                }
                {qrCode &&
                    <div className="description">
                        <div className="btn btn-outline-success align-text-left">
                            <span dangerouslySetInnerHTML={{__html: qrCode}}/>
                        </div>
                    </div>
                }
                <p className={"description"}>
                    Hi Ousssama,<br/>
                    Two-factor authentication is an extra layer of security for your Apple ID designed to ensure that
                    you're the only person who can access your account, even if someone knows your password.
                </p>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th className={"table-title"}> Refectory Codes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            recoveryCodes && recoveryCodes.map(rec => {
                                    return (
                                        <tr>
                                            <td> {rec} </td>
                                        </tr>
                                    )
                                }
                            )
                        }

                        </tbody>
                    </table>
                </div>

                <div className="button-block">
                    <button onClick={disableTwoFactorAuthentication}>
                        Disable two Factor Authentication
                    </button>
                </div>

                <p className={"description"}>
                    After you turn on 2-Step Verification, you'll need to complete a second step to verify it's you when
                    you sign in.
                </p>
            </div>
        </div>

    )
}
const mapStateToProps = createStructuredSelector({

    errors: selectRecoveryCodesError,
    recoveryCodes: selectRecoveryCodes,

});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DisableTwoFactorComponent));
