import React, { useState } from "react";
import PasswordGroup from "../input-group/password-group.component";

const UpdatePassword = () => {
    const [credentials, setCredentials] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const {oldPassword, newPassword, confirmPassword} = credentials;

    const handelChange = e => {
        let event = e.target;
        setCredentials({
            ...credentials,
            [event.name]: event.value,
        });
    }

    return (
        <div className="update-password">
            <div className="form-ct">
                <form>
                    <p>Change Password</p>

                    <PasswordGroup label="Old password" name="oldPassword" value={oldPassword} onChange={handelChange} />
                    <PasswordGroup label="New password" name="newPassword" value={newPassword} onChange={handelChange} />
                    <PasswordGroup label="Confirm password" name="confirmPassword" value={confirmPassword} onChange={handelChange} />

                    <div className="submit-ct">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdatePassword;