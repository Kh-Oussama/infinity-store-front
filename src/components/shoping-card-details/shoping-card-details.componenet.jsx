import React from 'react';
import ShoppingBagIcon from "../icons/shopingBag";
import CloseIcon from "../icons/close-icon.component";
import ShoppingCardItem from "../shopping-card-item/shopping-card-item.component";
import {createStructuredSelector} from "reselect";
import {selectShopCard} from "../../redux/design-utilites/design-utilities.selectors";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {
    redirectToCheckout,
    toggleAuthComponent,
    toggleShopCard
} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import EmptyCardIcon from "../icons/SadFaceIcon";
import {withRouter} from "react-router-dom";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';


const ShoppingCardDetails = ({ showModal, toggleModal,cartItems, history, total, currentUser, toggleAuthComponent, redirectToCheckoutPage, t}) => {

    return (
        <>
            <div className="shopping-card-details">
                <div className="topBlock">
                    <div className="leftBlock">
                        <ShoppingBagIcon/>
                        <span className="count-number">
                            {cartItems.length}
                        </span>
                        <span>{t('Item')}</span>
                    </div>
                    <div className="rightBlock" onClick={() => toggleModal()}>
                        <CloseIcon/>
                    </div>
                </div>
                <div className="divider"/>
                <div className="contentBlock">

                    {
                        cartItems.length
                            ?  <div className="items">
                                {
                                    cartItems.map(cartItem => (
                                        <ShoppingCardItem key={cartItem.id} item={cartItem}  />
                                    ))
                                }
                                </div>
                            : <>
                                <EmptyCardIcon/>
                                <h1>{t('No products found')}</h1>
                            </>
                    }

                </div>
                <div className="bottomBlock">
                    <div className="checkoutButton" onClick={() => {
                        toggleModal();
                        if (currentUser) {
                            history.push('/dashboard/checkout');
                        }else {
                            toggleAuthComponent("sign-in");
                            redirectToCheckoutPage(true);
                        }
                    }}>
                        <div className="text">{t("Checkout")}</div>
                        <div className="totalPrice">{total} {t("DA")}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal,
    currentUser: selectCurrentUser,
});


const mapDispatchToProps = dispatch => ({
    toggleAuthComponent: current_component => dispatch(toggleAuthComponent(current_component)),
    redirectToCheckoutPage: current_state => dispatch(redirectToCheckout(current_state)),
})
export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCardDetails)));