import React, {useEffect, useState} from "react";
import NoResult from "../no-result/no-result.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import {selectFetchOrdersLoading, selectOrders, selectOrderStats} from "../../redux/orders/orders.selectors";
import {fetchOrdersStart} from "../../redux/orders/orders.actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner.components";
import cookies from "js-cookie";
import { withTranslation } from "react-i18next";

const UserOrder = ({ orders,  loading, errors, fetchOrders, currentUser, states, t }) => {
    const lang = cookies.get('i18next') || "en";
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        fetchOrders({id: currentUser.id});
    }, [fetchOrders,currentUser]);

    return (
        <div className="user-order">
            <div className="side left-side">
                <div className="title">
                    <h3 lang={lang}>{t("My Orders")}</h3>
                </div>
                {
                    loading
                    ? <div className={"orders-spiner"}><Spinner/></div>
                        : <>
                            {orders.length === 0 ?
                                <div className="orders-msg-ct">
                                    <p>{t("You didn't order anything yet")}</p>
                                </div>
                                : <div className={`orders-ct black-scroller ${orders.length > 2 ? 'y-scroll' : ''}`}>
                                    {orders.map((order, index) => {
                                        return (
                                            <div key={index} className={`order-item ${index === selectedIndex ? 'active' : ''}`}
                                                 onClick={() => setSelectedIndex(index)}>
                                                <div lang={lang} className="order-title-ct">
                                                    <p>{t("Order")}<span>#{order.id}</span></p>
                                                    <span>{order.state.name}</span>
                                                </div>

                                                <div className="order-content-ct" lang={lang}>
                                                    <div>
                                                        <span>{t('Order Date :')}</span>
                                                        <span>{order.created_at}</span>
                                                    </div>
                                                    <div>
                                                        <span>{t('Delivery Type :')}</span>
                                                        <span>{order.delivery_type}</span>
                                                    </div>
                                                    <div>
                                                        <span>{t('Amount :')}</span>
                                                        <span>{order.sub_total} {t('DA')}</span>
                                                    </div>
                                                    <div>
                                                        <span>{t('Total Price :')}</span>
                                                        <span>{order.total} {t('DA')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            }
                        </>
                }

            </div>
            <div className="side right-side">
                {
                    loading
                        ? <div className={"orders-spiner"}><Spinner/></div>
                        : <>
                            {orders.length !== 0 ?
                                <div className="order-details-item">
                                    <div className="title-ct" lang={lang}>
                                        <h2>{t('Order Detail')} - {orders[selectedIndex].id}</h2>
                                        <div>
                                            <i className="far fa-face-frown"/><span>{t('Ask for a refund')}</span>
                                        </div>
                                        <div className="active">
                                            <i className="far fa-eye"/><span>{t('Detail')}</span>
                                        </div>
                                    </div>
                                    <div className="addresses-ct">
                                        <div className="content-ct">
                                            <div className="address">
                                                <h2 lang={lang}>{t('Address')}</h2>
                                                <p lang={lang}>
                                                    {
                                                        orders[selectedIndex].address.wilaya_id + " " + orders[selectedIndex].address.wilaya_name + " " + orders[selectedIndex].address.commune + " " + orders[selectedIndex].address.zip + " " +
                                                        orders[selectedIndex].address.street + " - Algerie"
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="amount-ct" lang={lang}>
                                            <div>
                                                <span>{t('Sub Total')}</span>
                                                <span>{orders[selectedIndex].sub_total} {t('DA')}</span>
                                            </div>
                                            <div>
                                                <span>{t('Discount')}</span>
                                                <span>{orders[selectedIndex].total} {t('DA')}</span>
                                            </div>
                                            <div>
                                                <span>{t('Delivery Fee')}</span>
                                                <span>{orders[selectedIndex].delivery_fee} {t('DA')}</span>
                                            </div>
                                            <div>
                                                <span>{t('Delivery Type')}</span>
                                                <span>{orders[selectedIndex].delivery_type} DA</span>
                                            </div>
                                            <div>
                                                <span>{t('Total')}</span>
                                                <span>{orders[selectedIndex].total} DA</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-section">
                                        <div className="progress-ct">
                                            <div className="black-scroller x-scroll">
                                                {states.map((item, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`progress-item ${orders[selectedIndex].state.id >= item.id ? 'active' : ''}`}>
                                                            {
                                                                item.id < orders[selectedIndex].state.id
                                                                    ? <>
                                                                        <span><i className="fa-solid fa-check"/></span>
                                                                        <p>{item.name}</p>
                                                                    </>
                                                                    : <>
                                                                        <span>{item.id}</span>
                                                                        <p>{item.name}</p>
                                                                    </>
                                                            }

                                                        </div>
                                                    );
                                                })}

                                            </div>
                                        </div>

                                    </div>

                                    <div className="products-ct x-scroll">
                                        <div className="row-header">
                                            <span>{t('Item')}</span>
                                            <span>{t('Quantity')}</span>
                                            <span>{t('Price')}</span>
                                        </div>

                                        <div className="products-list black-scroller y-scroll">
                                            {orders[selectedIndex].items.map(p => {
                                                return (
                                                    <div className="row-item">
                                                        <div className="product">
                                                            <div className="img-ct">
                                                                <img
                                                                    src={`http://localhost:8000/${p.product.images[0].path}`}
                                                                    alt="Image"/>
                                                            </div>
                                                            <div className="content">
                                                                <p>{p.product.name}</p>
                                                                <span>{p.product.price} {t('DA')}</span>
                                                            </div>
                                                        </div>
                                                        <span>{p.product.quantity}</span>
                                                        <span>{p.quantity * p.product.price} {t('DA')}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div> : <NoResult/>}
                        </>
                }

            </div>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

    loading: selectFetchOrdersLoading,
    errors: selectFetchOrdersLoading,
    orders: selectOrders,

    states : selectOrderStats,
});


const mapDispatchToProps = dispatch => ({
    fetchOrders: user => dispatch(fetchOrdersStart(user)),
})
export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(UserOrder)));