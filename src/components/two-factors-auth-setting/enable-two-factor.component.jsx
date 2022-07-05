import React from 'react';
import { withTranslation } from 'react-i18next';
import cookies from "js-cookie";

const EnableTwoFactorComponent = ({enableTwoFactorAuthentication, t}) => {
    const lang = cookies.get('i18next') || "en";

    return (
        <div className="update-password email-verification-block">
            <div className="form-ct email-verification-block">
                <h1 className={"title"} lang={lang}>{t('Infinity Store Team')}</h1>
                <p className={"description"} lang={lang}>
                    {t('Hi')} Ousssama,<br/>
                    {t("Two-factor authentication is an extra layer of security for your Apple ID designed to ensure that you're the only person who can access your account, even if someone knows your password.")}</p>
                <div className="button-block">
                    <button onClick={enableTwoFactorAuthentication}>
                        <i className="fa-solid fa-lock"/> {t('Enable two Factor Authentication')}
                    </button>
                </div>
                <p className={"description"}>
                    {(t("After you turn on 2-Step Verification, you'll need to complete a second step to verify it's you when you sign in."))}
                </p>
            </div>
        </div>

    )
}
export default withTranslation()(EnableTwoFactorComponent);