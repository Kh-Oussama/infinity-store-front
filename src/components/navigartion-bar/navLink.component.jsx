import React from 'react';
import {Link} from "react-router-dom";
import { withTranslation } from "react-i18next";
import cookies from "js-cookie";

//left nav link component
const NavLink = ({ path, text, t}) => {
    const lang = cookies.get('i18next') || "en";

    return (
    <div className="nav-link">
        <Link to={path} lang={lang}>
            {t(text)}
        </Link>
    </div>);
}
export default withTranslation()(NavLink);