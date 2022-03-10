import React from "react";

const InputGroup = ({label, name, type, value, onChange}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} />
        </div>
    );
}

export default InputGroup;