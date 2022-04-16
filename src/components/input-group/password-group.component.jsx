import React, { useState } from "react";

const PasswordGroup = ({label, name, value, onChange}) => {
    const [displayPassword, setDisplayPassword] = useState(false);

    const toggleIcon = _ => {
        console.log(displayPassword);
        setDisplayPassword(!displayPassword);
    }

    return (
        <div className="password-group">
            <label>{label}</label>
            <div className="input-ct">
                <span onClick={toggleIcon}><i className={!displayPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"}></i></span>
                <input type={`${!displayPassword?'password':"text"}`} name={name} value={value} onChange={onChange} />
            </div>
        </div>
    );
}

export default PasswordGroup;