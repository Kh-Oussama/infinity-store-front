import React from "react";

const InputGroup = ({label, name, type, value, onChange, disabled}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} disabled={disabled} />
        </div>
    );
}

export default InputGroup;