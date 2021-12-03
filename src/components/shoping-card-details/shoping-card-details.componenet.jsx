import React from 'react';
import ShoppingBagIcon from "../icons/shopingBag";
import CloseIcon from "../icons/close-icon.component";
import ShoppingCardItem from "../shopping-card-item/shopping-card-item.component";


const ShoppingCardDetails = ({ showModal, toggleModal}) => {

    return (
        <>
            <div className="shopping-card-details">
                <div className="topBlock">
                    <div className="leftBlock">
                        <ShoppingBagIcon/>
                        <span className="count-number">
                            0
                        </span>
                        <span>Item</span>
                    </div>
                    <div className="rightBlock" onClick={() => toggleModal()}>
                        <CloseIcon/>
                    </div>
                </div>
                <div className="divider"/>
                <div className="contentBlock">
                    {/*<EmptyCardIcon/>*/}
                    {/*<h1>No products found</h1>*/}
                    <div className="items">
                        <ShoppingCardItem/>
                    </div>
                </div>
                <div className="bottomBlock">
                    <div className="checkoutButton">
                        <div className="text">Checkout</div>
                        <div className="totalPrice">$35.00</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCardDetails;