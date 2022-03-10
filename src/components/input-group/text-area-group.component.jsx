import React from "react";

const TextAreaGroup = ({label, name, type, value, onChange}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <textarea name={name} value={value} onChange={onChange} ></textarea>
        </div>
    );
}

export default TextAreaGroup;