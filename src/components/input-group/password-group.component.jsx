import React, { useEffect, useState } from "react";
import cookies from "js-cookie";

const PasswordGroup = ({label, name, value, onChange}) => {
    const lang = cookies.get('i18next') || "en";
    const [displayPassword, setDisplayPassword] = useState(false);

    return (
        <div className="password-group" lang={lang}>
            <label>{label}</label>
            <div className="input-ct">
                <span onClick={() => setDisplayPassword(!displayPassword)}>
                    <i className={displayPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"}></i>
                </span>
                <input type={`${!displayPassword?'password':"text"}`} name={name} value={value} onChange={onChange} />
            </div>
        </div>
    );
}

export default PasswordGroup;