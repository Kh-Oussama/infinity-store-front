import React, { useEffect, useState } from "react";

const PasswordGroup = ({label, name, value, onChange}) => {
    const [displayPassword, setDisplayPassword] = useState(false);

    return (
        <div className="password-group">
            <label>{label}</label>
            <div className="input-ct">
                <span onClick={() => setDisplayPassword(!displayPassword)}>
                    <i className={!displayPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"}></i>
                </span>
                <input type={`${!displayPassword?'password':"text"}`} name={name} value={value} onChange={onChange} />
            </div>
        </div>
    );
}

export default PasswordGroup;