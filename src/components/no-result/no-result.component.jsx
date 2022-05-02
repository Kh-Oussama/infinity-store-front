import React from "react";
import image from "./../../images/no-result.svg";

const NoResult = () => {
    return (
        <div className="no-result">
            <img src={image} alt="No result" />
        </div>
    );
}

export default NoResult;