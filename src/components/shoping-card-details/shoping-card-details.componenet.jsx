import React from 'react';
import ShoppingBagIcon from "../icons/shopingBag";
import CloseIcon from "../icons/close-icon.component";
import ShoppingCardItem from "../shopping-card-item/shopping-card-item.component";
import {createStructuredSelector} from "reselect";
import {selectShopCard} from "../../redux/design-utilites/design-utilities.selectors";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {toggleShopCard} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import EmptyCardIcon from "../icons/SadFaceIcon";


const ShoppingCardDetails = ({ showModal, toggleModal,cartItems, history, total}) => {

    return (
        <>
            <div className="shopping-card-details">
                <div className="topBlock">
                    <div className="leftBlock">
                        <ShoppingBagIcon/>
                        <span className="count-number">
                            {cartItems.length}
                        </span>
                        <span>Item</span>
                    </div>
                    <div className="rightBlock" onClick={() => toggleModal()}>
                        <CloseIcon/>
                    </div>
                </div>
                <div className="divider"/>
                <div className="contentBlock">

                    {
                        cartItems.length
                            ?  <div className="items">
                                {
                                    cartItems.map(cartItem => (
                                        <ShoppingCardItem key={cartItem.id} item={cartItem}  />
                                    ))
                                }
                                </div>
                            : <>
                                <EmptyCardIcon/>
                                <h1>No products found</h1>
                            </>
                    }

                </div>
                <div className="bottomBlock">
                    <div className="checkoutButton">
                        <div className="text">Checkout</div>
                        <div className="totalPrice">{total} DA</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal,
});


const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardDetails);