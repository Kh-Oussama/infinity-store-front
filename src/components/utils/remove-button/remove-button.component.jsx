import React from "react";

const RemoveButton = ({remove}) => {
    return (
        <div className="remove-btn" onClick={remove}>
            <span><i className="fa-solid fa-trash-can"></i></span>
            <span>Remove</span>
        </div>
    );
}

export default RemoveButton;