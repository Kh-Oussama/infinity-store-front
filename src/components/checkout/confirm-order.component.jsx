import React from "react";
import {Link, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import './confirm-order.styles.scss';
import algeria from "../../images/algeria.png";

const ConfirmOrder = ({history}) => {


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
                                <input type="text" value={"55555555"} disabled/>

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
                <div className="cart-content">
                    <div className="address">
                        <h3>Address</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis dolorem error
                            esse fugit laborum nemo officiis omnis quisquam sit. Doloribus fuga molestias omnis!
                            Corporis fugit inventore nam quis sed?</p>
                    </div>
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
                <div className="cart-content shipping-section ">
                    <div className="deliver-agency active">
                        <h3>Yalidine express</h3>
                        <img src="/yalidine-logo.png" alt="logo"/>
                    </div>
                    <div className="deliver-agency">
                        <h3>DHL express</h3>
                        <img src="/dhl-3.png" alt="logo"/>
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
                            Order Details
                        </div>

                    </div>
                    <div className="button">

                    </div>
                </div>
                <div className="cart-content">
                    <div className="order-details">
                        <h3>your Order</h3>
                        <div className="order-info">
                            <div className="attribute">
                                <span className={"qnt"}>1</span>
                                <span>x</span>
                                <span>Apples </span>
                            </div>
                            <div className="content qnt ">350 $</div>
                        </div>
                        <div className="order-info">
                                <div className="attribute">
                                    <span className={"qnt"}>100</span>
                                    <span>x</span>
                                    <span>Baby Spinach</span>
                                </div>
                            <div className="content qnt">150 $</div>
                        </div>
                        <div className="order-info">
                            <div className="attribute">
                                <span className={"qnt"}>100</span>
                                <span>x</span>
                                <span>Baby Spinach</span>
                            </div>
                            <div className="content qnt">150 $</div>
                        </div>
                        <div className="divider"/>
                        <div className="order-info">
                            <div className="attribute">
                                Sub Total
                            </div>
                            <div className="content qnt">$20.20</div>
                        </div>
                        <div className="order-info">
                            <div className="attribute">
                                Tax
                            </div>
                            <div className="content qnt">$5.20</div>
                        </div>
                        <div className="order-info">
                            <div className="attribute">
                                Estimated Shipping
                            </div>
                            <div className="content qnt">$5.20</div>
                        </div>
                        <div className="divider"/>
                        <div className="order-info">
                            <div className="attribute total">
                                Total
                            </div>
                            <div className="content total">$20.20</div>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <Link className="action"  to="/dashboard/checkout">
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


const mapStateToProps = createStructuredSelector({});


const mapDispatchToProps = dispatch => ({})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder));