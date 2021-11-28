import React from 'react';
import {Link} from "react-router-dom";

export const NavLink = ({ path, text}) => (
    <div className="nav-link">
        <Link to={path}>
            {text}
        </Link>
    </div>
)
