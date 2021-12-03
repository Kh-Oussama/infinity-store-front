import React from 'react';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";

//search component
const HeaderSearch = () => {
    return(
        <div className="search-form">
            <form action="#" className="form">
                <input type="text" className="form__input" placeholder="Search your products from here"/>
                <button className="form__button">
                    <IcomoonReact iconSet={iconSet} size={25} icon="magnifying-glass"/>
                    Search
                </button>
            </form>
        </div>
    )
}

export default HeaderSearch;