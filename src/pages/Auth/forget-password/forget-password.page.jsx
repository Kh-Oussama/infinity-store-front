import React from 'react';
import ForgetPassword from "../../../components/Auth/forget-password/forget-password.component";
import {withRouter} from "react-router-dom";

const ForgetPasswordPage = ({history}) => {


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
                        <ForgetPassword/>
                    </div>
                </div>
            </div>
        </>
    )

}


export default withRouter(ForgetPasswordPage);

