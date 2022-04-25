import React from "react";


const QuantityButton = ({quantity, add, minus}) => {
    return (
        <div className="qty-btn">
            <div onClick={minus}><i className="fa-solid fa-chevron-left"/></div>
            <div>{quantity}</div>
            <div onClick={add}><i className="fa-solid fa-chevron-right"/></div>
        </div>
    );
}

export default QuantityButton;