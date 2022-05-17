import React from 'react';

//components
import ShopCard from "../shop-card/shop-card.component";
import HeaderSearch from "./header-search.component";
import ContentLoader from "react-content-loader";

//this the header component for the homepage
const Header = ({group}) => {

    return (
        <>
            <header className="header"
            >
                <div className={"cover-block"} style={{
                    backgroundImage: "url(" + "/images/cover-2.webp" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    {/*<img src="/images/cover-1.webp" alt="cover"/>*/}
                </div>

                <div className="content" style={{width: '80rem'}}>
                    <h1 className="title">
                        {
                            group?.banner_title
                        }
                    </h1>
                    <h3 className="subtitle">
                        {
                            group?.banner_description
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

export default Header