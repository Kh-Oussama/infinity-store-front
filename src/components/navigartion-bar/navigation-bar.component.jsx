import React from 'react';
import {Link} from "react-router-dom";
import DropdownButton from "../utils/dropdown-button/dropdown-button.component";


const NavigationBar = () => {
    return (
        <>
            <div className={"navigation-bar"}>
                <div className="nav-left">
                    <Link to={'/'}>
                        <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                    </Link>
                    <DropdownButton/>
                </div>
                <div className="nav-center"></div>
                <div className="nav-right">
                    <div className="nav-link">
                        <Link to={"/"}>
                           Shops
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to={"/"}>
                           Offers
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to={"/"}>
                            FAQ
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to={"/"}>
                            Contact
                        </Link>
                    </div>
                    <div className="nav-link join-btn">
                        <Link to={"/"}>
                          join
                        </Link>
                    </div>
                </div>
            </div>
            </>
    )
}

export default NavigationBar;