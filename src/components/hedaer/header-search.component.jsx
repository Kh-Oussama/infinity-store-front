import React from 'react';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import ContentLoader from "react-content-loader";

//search component
const HeaderSearch = ( { loading }) => {
    return(
        <div className="search-form">

            {
                loading
                ?   <ContentLoader
                        speed={3}
                        width={"100%"}
                        height={50}
                        viewBox="0 0 100% 656"
                        backgroundColor="#f2f2f2"
                        foregroundColor="#e1e1e1"
                    >
                        <rect x="0" y="0%" rx="3" ry="3" width="100%" height="50" />
                    </ContentLoader>
                    : <form action="#" className="form">
                        <input type="text" className="form__input" placeholder="Search your products from here"/>
                        <button className="form__button">
                            <IcomoonReact iconSet={iconSet} size={25} icon="magnifying-glass"/>
                            Search
                        </button>
                    </form>
            }

        </div>
    )
}

export default HeaderSearch;