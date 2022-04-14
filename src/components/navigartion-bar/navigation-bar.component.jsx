import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

//components
import DropdownButton from "../utils/dropdown-button/dropdown-button.component";
import AuthPopup from "../auth-popup/product-popup-component";
import {NavLink} from "./navLink.component";

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

//this is component for the navigation bar
const NavigationBar = ({
                           toggleAuthComponent,
                           loading,
                           currentComponent,
                           authComponentHidden,
                           switchAuthComponent,
                           currentUser
                       }) => {

    const [showProfileDropdown, setShowProfileDropdown] = useState(false);


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
                                {/*the right nav links*/}
                                <NavLink path={"/shops"} text={"Shops"}/>
                                <NavLink path={"/"} text={"Offers"}/>
                                <NavLink path={"/help"} text={"FAQ"}/>
                                <NavLink path={"/contact"} text={"Contact"}/>

                                {/*join button*/}
                                <div className="nav-link join-btn" onClick={() => toggleAuthComponent("sign-in")}>
                                    <Link to={"#"}>
                                        Become a seller
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
                                                join
                                            </Link>

                                        </div>

                                }


                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
