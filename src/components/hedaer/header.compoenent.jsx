import React from 'react';

//components
import ShopCard from "../shop-card/shop-card.component";
import HeaderSearch from "./header-search.component";

//this the header component for the homepage
const Header = () => {

    return (
        <>
            <header className="header">
                <div className="content">
                    <h1 className="title">
                        Groceries Delivered in 90 Minute
                    </h1>
                    <h3 className="subtitle">
                        Get your healthy foods & snacks delivered at your doorsteps all day everyday
                    </h3>
                    {/* search component*/}
                    <HeaderSearch/>
                </div>

                {/*the left shopping card*/}
                <ShopCard/>
            </header>
        </>
    )
}

export default Header