import React, { useState } from "react";

const UserOrder = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const orders = [
        {
            date: 'January, 22 2022',
            delivery: 'Express Delivery',
            amount: 150,
            total: 180,
        },
        {
            date: 'January, 22 2022',
            delivery: 'Express Delivery',
            amount: 150,
            total: 180,
        },
        {
            date: 'January, 22 2022',
            delivery: 'Express Delivery',
            amount: 150,
            total: 180,
        },
    ];

    const ordersDetails = [
        {
            slug: "CGG82oQZc48i8",
            address: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            amounts: {
                subTotal: 150,
                discount: 0,
                delevery: 0,
                tax: 0,
                total: 153,
            },
            statusList: [],
            currentStatus: 3,
            orderItems: [],
        }
    ]

    return (
        <div className="user-order">
            <div className="side left-side">
                <div className="title">
                    <h3>My Orders</h3>
                </div>

                {orders.length === 0 ?
                    <div className="orders-msg-ct">
                        <p>You didn't order anything yet</p>
                    </div> :

                    <div className={`orders-ct black-scroller ${orders.length > 2 ? 'y-scroll' : ''}`}>
                        {orders.map((order, index) => {
                            return (
                                <div key={index} className={`order-item ${index === selectedIndex ? 'active' : ''}`} onClick={() => setSelectedIndex(index)}>
                                    <div className="order-title-ct">
                                        <p>Order<span>#66</span></p>
                                        <span>Order Recievedsfqfqs</span>
                                    </div>

                                    <div className="order-content-ct">
                                        <div>
                                            <span>Order Date :</span>
                                            <span>{order.date}</span>
                                        </div>
                                        <div>
                                            <span>Delivery Time :</span>
                                            <span>{order.delivery}</span>
                                        </div>
                                        <div>
                                            <span>Amount :</span>
                                            <span>${order.amount}</span>
                                        </div>
                                        <div>
                                            <span>Total Price :</span>
                                            <span>${order.total}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}


                    </div>}
            </div>
            <div className="side right-side">
                <div className="order-details-item">
                    <div className="title-ct">
                        <h2>Order Detail - CGG82oQZc48i8</h2>
                        <div>
                            <i className="far fa-face-frown"></i><span>Ask for a refund</span>
                        </div>
                        <div className="active">
                            <i className="far fa-eye"></i><span>Detail</span>
                        </div>
                    </div>
                    <div className="addresses-ct">
                        <div className="content-ct">
                            <div className="address">
                                <h2>Address</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                        <div className="amount-ct">
                            <div>
                                <span>Sub Total</span>
                                <span>$150.00</span>
                            </div>
                            <div>
                                <span>Discount</span>
                                <span>$0.00</span>
                            </div>
                            <div>
                                <span>Delevery Fee</span>
                                <span>$0.00</span>
                            </div>
                            <div>
                                <span>Tax</span>
                                <span>$3.00</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>$153</span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-ct">
                            <div className="black-scroller x-scroll">
                                <div className="progress-item active">
                                    <span>1</span>
                                    <p>Order Recieved</p>
                                </div>

                                <div className="progress-item active">
                                    <span>2</span>
                                    <p>Order Proccessing</p>
                                </div>

                                <div className="progress-item">
                                    <span>3</span>
                                    <p>Ready to Disptach</p>
                                </div>

                                <div className="progress-item">
                                    <span>4</span>
                                    <p>Order Dispatched</p>
                                </div>

                                <div className="progress-item">
                                    <span>5</span>
                                    <p>Order Dispatched</p>
                                </div>

                                <div className="progress-item">
                                    <span>6</span>
                                    <p>Ready to Disptach</p>
                                </div>

                                <div className="progress-item">
                                    <span>7</span>
                                    <p>Order Dispatched</p>
                                </div>

                                <div className="progress-item">
                                    <span>8</span>
                                    <p>Order Dispatched</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserOrder;