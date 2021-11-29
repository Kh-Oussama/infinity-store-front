import React, {useState} from 'react';
import IcomoonReact from "icomoon-react";

//icons
import iconSet from "../../../selection.json";

//components
import GroceryIcon from "../../icons/grocery";
import BakeryIcon from "../../icons/Bakery";
import MakeupIcon from "../../icons/makeup";
import FurnitureIcon from "../../icons/furniture";
import Handbag from "../../icons/handbag";
import DressIcon from "../../icons/dress";


//  this is for the select dropdown button
const DropdownButton = () => {
    //show the dropdown state
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <label className="dropdown">
                <div className="dd-button" onClick={() => setIsOpen(!isOpen)}>
                    <GroceryIcon/>
                    <span>Grocery</span>
                    {
                        isOpen ? <IcomoonReact iconSet={iconSet} size={25} icon="chevron-small-up"/>
                            : <IcomoonReact iconSet={iconSet} size={25} icon="chevron-small-down"/>
                    }

                </div>
                <input type="checkbox" className="dd-input" id="test"/>

                {/* list for all groups */}
                <ul className="dd-menu">
                    <li>
                        <GroceryIcon/>
                        <span>Grocery</span>
                    </li>
                    <li>
                        <BakeryIcon/>
                        <span>Bakery</span>
                    </li>
                    <li>
                        <MakeupIcon/>
                        <span>Makeup</span>
                    </li>
                    <li>
                        <FurnitureIcon/>
                        <span>Furniture</span>
                    </li>
                    <li>
                        <Handbag/>
                        <span>Bags</span>
                    </li>
                    <li>
                        <DressIcon/>
                        <span>Clothing</span>
                    </li>
                </ul>
            </label>
        </>
    )
}

export default DropdownButton;