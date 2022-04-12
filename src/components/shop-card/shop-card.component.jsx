import React, {useEffect, useState} from 'react';

//components
import ShoppingBagIcon from "../icons/shopingBag";
import ShoppingCardPopup from "../shopping-card-popup/shopping-card-popup-component";
import {createStructuredSelector} from "reselect";
import {selectShopCard} from "./../../redux/design-utilites/design-utilities.selectors";
import {toggleShopCard} from "./../../redux/design-utilites/design-utilities.actions";
import { connect } from 'react-redux';

//the left shopping card component
const ShopCard = ({shopCardDisplayed, toggleShopCard}) => {

    const toggleModal = () => {
        toggleShopCard(!shopCardDisplayed);
        if (!shopCardDisplayed)  document.body.style.overflow = 'hidden';
        else  document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        console.log("Is changed from shop", shopCardDisplayed);
    }, [shopCardDisplayed])

    return (
        <>
            <ShoppingCardPopup toggleModal={toggleModal} showModal={shopCardDisplayed}/>
            <div className="shop-card" onClick={() => toggleModal()}>
                <div className="items-count">
                    {/*this is for the icon*/}
                    <ShoppingBagIcon/>

                    <div className="count-number">0</div>
                    <div className={"items"}>Item</div>
                </div>
                <div className="total">
                    0.00$
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    shopCardDisplayed: selectShopCard,
});


const mapDispatchToProps = dispatch => ({
    toggleShopCard: current_state => dispatch(toggleShopCard(current_state)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopCard);