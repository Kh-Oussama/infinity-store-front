import React, {useState} from 'react';
import {Link} from "react-router-dom";
import DropdownButton from "../utils/dropdown-button/dropdown-button.component";
import AuthPopup from "../sign-popup/product-popup-component";
import {NavLink} from "./navLink.component";


const NavigationBar = () => {
    const [modal, setModal] = useState(false);
    const [component, setComponent] = useState('sign-in');

    const toggleModal = (component) => {
        setComponent(component);
        setModal(!modal);
        if (!modal)  document.body.style.overflow = 'hidden';
        else  document.body.style.overflow = 'unset';
    };

    return (
        <>
            <AuthPopup showModal={modal} toggleModal={toggleModal} component={component} />
            <div className={"navigation-bar"}>
                <div className="nav-left">
                    <Link to={'/'}>
                        <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                    </Link>
                    <DropdownButton/>
                </div>
                <div className="nav-center"/>
                <div className="nav-right">
                    <NavLink path={"/shops"} text={"Shops"}/>
                    <NavLink path={"/"} text={"Offers"}/>
                    <NavLink path={"/help"} text={"FAQ"}/>
                    <NavLink path={"/contact"} text={"Contact"}/>
                    <div className="nav-link join-btn" onClick={() => toggleModal("sign-in")}>
                        <Link to={"#"}>
                          join
                        </Link>
                    </div>
                </div>
            </div>
            </>
    )
}

export default NavigationBar;