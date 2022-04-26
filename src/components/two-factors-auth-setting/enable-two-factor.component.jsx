import React from 'react';

const EnableTwoFactorComponent = ({enableTwoFactorAuthentication}) => {
    return (
        <div className="update-password email-verification-block">
            <div className="form-ct email-verification-block">
                <h1 className={"title"}>Infinity Store Team</h1>
                <p className={"description"}>
                    Hi Ousssama,<br/>
                    Two-factor authentication is an extra layer of security for your Apple ID designed to ensure that
                    you're the only person who can access your account, even if someone knows your password. </p>
                <div className="button-block">
                    <button onClick={enableTwoFactorAuthentication}>
                        <i className="fa-solid fa-lock"/> Enable two Factor Authentication
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
export default EnableTwoFactorComponent;