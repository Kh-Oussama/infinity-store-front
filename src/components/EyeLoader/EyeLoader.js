import React from "react";


const EyeLoader = ({active}) => {
    return (
        <div className={`eye-loader ${active}`}>
            <div className="big-eye">
                <div className="small-eye"/>
            </div>
        </div>
    );
}

export default EyeLoader;