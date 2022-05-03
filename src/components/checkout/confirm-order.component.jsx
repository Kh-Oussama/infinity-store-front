import React, {useEffect, useState} from "react";
import {Link, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import './confirm-order.styles.scss';
import algeria from "../../images/algeria.png";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import "semantic-ui-css/components/checkbox.min.css";
import i from "styled-components/dist/styled-components-macro.esm";
import {
    selectRetrieveWilayaError,
    selectRetrieveWilayaLoading,
    selectWilayaVar
} from "../../redux/delivery/delivery.selectors";
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/components/button.min.css'

import {retrieveWilayaDetailsStart} from "../../redux/delivery/delivery.actions";
import Spinner from "../spinner/spinner.components";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";

const ConfirmOrder = ({history, currentUser, retrieveWilayaDetails, retrieveWilayaLoading, retrieveWilayaErrors, wilayaDetails, cartItems, total}) => {
    const [deliveryType, setDeliveryType] = useState(true);
    const [selectedWilaya, setSelectedWilaya] = useState(currentUser.addresses[0]);


    useEffect(() => {
        retrieveWilayaDetails({id: selectedWilaya.wilaya_id});
    }, [retrieveWilayaDetails,selectedWilaya]);



    return (
        <div className="checkout">
            <div className="card checkout-cart">
                <div className="title">
                    <h1>Place Order</h1>
                    <p>Currently you have item(s) in your cart.</p>
                </div>
            </div>
            <div className="card checkout-cart">
                <div className="cart-header">
                    <div className="title">
                        <div className="nbr">
                            1
                        </div>
                        <div className="text">
                            Contact Number
                        </div>

                    </div>
                    <div className="button">
                        <i className="fa-solid fa-plus"/> update
                    </div>
                </div>
                <div className="cart-content">
                    <div className="update-number">

                        <div className="info">
                            <div className="number number-custom">
                                <div>
                                    <img src={algeria} alt=""/>
                                </div>
                                <input type="text" value={currentUser.phone_number} disabled/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card checkout-cart">
                <div className="cart-header">
                    <div className="title">
                        <div className="nbr">
                            2
                        </div>
                        <div className="text">
                            Billing Address
                        </div>

                    </div>
                    <div className="button">
                        <i className="fa-solid fa-plus"/> update
                    </div>
                </div>
                <div className="cart-content addresses">
                    {
                        currentUser.addresses.map(address => (
                            <div  key={address.id} className={`address ${selectedWilaya.id === address.id ? "address-active" : null} `} onClick={() => setSelectedWilaya(address)}>
                                <h3>Address</h3>
                                <p>{
                                    address.wilaya_id + " " + address.wilaya_name + " " + address.commune + " " + address.zip + " " +
                                    address.rue + " - Algerie"
                                }</p>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="card checkout-cart">
                <div className="cart-header">
                    <div className="title">
                        <div className="nbr">
                            3
                        </div>
                        <div className="text">
                            Delivery Schedule
                        </div>

                    </div>
                    <div className="button">

                    </div>
                </div>
                <div className="deliveryType">
                    <div className="checkBox">
                        <div className="ui slider checkbox">
                            <input type="checkbox" checked={deliveryType}
                                   onChange={event => setDeliveryType(!deliveryType)}/>
                            <label><i className="fa-solid fa-house-chimney"/> A Domicile</label>
                        </div>

                    </div>
                    <div className="checkBox">
                        <div className="ui slider checkbox">
                            <input type="checkbox" onChange={event => setDeliveryType(!deliveryType)}
                                   checked={!deliveryType}/>
                            <label> <i className="fa-solid fa-building"/> stop desc</label>
                        </div>
                    </div>

                </div>
            </div>
            <div className="card checkout-cart">
                <div className="cart-header">
                    <div className="title">
                        <div className="nbr">
                            4
                        </div>
                        <div className="text">
                            Delivery Schedule
                        </div>

                    </div>
                    <div className="button">

                    </div>
                </div>
                <div className="cart-content shipping-section ">
                    {
                        retrieveWilayaLoading
                            ? <Spinner/>
                            : <>
                                <div className="delivery-section">
                                <div className="deliver-agency active">
                                    <h3>Yalidine express</h3>
                                    <img src="/yalidine-logo.png" alt="logo"/>


                                    <Button
                                        content=''
                                        icon='shipping fast'
                                        label={{ as: 'a', basic: true, content: `${ deliveryType ? wilayaDetails?.home_fee : wilayaDetails?.desk_fee} DA` }}
                                        labelPosition='right'
                                    />

                                </div>
                                <div className="deliver-agency">
                                    <h3>DHL express</h3>
                                    <img src="/dhl-3.png" alt="logo"/>
                                </div>
                            </div>

                            </>
                    }

                </div>
            </div>
            <div className="card checkout-cart">
                <div className="cart-header">
                    <div className="title">
                        <div className="nbr">
                            5
                        </div>
                        <div className="text">
                            Order Details
                        </div>

                    </div>
                    <div className="button">

                    </div>
                </div>
                <div className="cart-content shipping-section">
                    {
                       retrieveWilayaLoading
                            ? <Spinner/>
                            : <div className="order-details">
                                <h3>your Order</h3>
                                {
                                    cartItems.map(item => (
                                        <div className="order-info">
                                            <div className="attribute">
                                                <span className={"qnt"}>{item.quantity}</span>
                                                <span>x</span>
                                                <span>{item.name}</span>
                                            </div>
                                            <div className="content qnt">{item.quantity * item.price} DA</div>
                                        </div>
                                    ))
                                }


                                <div className="divider"/>
                                <div className="order-info">
                                    <div className="attribute">
                                        Sub Total
                                    </div>
                                    <div className="content qnt">{total} DA</div>
                                </div>
                                <div className="order-info">
                                    <div className="attribute">
                                        Estimated Shipping
                                    </div>
                                    <div
                                        className="content qnt">{deliveryType ? wilayaDetails?.home_fee : wilayaDetails?.desk_fee} DA
                                    </div>
                                </div>
                                <div className="divider"/>
                                <div className="order-info">
                                    <div className="attribute total">
                                        Total
                                    </div>
                                    <div
                                        className="content total">{deliveryType ? wilayaDetails?.home_fee + total : wilayaDetails?.desk_fee + total} DA
                                    </div>
                                </div>
                            </div>
                    }

                </div>
                <div className="actions">
                    <Link className="action" to="/dashboard/checkout">
                        <i className="fa-solid fa-left-long"/>
                        Go back
                    </Link>

                    <div className={"confirm-buttons"}>
                            <span className="action">
                                   <i className="fa-solid fa-check-double"/>
                                    Confirm Order
                            </span>
                    </div>

                </div>
            </div>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

    wilayaDetails: selectWilayaVar,
    retrieveWilayaLoading: selectRetrieveWilayaLoading,
    retrieveWilayaErrors: selectRetrieveWilayaError,

    cartItems: selectCartItems,
    total: selectCartTotal,
});


const mapDispatchToProps = dispatch => ({
    retrieveWilayaDetails : wilaya => dispatch(retrieveWilayaDetailsStart(wilaya)),
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder));