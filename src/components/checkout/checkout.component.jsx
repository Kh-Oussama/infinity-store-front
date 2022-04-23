import React, {useEffect, useState} from "react";
import QuantityButton from "../utils/quantity-button/quantity-button.component";
import RemoveButton from "../utils/remove-button/remove-button.component";
import {Link, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import {redirectToCheckout, toggleAuthComponent} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";

const Checkout = ({redirectToCheckoutPage}) => {
    //Test list
    const productList = [
        {
            image: "/images/products/Apples.jpg",
            description: "Apple",
            quatntity: 10,
            price: 15,
        },
        {
            image: "/images/products/BabySpinach.jpg",
            description: "Baby Spinach",
            quatntity: 1,
            price: 66,
        },
        {
            image: "/images/products/blueberries.jpg",
            description: "blueberries",
            quatntity: 50,
            price: 18,
        },
        {
            image: "/images/products/BrusselsSprouts.jpg",
            description: "Brussels Sprouts",
            quatntity: 12,
            price: 10,
        }
    ];

    const[list , setList] = useState(productList);

    //Function to remove item from cart
    const removeItem = product => {
        let newList = list.filter(p => p !== product);
        setList(newList);
    }

    //Function to upate quatity
    const updateQuantity = (product, value) => {
        let newList = list.map(p => {
            if(p === product){
                return {
                    ...p,
                    quatntity: (p.quatntity + value >= 0)?p.quatntity + value:0,
                }
            }

            return p;
        });

        setList(newList);
    }

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

                <div className="product-table">
                    <table>
                        <tr className="th">
                            <td>Product</td>
                            <td>Description</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Remove</td>
                        </tr>

                        {list.map((p, index) => {
                            return (
                                <tr key={index} className="cart-item">
                                    <td>
                                        <img src={p.image} alt={p.description} />
                                    </td>
                                    <td>
                                        <p>{p.description}</p>
                                    </td>
                                    <td>
                                        <QuantityButton quantity={p.quatntity} add={() => updateQuantity(p, 1)} minus={() => updateQuantity(p, -1)} />
                                    </td>
                                    <td>
                                        <p>{p.price}$</p>
                                    </td>
                                    <td>
                                        <RemoveButton remove={() => removeItem(p)}/>
                                    </td>
                                </tr>
                            );
                        })}

                    </table>
                </div>

                <div className="total-ct">
                    <p>Total price</p>
                    <p>59.99$</p>
                </div>

                <div className="actions">
                    <Link className="action" to="/">Continue shopping</Link>

                    <span className="action">Confirm order</span>
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
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));