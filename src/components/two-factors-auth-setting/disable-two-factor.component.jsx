import React from 'react';
import {createStructuredSelector} from "reselect";
import {selectRecoveryCodes, selectRecoveryCodesError} from "../../redux/auth/auth.selectors";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { Table } from 'semantic-ui-react';

const DisableTwoFactorComponent = ({qrCode, recoveryCodes, disableTwoFactorAuthentication}) => {

    console.log(qrCode)
    return (
        <div className="dashboard-content-card">
            <div className="content">
                <h1 className="title" >Two factors authentication</h1>
                {qrCode &&
                    <p className="description">
                        Scan the qr code below with an authenticator application, such as Google Authenticator on your
                        phone.

                    </p>
                }
                {qrCode &&
                    <div className="qr-code">
                        <div className="qr-code-card">
                            <span dangerouslySetInnerHTML={{__html: qrCode}}></span>
                    </div>
                    </div>
                }
                <p className={"description"}>
                    Hi Ousssama,<br/>
                    Two-factor authentication is an extra layer of security for your Apple ID designed to ensure that
                    you're the only person who can access your account, even if someone knows your password.
                </p>

                <div className="details">
                    <Table celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Recovery Codes</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                recoveryCodes && recoveryCodes.map(rec => {
                                        return (
                                            <Table.Row warning>
                                                <Table.Cell>{rec}</Table.Cell>
                                            </Table.Row>
                                        )
                                    }
                                )
                            }
                            {/*<Table.Row warning>*/}
                            {/*    <Table.Cell>John</Table.Cell>*/}
                            {/*</Table.Row>*/}
                            {/*<Table.Row>*/}
                            {/*    <Table.Cell positive>Approved</Table.Cell>*/}
                            {/*</Table.Row>*/}
                            {/*<Table.Row>*/}
                            {/*    <Table.Cell negative>Denied</Table.Cell>*/}
                            {/*</Table.Row>*/}
                        </Table.Body>
                    </Table>
                    <div className="button-block">
                        <button className={"dn-button"} onClick={disableTwoFactorAuthentication}>
                            Disable two Factor Authentication
                        </button>
                    </div>

                </div>


                {/*<div className="table-responsive">*/}
                {/*    <table className="table table-bordered">*/}
                {/*        <thead>*/}
                {/*        <tr>*/}
                {/*            <th className={"table-title"}> Refectory Codes</th>*/}
                {/*        </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}


                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</div>*/}

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
