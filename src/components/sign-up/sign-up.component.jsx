import React from 'react';

//this is component for the sign-up form
const SignUp = ({ switchComponent }) => {

    return (
        <>
            <div className="sign-in">
                <div className="logo">
                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                </div>
                <div className="title">
                    By signing up, you agree to ourterms & policy

                </div>
                <div className="form">
                    <div className="input-block">
                        <label htmlFor="">Name</label>
                        <input type={"text"} />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Email</label>
                        <input type={"text"} />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">password</label>
                        <input type={"text"} />
                    </div>
                    <button className={"submit-btn"}>Register</button>
                </div>
                <div className="divider"/>
                <div className="sign-in-footer">
                    Already have an account? <span onClick={() => switchComponent("sign-in")} >Login</span>
                </div>
            </div>
        </>
    )
}

export default SignUp;