import React from 'react';

//components
import ShoppingBagIcon from "../icons/shopingBag";
import ShoppingCardPopup from "../shopping-card-popup/shopping-card-popup-component";
import ContentLoader from "react-content-loader";
import {createStructuredSelector} from "reselect";
import {selectShopCard} from "./../../redux/design-utilites/design-utilities.selectors";
import {toggleShopCard} from "./../../redux/design-utilites/design-utilities.actions";
import { connect } from 'react-redux';
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";


//the left shopping card component
const ShopCard = ({loading, shopCardDisplayed, toggleShopCard,cartItems, history, total}) => {

    const toggleModal = () => {
        toggleShopCard(!shopCardDisplayed);
        if (!shopCardDisplayed)  document.body.style.overflow = 'hidden';
        else  document.body.style.overflow = 'unset';
    };

    return (
        <>
            <ShoppingCardPopup toggleModal={toggleModal} showModal={shopCardDisplayed}/>
            <div className="shop-card" style={{backgroundColor: loading ?'transparent' : null}} onClick={() => toggleModal()}>
                            <div className="items-count">
                                {/*this is for the icon*/}
                                <ShoppingBagIcon/>

                                <div className="count-number">{cartItems.length}</div>
                                <div className={"items"}>Item</div>
                            </div>
                            <div className="total">
                                {total} DA
                            </div>
            </div>
        </>
    )
}


const mapStateToProps = createStructuredSelector({
    shopCardDisplayed: selectShopCard,
    cartItems: selectCartItems,
    total : selectCartTotal,
});


const mapDispatchToProps = dispatch => ({
    toggleShopCard: current_state => dispatch(toggleShopCard(current_state)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopCard);