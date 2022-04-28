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

    return (
        <div className="user-order">
            <div className="side left-side">
                <div className="title">
                    <h3>My Orders</h3>
                </div>

                {/*<div className="orders-msg-ct">
                    <p>You didn't order anything yet</p>
                </div> */}

                <div className={`orders-ct black-scroller ${orders.length > 2?'y-scroll':''}`}>
                    {orders.map((order, index) => {
                        return (
                            <div key={index} className={`order-item ${index === selectedIndex?'active':''}`} onClick={() => setSelectedIndex(index)}>
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


                </div>
            </div>
            <div className="side right-side">
            </div>
        </div>
    );
}

export default UserOrder;