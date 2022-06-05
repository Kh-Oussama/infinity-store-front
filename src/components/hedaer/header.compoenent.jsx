import React from 'react';

//components
import ShopCard from "../shop-card/shop-card.component";
import HeaderSearch from "./header-search.component";
import { withTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";

//this the header component for the homepage
const Header = ({group, t}) => {

    return (
        <>
            <header className="header">
                <div className="content" style={{width: '80rem'}}>
                    <h1 className="title">
                        {
                            t(group?.banner_title)
                        }
                    </h1>
                    <h3 className="subtitle">
                        {
                            t(group?.banner_description)
                        }

                    </h3>
                    {/* search component*/}
                    <HeaderSearch />
                </div>

                {/*the left shopping card*/}
                <ShopCard />
            </header>
        </>
    )
}

export default withTranslation()(Header);