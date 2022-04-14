import React from "react";


const AddressCard = ({title, text}) => {
    return (
        <div className="address-item">
            <h3>{title}</h3>
            <p>{text}</p>

            <div className="actions">
                <span className="action fa-solid fa-pen"></span>
                <span className="action fa-solid fa-xmark"></span>
            </div>
        </div>
    );
}

export default AddressCard;