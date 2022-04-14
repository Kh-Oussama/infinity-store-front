import React from 'react';
import {animated, useSpring} from 'react-spring';

//component
import SignIn from "../sign-in/sign-in.components";
import SignUp from "../sign-up/sign-up.component";
import {createStructuredSelector} from "reselect";
import {selectFetchGroupsLoading, selectGroups} from "../../redux/group/groups.selectors";
import {selectCheckUserSessionLoading, selectCurrentUser, selectSignOutLoading} from "../../redux/auth/auth.selectors";
import {fetchGroupsStart} from "../../redux/group/groups.actions";
import {checkUserSession} from "../../redux/auth/auth.actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import TwoFactorChallenge from "../two-factore-challenge/two-factore-challenge.components";

// rendering the auth-popup with sign-up or sign-in component
const AuthPopup = ({toggleModal, showModal, currentComponent, switchComponent}) => {

    //add some animation to the auth-popup using react-spring
    const animation = useSpring({
        config: {
            duration: 350
        },
        opacity: showModal ? 1 : 0,
    });

    return (
        <>
            <>
                {showModal && (
                    <animated.div style={animation} className="modal">
                        <div onClick={() => toggleModal("sign-in")} className="overlay"/>
                        <div className="modal-content">
                            <div className="second-overlay" onClick={() => toggleModal("sign-in")}/>
                            <div className="text-content text-content-auth">

                                {/* rendering the selected auth component */}
                                {
                                    currentComponent === 'sign-in'
                                        ? <SignIn switchComponent={switchComponent}/>
                                        : currentComponent === 'sign-up'
                                            ? <SignUp switchComponent={switchComponent}/>
                                            : <TwoFactorChallenge switchComponent={switchComponent}/>
                                }
                            </div>
                        </div>
                    </animated.div>
                )}
            </>

        </>
    )
}

const mapStateToProps = createStructuredSelector({

});
const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthPopup));