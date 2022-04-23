import React from 'react';
import ResetPassword from "../../../components/Auth/reset-password/reset-password.component";
import {withRouter} from "react-router-dom";

const ResetPasswordPage = ({history}) => {

    return (
        <>
            <div className="modal">
                <div className="overlay"/>
                <div className="modal-content">
                    <div className="second-overlay"/>
                    <div className="text-content text-content-auth">
                        <div className={"home-icon"} onClick={() => history.push("/")}>
                            <i className="fa-solid fa-house-chimney"/>
                        </div>
                        <ResetPassword/>
                    </div>
                </div>
            </div>

    </>)

}

export default withRouter(ResetPasswordPage);

