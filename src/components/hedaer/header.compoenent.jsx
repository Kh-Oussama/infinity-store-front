import React from 'react';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import ShopCard from "../shop-card/shop-card.component";

const Header = () => {
    return (
        <>
            <header className={"header"}>
                <div className="content">
                    <h1 className="title">
                        Groceries Delivered in 90 Minute
                    </h1>
                    <h3 className="subtitle">
                        Get your healthy foods & snacks delivered at your doorsteps all day everyday
                    </h3>
                    <div className="search-form">
                        <form action="#" className="form">
                            <input type="text" className="form__input" placeholder=""/>
                            <button className="form__button">
                               <IcomoonReact iconSet={iconSet} size={25} icon="magnifying-glass"/>
                                Search
                            </button>
                        </form>
                    </div>
                </div>

                <ShopCard/>
            </header>
            </>
    )
}

export default Header