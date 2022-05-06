import React from 'react';
import {components} from "react-select";

const { Option } = components;
const WilayaOption = props => {
    return (
        <div className={"select-option"}>
            <Option {...props}>
                <div className="option-content">
                    <span className={"label-select"}>{props.data.id}</span>
                    <span className={"label-select"}>{props.data.label}</span>
                </div>
            </Option>
        </div>
)
}

export default WilayaOption;

