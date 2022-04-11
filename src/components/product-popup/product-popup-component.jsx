import React from 'react';
import {animated, useSpring} from 'react-spring';
import ViewProduct from "../view-product/view-product.component";
import CloseIcon from "../icons/close-icon.component";


const ProductPopup = ({toggleModal, showModal, product}) => {

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
                                <div className="rightBlock vb-close" onClick={() => toggleModal()}>
                                    <CloseIcon/>
                                </div>
                                <ViewProduct product={product} />
                            </div>
                        </div>
                    </animated.div>
                )}
            </>

        </>
    )
}

export default ProductPopup;