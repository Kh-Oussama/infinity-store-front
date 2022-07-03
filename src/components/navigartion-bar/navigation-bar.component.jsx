import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

//components
import DropdownButton from "../utils/dropdown-button/dropdown-button.component";
import AuthPopup from "../auth-popup/auth-popup-component";
import NavLink from "./navLink.component";

//redux utils
import {switchAuthComponent, toggleAuthComponent} from "../../redux/design-utilites/design-utilities.actions";
import {
    selectAuthComponentHidden,
    selectCurrentAuthComponent
} from "../../redux/design-utilites/design-utilities.selectors";
import NavigationBarLoader from "./navigation-bar-loader.component";
import {selectGroups} from "../../redux/group/groups.selectors";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import ProfileDropdown from "./profile-dropdown.component";
import NavSearchBar from "./navigation-bar-search.component";
import LanguageDropdown from '../utils/language-dropdown/language-dropdown.component';
import { compose } from 'redux';
import { withTranslation } from "react-i18next";

//this is component for the navigation bar
const NavigationBar = ({
                           toggleAuthComponent,
                           loading,
                           currentComponent,
                           authComponentHidden,
                           switchAuthComponent,
                           currentUser,
                           t
                       }) => {

    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

        //Function to hide menu
    const hideRightMenu = _ => {
        let sideMenu = document.querySelector('.navigation-bar .nav-right');
        sideMenu.classList.remove('active');
    }

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
                {
                    loading
                        ? <NavigationBarLoader/>
                        : <>
                            <div className="nav-left">

                                <Link to={'/'}>
                                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                                </Link>

                                {/* this is for the select dropdown button*/}
                                <DropdownButton/>
                            </div>
                            <div className="nav-center"/>
                            <div className="nav-right">
                                {/* Displaying only in responsive */}
                                <div className="brand-side-menu">
                                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo"/>
                                    <span className="fa-solid fa-xmark" onClick={hideRightMenu}></span>
                                </div>

                                {/*the right nav links*/}
                                <NavLink path={"/shops"} text={"Shops"} />
                                <NavLink path={"/"} text={"Offers"}/>
                                <NavLink path={"/help"} text={"FAQ"}/>
                                <NavLink path={"/contact"} text={"Contact"}/>

                                {/* Language DropDown */}
                                <LanguageDropdown />

                                {/*join button*/}
                                <div className="nav-link join-btn" onClick={() => toggleAuthComponent("sign-in")}>
                                    <Link to={"#"}>
                                        {t('Become a seller')}
                                    </Link>
                                </div>
                                {
                                    currentUser
                                        ? <div className={"nav-user-dropdown"}
                                               onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                                            <img src="/user.png" alt="user"/>
                                            <ProfileDropdown showProfileDropdown={showProfileDropdown}/>

                                        </div>
                                        : <div className="nav-link join-btn" onClick={() => toggleAuthComponent("sign-in")}>
                                            <Link to={"#"}>
                                                {t('join')}
                                            </Link>

                                        </div>

                                }


                            </div>
                            {/* Search bar in responsive */}
                            <NavSearchBar />
                        </>
                }

            </div>
        </>
    )
}


const mapStateToProps = createStructuredSelector({

    //get the selected component from the redux
    currentComponent: selectCurrentAuthComponent,
    //get the auth popup view state
    authComponentHidden: selectAuthComponentHidden,
    //get all groups with categories and Sub-categories
    groups: selectGroups,
    //get current user
    currentUser: selectCurrentUser,


});

const mapDispatchToProps = dispatch => ({

    //change the auth popup view state
    toggleAuthComponent: current_component => dispatch(toggleAuthComponent(current_component)),
    //switch between sign-in and sign-up component
    switchAuthComponent: current_component => dispatch(switchAuthComponent(current_component)),

});

export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(NavigationBar);