import React, { useState } from "react";
import NoResult from "./../../images/no-result.svg";

const UserOrder = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const orders = [
        {
            date: 'January, 22 2022',
            delivery: 'Express Delivery',
            slug: "CGG82oQZc48i8",
            address: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            amounts: {
                subTotal: 150,
                discount: 0,
                delevery: 0,
                tax: 0,
                total: 153,
            },
            statusList: [
                'Order Recieved',
                'Order Proccessing',
                'Ready to Disptach',
                'Order Dispatched',
                'Order Dispatched',
                'Order Dispatched',
                'Order Dispatched',
                'Order Dispatched'
            ],
            currentStatus: 0,
            orderItems: [],
        },
        {
            date: 'January, 22 2022',
            delivery: 'Express Delivery',
            slug: "CGG82oQZc48i8",
            address: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            amounts: {
                subTotal: 150,
                discount: 0,
                delevery: 0,
                tax: 0,
                total: 153,
            },
            statusList: [
                'Order Recieved',
                'Order Proccessing',
                'Ready to Disptach',
                'Order Dispatched',
                'Order Dispatched',
                'Order Dispatched',
                'Order Dispatched',
                'Order Dispatched'
            ],
            currentStatus: 3,
            orderItems: [],
        },
        {
            date: 'January, 22 2022',
            delivery: 'Express Delivery',
            slug: "CGG82oQZc48i8",
            address: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            amounts: {
                subTotal: 150,
                discount: 0,
                delevery: 0,
                tax: 0,
                total: 153,
            },
            statusList: [
                'Order Recieved',
                'Order Proccessing',
                'Ready to Disptach',
                'Order Dispatched',
                'Order Dispatched',
                'Order Dispatched',
                'Order Dispatched',
                'Order Dispatched'
            ],
            currentStatus: 7,
            orderItems: [],
        },
    ];

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
                                            <span>${order.amounts.subTotal}</span>
                                        </div>
                                        <div>
                                            <span>Total Price :</span>
                                            <span>${order.amounts.total}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>}
            </div>
            <div className="side right-side">
                {orders.length !== 0 ?
                    <div className="order-details-item">
                        <div className="title-ct">
                            <h2>Order Detail - {orders[selectedIndex].slug}</h2>
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
                                    <p>{orders[selectedIndex].address}</p>
                                </div>
                            </div>
                            <div className="amount-ct">
                                <div>
                                    <span>Sub Total</span>
                                    <span>${orders[selectedIndex].amounts.subTotal}</span>
                                </div>
                                <div>
                                    <span>Discount</span>
                                    <span>${orders[selectedIndex].amounts.discount}</span>
                                </div>
                                <div>
                                    <span>Delevery Fee</span>
                                    <span>${orders[selectedIndex].amounts.delevery}</span>
                                </div>
                                <div>
                                    <span>Tax</span>
                                    <span>${orders[selectedIndex].amounts.tax}</span>
                                </div>
                                <div>
                                    <span>Total</span>
                                    <span>${orders[selectedIndex].amounts.total}</span>
                                </div>
                            </div>
                        </div>
                        <div className="progress-section">
                            <div className="progress-ct">
                                <div className="black-scroller x-scroll">
                                    {orders[selectedIndex].statusList.map((s, index) => {
                                        return (
                                            <div className={`progress-item ${index <= orders[selectedIndex].currentStatus ? 'active' : ''}`}>
                                                {index > orders[selectedIndex].currentStatus ?
                                                    <span>{index + 1}</span> :
                                                    <span><i className="fa-solid fa-check"></i></span>}
                                                <p>{s}</p>
                                            </div>
                                        );
                                    })}

                                </div>
                            </div>

                        </div>

                        <div className="products-ct">
                            <div className="row-header">
                                <span>Item</span>
                                <span>Quantity</span>
                                <span>Price</span>
                            </div>

                            <div className="products-list black-scroller y-scroll">
                                <div className="row-item">
                                    <div className="product">
                                        <div className="img-ct">
                                            <img src="./../images/products/Apples.jpg" alt="Image" />
                                        </div>
                                        <div className="content">
                                            <p>Product Name</p>
                                            <span>$150.00</span>
                                        </div>
                                    </div>
                                    <span>4</span>
                                    <span>$400</span>
                                </div>
                                <div className="row-item">
                                    <div className="product">
                                        <div className="img-ct">
                                            <img src="./../images/products/Apples.jpg" alt="Image" />
                                        </div>
                                        <div className="content">
                                            <p>Product Name</p>
                                            <span>$150.00</span>
                                        </div>
                                    </div>
                                    <span>4</span>
                                    <span>$400</span>
                                </div>
                                <div className="row-item">
                                    <div className="product">
                                        <div className="img-ct">
                                            <img src="./../images/products/Apples.jpg" alt="Image" />
                                        </div>
                                        <div className="content">
                                            <p>Product Name</p>
                                            <span>$150.00</span>
                                        </div>
                                    </div>
                                    <span>4</span>
                                    <span>$400</span>
                                </div>
                                <div className="row-item">
                                    <div className="product">
                                        <div className="img-ct">
                                            <img src="./../images/products/Apples.jpg" alt="Image" />
                                        </div>
                                        <div className="content">
                                            <p>Product Name</p>
                                            <span>$150.00</span>
                                        </div>
                                    </div>
                                    <span>4</span>
                                    <span>$400</span>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="img-ct">
                        <img src={NoResult} alt="No result" />
                    </div>}
            </div>
        </div>
    );
}

export default UserOrder;