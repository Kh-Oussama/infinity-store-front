import React, {useEffect, useState} from "react";
import {Link, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import {redirectToCheckout} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import CheckoutTable from "./checkout-table.component";
import {Message} from "semantic-ui-react";
import NoResult from "../no-result/no-result.component";

const Checkout = ({redirectToCheckoutPage, total, cartItems, removeItem, clearItem, addItem, currentUser, history}) => {

    const [confirmOrder, setConfirmOrder] = useState(false);

    useEffect(() => {
        redirectToCheckoutPage(false);
    })

    const handleConfirmOrder = () => {
        setConfirmOrder(true);
        if (currentUser.addresses.length > 0 ) history.push("/dashboard/place-order");
    };

    console.log(currentUser.addresses.length <= 0);

    return (
        <div className="checkout">
            <div className="card checkout-cart">
                <div className="title">
                    <h1>Checkout Cart</h1>
                    <p>Currently you have {cartItems.length} item(s) in your cart.</p>
                </div>

                {
                    cartItems.length > 0
                        ? <>
                            <CheckoutTable data={cartItems} addItem={addItem} removeItem={removeItem} clearItem={clearItem}
                                           total={total}/>

                            {
                                !currentUser.address && confirmOrder &&
                                <Message error attached='bottom' className={"description description-info"}>
                                    <i className="fa-solid fa-check-double"/> Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Accusantium architecto assumenda atque autem consequuntur dolore dolorum
                                    eum ex, hic iure laudantium nemo pariatur perspiciatis quia quod repellat rerum unde ut.
                                </Message>

                            }
                            <div className="actions">
                                <Link className="action"  to="/">
                                    <i className="fa-solid fa-cart-plus"/>
                                    Continue shopping
                                </Link>

                                <div className={"confirm-buttons"}>
                                    {
                                        currentUser.addresses.length <= 0 && confirmOrder &&
                                        <span className="action red" onClick={() => history.push("/dashboard")}>
                                    <i className="fa-solid fa-map-location-dot"/>
                                    Add your Address
                                     </span>
                                    }
                                    <span className={`action ${ currentUser.addresses.length <= 0 && confirmOrder ? 'button-disabled' : null} `} onClick={() => handleConfirmOrder()}>
                                    <i className="fa-solid fa-clipboard-check"/>
                                     Place Order
                                    </span>
                                </div>

                            </div>
                        </>
                        : <NoResult/>
                }

            </div>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser,
});


const mapDispatchToProps = dispatch => ({
    redirectToCheckoutPage: current_state => dispatch(redirectToCheckout(current_state)),

    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));