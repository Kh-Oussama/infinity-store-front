import React from 'react';
import ForgetPassword from "../../../components/Auth/forget-password/forget-password.component";
import NavigationBar from "../../../components/navigartion-bar/navigation-bar.component";

const ForgetPasswordPage = () => {

    return (
        <>
            <NavigationBar/>
            <div className="forget-password-page">
                <ForgetPassword/>
            </div>
        </>
    )

}


export default ForgetPasswordPage;

