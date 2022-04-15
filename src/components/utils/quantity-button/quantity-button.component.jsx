import React from "react";


const QuantityButton = ({quantity, add, minus}) => {
    return (
        <div className="qty-btn">
            <span onClick={minus}><i className="fa-solid fa-chevron-left"></i></span>
            <span>{quantity}</span>
            <span onClick={add}><i className="fa-solid fa-chevron-right"></i></span>
        </div>
    );
}

export default QuantityButton;