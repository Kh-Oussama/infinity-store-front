import React from 'react';
import {createStructuredSelector} from "reselect";
import {selectRecoveryCodes, selectRecoveryCodesError} from "../../redux/auth/auth.selectors";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { Table } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import cookies from "js-cookie";

const DisableTwoFactorComponent = ({qrCode, recoveryCodes, disableTwoFactorAuthentication, t}) => {
    const lang = cookies.get('i18next') || "en";
    console.log(qrCode)
    return (
        <div className="dashboard-content-card">
            <div className="content" lang={lang}>
                <h1 className="title" lang={lang}>{t('Two factors authentication')}</h1>
                {qrCode &&
                    <p className="description" >
                        {t("Scan the qr code below with an authenticator application, such as Google Authenticator on your phone.")}
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
                    {t('Hi')} Ousssama,<br/>
                    {t("Two-factor authentication is an extra layer of security for your Apple ID designed to ensure that you're the only person who can access your account, even if someone knows your password.")}
                </p>

                <div className="details">
                    <Table celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>{t("Recovery Codes")}</Table.HeaderCell>
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
                            <i className="fa-solid fa-lock-open"/> {t("Disable two Factor Authentication")}
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

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(DisableTwoFactorComponent)));
