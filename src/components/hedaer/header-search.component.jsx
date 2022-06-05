import React from 'react';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import ContentLoader from "react-content-loader";
import { withTranslation } from "react-i18next";
import cookies from "js-cookie";

//search component
const HeaderSearch = ( { loading, t }) => {
    const lang = cookies.get('i18next') || "en";

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
                        <input type="text" className="form__input" placeholder={t('Search your products from here')} lang={lang} />
                        <button className="form__button">
                            <IcomoonReact iconSet={iconSet} size={25} icon="magnifying-glass"/>
                            {t('Search')}
                        </button>
                    </form>
            }

        </div>
    )
}

export default withTranslation()(HeaderSearch);