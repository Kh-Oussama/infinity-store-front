import React, {useState} from 'react';
import IcomoonReact from "icomoon-react";

//icons
import iconSet from "../../../selection.json";

//components
import GroceryIcon from "../../icons/grocery";
import {createStructuredSelector} from "reselect";
import {selectGroups} from "../../../redux/group/groups.selectors";
import {connect} from "react-redux";


//  this is for the select dropdown button
const DropdownButton = ({ groups }) => {

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
                    {
                        groups.map(group => {
                            return (
                                <li>
                                    <GroceryIcon/>
                                    <span>{group.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </label>
        </>
    )
}


const mapStateToProps = createStructuredSelector({

    //get all groups with categories and Sub-categories
    groups: selectGroups,


});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, null)(DropdownButton);
