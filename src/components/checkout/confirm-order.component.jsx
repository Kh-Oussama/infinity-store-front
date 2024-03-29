import React, {useEffect, useState} from "react";
import {Link, Redirect, withRouter} from "react-router-dom";
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
import {addOrderStart} from "../../redux/orders/orders.actions";
import {
    selectAddOrderError,
    selectAddOrderLoading,
    selectAddOrderStatus,
    selectTheCreatedOrder
} from "../../redux/orders/orders.selectors";
import { withTranslation } from "react-i18next";
import cookies from "js-cookie";

const ConfirmOrder = ({history, currentUser, retrieveWilayaDetails, retrieveWilayaLoading, retrieveWilayaErrors, wilayaDetails, cartItems, total, addOrder,  loading, errors, status, order, t}) => {
    const lang = cookies.get('i18next') || "en";


    const [deliveryType, setDeliveryType] = useState(true);


    const [selectedWilaya, setSelectedWilaya] = useState(currentUser.addresses[0]);


    useEffect    (() => {
        retrieveWilayaDetails({id: selectedWilaya.wilaya_id});
    }    , [retrieveWilayaDetails,selectedWilaya]);

    const  handleSubmit = event => { 
            event.preventDefault();

        const formData = new FormData();
        formData.append('address_id', selectedWilaya.id);
        formData.append('phone_number', currentUser.phone_number);
        formData.append('delivery_company_name', "yalidine");
        formData.append('delivery_fee', deliveryType ? wilayaDetails?.home_fee : wilayaDetails?.desk_fee);
        formData.append('delivery_type', deliveryType);
        formData.append('sub_total', total);
        formData.append('client_id', currentUser.id);
        formData.append('total', total + (deliveryType ? wilayaDetails?.home_fee : wilayaDetails?.desk_fee) );

        let items = [];
        cartItems.forEach(item => {
            items.push({product_id: item.id, color: item.color?.name , size: item.size?.name, quantity: item.quantity});
        } );

        formData.append('order_items[]', JSON.stringify(items));

        addOrder({formData});
    };


    if (status && order) return <Redirect to={`/dashboard/orders/${order.id}`}/>;
    if (cartItems.length <= 0) return <Redirect to={`/dashboard/checkout`}/>;
    return (
        <div className="checkout">
            <div className="card checkout-cart">
                <div className="title" lang={lang}>
                    <h1>{t('Place Order')}</h1>
                    <p>{t('Currently you have item(s) in your cart.')}</p>
                </div>
            </div>
            <div className="card checkout-cart">
                <div className="cart-header" lang={lang}>
                    <div className="title">
                        <div className="nbr">
                            1
                        </div>
                        <div className="text">
                            {t('Contact Number')}
                        </div>

                    </div>
                    <div className="button">
                        <i className="fa-solid fa-plus"/> {t('update')}
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
                <div className="cart-header" lang={lang}>
                    <div className="title">
                        <div className="nbr">
                            2
                        </div>
                        <div className="text">
                            {t('Billing Address')}
                        </div>

                    </div>
                    <div className="button">
                        <i className="fa-solid fa-plus"/> {t('update')}
                    </div>
                </div>
                <div className="cart-content addresses" lang={lang}>
                    {
                        currentUser.addresses.map(address => (
                            <div  key={address.id} className={`address ${selectedWilaya.id === address.id ? "address-active" : null} `} onClick={() => setSelectedWilaya(address)}>
                                <h3>{t('Address')}</h3>
                                <p>{
                                    address.wilaya_id + " " + address.wilaya_name + " " + address.commune + " " + address.zip + " " +
                                    address.street + " - Algerie"
                                }</p>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="card checkout-cart">
                <div className="cart-header" lang={lang}>
                    <div className="title">
                        <div className="nbr">
                            3
                        </div>
                        <div className="text">
                            {t('Delivery Schedule')}
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
                <div className="cart-header" lang={lang}>
                    <div className="title">
                        <div className="nbr">
                            4
                        </div>
                        <div className="text">
                            {t('Delivery Schedule')}
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
                <div className="cart-header" lang={lang}>
                    <div className="title">
                        <div className="nbr">
                            5
                        </div>
                        <div className="text">
                            {t('Order Details')}
                        </div>

                    </div>
                    <div className="button">

                    </div>
                </div>
                <div className="cart-content shipping-section">
                    {
                       retrieveWilayaLoading || loading
                            ? <Spinner/>
                            : <div className="order-details">
                                <h3>{t('Your Order')}</h3>
                                {
                                    cartItems.map(item => (
                                        <div className="order-info">
                                            <div className="attribute">
                                                <span className={"qnt"}>{item.quantity}</span>
                                                <span>x</span>
                                                <span>{item.name}</span>
                                            </div>
                                            <div className="content qnt">{item.quantity * item.price} {t('DA')}</div>
                                        </div>
                                    ))
                                }


                                <div className="divider"/>
                                <div className="order-info">
                                    <div className="attribute">
                                        {t('Sub Total')}
                                    </div>
                                    <div className="content qnt">{total} {t('DA')}</div>
                                </div>
                                <div className="order-info">
                                    <div className="attribute">
                                        {t('Estimated Shipping')}
                                    </div>
                                    <div
                                        className="content qnt">{deliveryType ? wilayaDetails?.home_fee : wilayaDetails?.desk_fee} {t('DA')}
                                    </div>
                                </div>
                                <div className="divider"/>
                                <div className="order-info">
                                    <div className="attribute total">
                                        {t('Total')}
                                    </div>
                                    <div
                                        className="content total">{deliveryType ? wilayaDetails?.home_fee + total : wilayaDetails?.desk_fee + total} {t('DA')}
                                    </div>
                                </div>
                            </div>
                    }

                </div>
                <div className="actions">
                    <Link className="action" to="/dashboard/checkout">
                        <i className="fa-solid fa-left-long"/>
                        {t('Go back')}
                    </Link>

                    <div className={"confirm-buttons"} onClick={handleSubmit}>
                            <span className="action">
                                   <i className="fa-solid fa-check-double"/>
                                    {t('Confirm Order')}
                            </span>
                    </div>

                </div>
            </div>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

    loading: selectAddOrderLoading,
    errors: selectAddOrderError,
    status: selectAddOrderStatus,

    wilayaDetails: selectWilayaVar,
    retrieveWilayaLoading: selectRetrieveWilayaLoading,
    retrieveWilayaErrors: selectRetrieveWilayaError,

    cartItems: selectCartItems,
    total: selectCartTotal,
    order : selectTheCreatedOrder,
});


const mapDispatchToProps = dispatch => ({
    retrieveWilayaDetails : wilaya => dispatch(retrieveWilayaDetailsStart(wilaya)),
    addOrder: order => dispatch(addOrderStart(order)),
})
export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder)));