import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

//components
import DropdownButton from "../utils/dropdown-button/dropdown-button.component";
import AuthPopup from "../sign-popup/product-popup-component";
import {NavLink} from "./navLink.component";

//redux utils
import {switchAuthComponent, toggleAuthComponent} from "../../redux/design-utilites/design-utilities.actions";
import {
    selectAuthComponentHidden,
    selectCurrentAuthComponent
} from "../../redux/design-utilites/design-utilities.selectors";

//this is component for the navigation bar
const NavigationBar = ({toggleAuthComponent, currentComponent, authComponentHidden, switchAuthComponent}) => {


    //this for the scrollbar
    useEffect(() => {
        if (authComponentHidden) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [authComponentHidden])

    return (
        <>
            {/* rendering the auth-popup with sign-up or sign-in component */}
            <AuthPopup
                showModal={authComponentHidden}
                toggleModal={toggleAuthComponent}
                currentComponent={currentComponent}
                switchComponent={switchAuthComponent}
            />

            <div className={"navigation-bar"}>
                <div className="nav-left">

                    <Link to={'/'}>
                        <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                    </Link>

                    {/* this is for the select dropdown button*/}
                    <DropdownButton/>
                </div>
                <div className="nav-center"/>
                <div className="nav-right">
                    {/*the right nav links*/}
                    <NavLink path={"/shops"} text={"Shops"}/>
                    <NavLink path={"/"} text={"Offers"}/>
                    <NavLink path={"/help"} text={"FAQ"}/>
                    <NavLink path={"/contact"} text={"Contact"}/>

                    {/*join button*/}
                    <div className="nav-link join-btn" onClick={() => toggleAuthComponent("sign-in")}>
                        <Link to={"#"}>
                            join
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}


const mapStateToProps = createStructuredSelector({

    //get the selected component from the redux
    currentComponent: selectCurrentAuthComponent,
    //get the auth popup view state
    authComponentHidden: selectAuthComponentHidden,

});

const mapDispatchToProps = dispatch => ({

    //change the auth popup view state
    toggleAuthComponent: current_component => dispatch(toggleAuthComponent(current_component)),
    //switch between sign-in and sign-up component
    switchAuthComponent: current_component => dispatch(switchAuthComponent(current_component)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
