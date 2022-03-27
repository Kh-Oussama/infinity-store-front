import React from 'react';

//components
import ShopCard from "../shop-card/shop-card.component";
import HeaderSearch from "./header-search.component";
import ContentLoader from "react-content-loader";

//this the header component for the homepage
const Header = ({loading}) => {

    return (
        <>
            <header className="header">
                <div className="content" style={{width: '80rem'}}>
                    <h1 className="title">

                        {
                            loading
                                ? <ContentLoader
                                    speed={3}
                                    width={"100%"}
                                    height={50}
                                    viewBox="0 0 100% 656"
                                    backgroundColor="#f2f2f2"
                                    foregroundColor="#e1e1e1"
                                >
                                    <rect x="2.5%" y="0" rx="3" ry="3" width="95%" height="50"/>
                                </ContentLoader>
                                : <>
                                    Groceries Delivered in 90 Minute
                                </>
                        }
                    </h1>
                    <h3 className="subtitle">
                        {
                            loading
                                ?  <ContentLoader
                                    speed={3}
                                    width={"100%"}
                                    height={35}
                                    viewBox="0 0 100% 656"
                                    backgroundColor="#f2f2f2"
                                    foregroundColor="#e1e1e1"
                                >
                                    <rect x="10%" y="0%" rx="3" ry="3" width="80%" height="25"/>
                                </ContentLoader>
                                : <>
                                    Get your healthy foods & snacks delivered at your doorsteps all day everyday
                                </>
                        }

                    </h3>
                    {/* search component*/}
                    <HeaderSearch loading={loading} />
                </div>

                {/*the left shopping card*/}
                <ShopCard loading={loading}/>
            </header>
        </>
    )
}

export default Header