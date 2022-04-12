import React, { useEffect } from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopCard} from "../../redux/design-utilites/design-utilities.selectors";
import {toggleAuthComponent, toggleShopCard} from "../../redux/design-utilites/design-utilities.actions";

const BottomNavigation = ({shopCardDisplayed, toggleAuthComponent, toggleShopCard}) => {

    return (
        <div className="bottom-navigation">
            <span className="fas fa-home"></span>
            <span className="fas fa-search"></span>
            <span onClick={() => toggleShopCard(!shopCardDisplayed)} className="fas fa-archive"></span>
            <span onClick={() => toggleAuthComponent("sign-in")} className="fas fa-user"></span>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    shopCardDisplayed: selectShopCard,
});

const mapDispatchToProps = dispatch => ({
    //change the auth popup view state
    toggleAuthComponent: current_component => dispatch(toggleAuthComponent(current_component)),

    //toggle Shop card
    toggleShopCard: current_state => dispatch(toggleShopCard(current_state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation);