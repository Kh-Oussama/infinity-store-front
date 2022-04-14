import React from 'react';

//components
import ShoppingBagIcon from "../icons/shopingBag";
import ShoppingCardPopup from "../shopping-card-popup/shopping-card-popup-component";
import ContentLoader from "react-content-loader";
import {createStructuredSelector} from "reselect";
import {selectShopCard} from "./../../redux/design-utilites/design-utilities.selectors";
import {toggleShopCard} from "./../../redux/design-utilites/design-utilities.actions";
import { connect } from 'react-redux';


//the left shopping card component
const ShopCard = ({loading, shopCardDisplayed, toggleShopCard}) => {

    const toggleModal = () => {
        toggleShopCard(!shopCardDisplayed);
        if (!shopCardDisplayed)  document.body.style.overflow = 'hidden';
        else  document.body.style.overflow = 'unset';
    };

    return (
        <>
            <ShoppingCardPopup toggleModal={toggleModal} showModal={shopCardDisplayed}/>
            <div className="shop-card" style={{backgroundColor: loading ?'transparent' : null}} onClick={() => toggleModal()}>

                {
                    loading
                    ?  <ContentLoader
                            speed={3}
                            width={"120%"}
                            height={"120%"}
                            viewBox="0 0 100% 656"
                            backgroundColor="#f2f2f2"
                            foregroundColor="#e1e1e1"
                        >
                            <rect x="0" y="0%" rx="3" ry="3" width="120%" height="120%"/>
                        </ContentLoader>
                        : <>
                            <div className="items-count">
                                {/*this is for the icon*/}
                                <ShoppingBagIcon/>

                                <div className="count-number">0</div>
                                <div className={"items"}>Item</div>
                            </div>
                            <div className="total">
                                0.00$
                            </div>
                        </>
                }

            </div>
        </>
    )
}


const mapStateToProps = createStructuredSelector({
    shopCardDisplayed: selectShopCard,
});


const mapDispatchToProps = dispatch => ({
    toggleShopCard: current_state => dispatch(toggleShopCard(current_state)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopCard);