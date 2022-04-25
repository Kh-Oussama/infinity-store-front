import React, {useEffect, useState} from "react";
import QuantityButton from "../utils/quantity-button/quantity-button.component";
import RemoveButton from "../utils/remove-button/remove-button.component";
import {Link, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import {redirectToCheckout, toggleAuthComponent} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import CheckoutTable from "./checkout-table.component";

const Checkout = ({redirectToCheckoutPage, total, cartItems, removeItem,  clearItem, addItem}) => {

    useEffect(() => {
        redirectToCheckoutPage(false);
    })

    return (
        <div className="checkout">
            <div className="card checkout-cart">
                <div className="title">
                    <h1>Checkout Cart</h1>
                    <p>Currently you have 2 item(s) in your cart.</p>
                </div>

                <CheckoutTable data={cartItems} addItem={addItem} removeItem={removeItem} clearItem={clearItem} total={total}/>

                <div className="actions">
                    <Link className="action" to="/">
                        <i className="fa-solid fa-cart-plus"/>
                        Continue shopping
                    </Link>

                    <span className="action">
                        <i className="fa-solid fa-clipboard-check"/>
                        Confirm order
                    </span>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal,
    currentUser: selectCurrentUser,
});


const mapDispatchToProps = dispatch => ({
    redirectToCheckoutPage: current_state => dispatch(redirectToCheckout(current_state)),

    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));