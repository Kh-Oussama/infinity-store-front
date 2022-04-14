import React from "react";

const InfoButton = ({icon, text, onClick}) => {
    return <button className="info-button"onClick={onClick}><i className={icon}></i> <span>{text}</span></button>;
}

export default InfoButton;