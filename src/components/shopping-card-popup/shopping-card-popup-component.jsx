import React from 'react';
import {animated, useSpring} from 'react-spring';
import ShoppingCardDetails from "../shoping-card-details/shoping-card-details.componenet";

//component

// rendering the auth-popup with sign-up or sign-in component
const ShoppingCardPopup = ({toggleModal, showModal}) => {

    //add some animation to the auth-popup using react-spring
    const animation = useSpring({
        config: {
            duration: 350
        },
        opacity: showModal ? 1 : 0,
    });

    const animationRight = useSpring({
        config: {
            duration: 150
        },
        marginRight: showModal ? 0 : -500,
    });

    return (
        <>
            <>
                {showModal && (
                    <animated.div style={animation} className="modal">
                        <div onClick={() => toggleModal("sign-in")} className="overlay"/>
                        <div className="modal-content modal-content-shopping-card">
                            <div className="second-overlay" onClick={() => toggleModal("sign-in")}/>
                            <animated.div style={animationRight} className="text-content text-content-shopping-card">
                                <ShoppingCardDetails toggleModal={toggleModal} showModal={showModal}/>
                            </animated.div>
                        </div>
                    </animated.div>
                )}
            </>

        </>
    )
}

export default ShoppingCardPopup;