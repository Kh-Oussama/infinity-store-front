import React from "react";
import cookies from "js-cookie";

const InputGroup = ({label, name, type, value, onChange, disabled}) => {
    const lang = cookies.get('i18next') || "en";
    return (
        <div lang={lang} className="input-group">
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} disabled={disabled} />
        </div>
    );
}

export default InputGroup;