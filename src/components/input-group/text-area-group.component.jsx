import React from "react";
import cookies from "js-cookie";

const TextAreaGroup = ({label, name, type, value, onChange}) => {
    const lang = cookies.get('i18next') || "en";
    return (
        <div lang={lang} className="input-group">
            <label>{label}</label>
            <textarea name={name} value={value} onChange={onChange} ></textarea>
        </div>
    );
}

export default TextAreaGroup;