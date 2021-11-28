import React from 'react';
import {animated, useSpring} from 'react-spring';
import SignIn from "../sign-in/sign-in.components";
import SignUp from "../sign-up/sign-up.component";


const AuthPopup = ({toggleModal, showModal}) => {

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
                        <div onClick={toggleModal} className="overlay"/>
                        <div className="modal-content">
                            <div className="second-overlay" onClick={toggleModal}/>
                            <div className="text-content text-content-auth">
                            {/*<SignUp/>*/}
                            <SignIn/>
                            </div>
                        </div>
                    </animated.div>
                )}
            </>

        </>
    )
}

export default AuthPopup;