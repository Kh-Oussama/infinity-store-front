import React, {useEffect, useState} from 'react';
import IcomoonReact from "icomoon-react";

//icons
import iconSet from "../../../selection.json";

//components
import GroceryIcon from "../../icons/grocery";
import {createStructuredSelector} from "reselect";
import {selectGroups} from "../../../redux/group/groups.selectors";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


//  this is for the select dropdown button
const DropdownButton = ({ groups, history, match }) => {

    //show the dropdown state
    const [isOpen, setIsOpen] = useState(false);

    //selected group
    const [selectedGroup, setSelectedGroup] = useState(null);

    useEffect(() => {
        setSelectedGroup( match.params.group);
    }, [match.params.group]);

    return (
        <>
            <label className="dropdown">
                <div className="dd-button" onClick={() => setIsOpen(!isOpen)}>
                    <GroceryIcon/>
                    <span>{selectedGroup}</span>
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
                                <li  key={group.id} onClick={() => {
                                    history.push(`/${group.name}`);
                                    setIsOpen(!isOpen);
                                    setSelectedGroup(group.name);
                                }} >
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

export default withRouter(connect(mapStateToProps, null)(DropdownButton));
