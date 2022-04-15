import React from 'react';

//component
import {createStructuredSelector} from "reselect";
import {selectGroups} from "../../../redux/group/groups.selectors";
import {selectCurrentUser} from "../../../redux/auth/auth.selectors";
import {connect} from "react-redux";
import {
    selectAuthComponentHidden,
    selectCurrentAuthComponent
} from "../../../redux/design-utilites/design-utilities.selectors";
import {switchAuthComponent, toggleAuthComponent} from "../../../redux/design-utilites/design-utilities.actions";
import SignIn from "../../../components/Auth/sign-in/sign-in.components";
import SignUp from "../../../components/Auth/sign-up/sign-up.component";
import TwoFactorChallenge from "../../../components/Auth/two-factore-challenge/two-factore-challenge.components";

// rendering the auth-popup with sign-up or sign-in component
const AuthPage = ({currentComponent, switchAuthComponent, history}) => {


    return (
        <>
            <>
                <div className="modal">
                    <div className="overlay"/>
                    <div className="modal-content">
                        <div className="second-overlay"/>
                        <div className="text-content text-content-auth">
                            <div className={"home-icon"} onClick={() => history.push("/")}>
                                <i className="fa-solid fa-house-chimney"/>
                            </div>
                            {/* rendering the selected auth component */}
                            {
                                currentComponent === 'sign-in'
                                    ? <SignIn switchComponent={switchAuthComponent}/>
                                    : currentComponent === 'sign-up'
                                        ? <SignUp switchComponent={switchAuthComponent}/>
                                        : <TwoFactorChallenge switchComponent={switchAuthComponent}/>
                            }
                        </div>
                    </div>
                </div>

            </>

        </>
    )
}

const mapStateToProps = createStructuredSelector({

    //get the selected component from the redux
    currentComponent: selectCurrentAuthComponent,
    //get current user
    currentUser: selectCurrentUser,


});

const mapDispatchToProps = dispatch => ({
   //switch between sign-in and sign-up component
    switchAuthComponent: current_component => dispatch(switchAuthComponent(current_component)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);