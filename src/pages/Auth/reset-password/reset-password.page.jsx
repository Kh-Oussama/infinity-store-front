import React from 'react';
import NavigationBar from "../../../components/navigartion-bar/navigation-bar.component";
import ResetPassword from "../../../components/Auth/reset-password/reset-password.component";

const ResetPasswordPage = () => {

    return (<>
        <NavigationBar/>
        <div className="forget-password-page">
            <ResetPassword/>
        </div>
    </>)

}


export default ResetPasswordPage;

