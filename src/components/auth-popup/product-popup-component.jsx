import React from 'react';
import { animated, useSpring } from 'react-spring';

//component
import SignIn from "../sign-in/sign-in.components";
import SignUp from "../sign-up/sign-up.component";

// rendering the auth-popup with sign-up or sign-in component
const AuthPopup = ({ toggleModal, showModal, currentComponent, switchComponent }) => {

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
                        <div onClick={() => toggleModal("sign-in")} className="overlay" />
                        <div className="modal-content">
                            <div className="second-overlay" onClick={() => toggleModal("sign-in")} />
                            <div className="text-content text-content-auth">

                                    {/* rendering the selected auth component */}
                                    {
                                        currentComponent === 'sign-in'
                                            ? <SignIn switchComponent={switchComponent} />
                                            : <SignUp switchComponent={switchComponent} />
                                    }

                            </div>
                        </div>
                    </animated.div>
                )}
            </>

        </>
    )
}

export default AuthPopup;