import React from 'react';
import {animated, useSpring} from 'react-spring';
import ViewProduct from "../view-product/view-product.component";


const ProductPopup = ({toggleModal, showModal}) => {

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
                            <div className="text-content">
                                <ViewProduct/>
                            </div>
                        </div>
                    </animated.div>
                )}
            </>

        </>
    )
}

export default ProductPopup;