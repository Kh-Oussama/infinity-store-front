import React, { useState } from "react";

const PasswordGroup = ({label, name, value, onChange}) => {
    const [displayPassword, setDisplayPassword] = useState(false);
    return (
        <div className="password-group">
            <label>{label}</label>
            <div className="input-ct">
                <span className={`fa-solid ${!displayPassword?'fa-eye-slash':'fa-eye'}`} onClick={() => setDisplayPassword(!displayPassword)}></span>
                <input type={`${!displayPassword?'password':"text"}`} name={name} value={value} onChange={onChange} />
            </div>
        </div>
    );
}

export default PasswordGroup;