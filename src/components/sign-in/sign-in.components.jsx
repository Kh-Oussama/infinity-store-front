import React from 'react';


const SignIn = () => {

    return (
        <>
            <div className="sign-in">
                <div className="logo">
                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                </div>
                <div className="title">
                    Login with your email & password
                </div>
                <div className="form">
                    <div className="input-block">
                        <label htmlFor="">Email</label>
                        <input type={"text"} />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">password</label>
                        <input type={"text"} />
                    </div>
                    <button className={"submit-btn"}>Login</button>
                </div>
                <div className="divider"/>
                <div className="sign-in-footer">
                    Don't have any account? <span>Register</span>
                </div>
            </div>
        </>
    )
}

export default SignIn;