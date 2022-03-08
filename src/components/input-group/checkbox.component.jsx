import React from "react";

const CheckBox = ({label, isChecked, onClick}) => {
    return (
        <div className={`checkbox ${isChecked?'active':''}`} onClick={onClick}>
        <span></span>
        <span>{label}</span>
    </div>
    );
}   

export default CheckBox;