import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopCard} from "../../redux/design-utilites/design-utilities.selectors";
import {toggleAuthComponent, toggleShopCard} from "../../redux/design-utilites/design-utilities.actions";

const BottomNavigation = ({shopCardDisplayed, toggleAuthComponent, toggleShopCard}) => {
    //Function to toggle navigation serach
    const toggleNavSearch = () => {
        document.querySelector('.navigation-bar .nav-search').classList.toggle('active');
    }

    //Function to toggle right nav
    const displayRightMenu = _ => {
        let sideMenu = document.querySelector('.navigation-bar .nav-right');
        sideMenu.classList.add('active');
    }

    useLayoutEffect(() => {
        //To close side menu when click outside
        const clickEvent = event => {
            if (!event.target.closest('.fa-align-left') && !event.target.closest('.nav-right')) {
                //To close nav right with previous function
                document.querySelector('.navigation-bar .nav-right').classList.remove('active')
            }
        };

        document.addEventListener('click', clickEvent);

        return () => {
            document.removeEventListener('click', clickEvent);
        }
    }, []);

    return (
        <div className="bottom-navigation">
            <span onClick={displayRightMenu} className="fa-solid fa-align-left"/>
            <span className="fas fa-home"/>
            <span onClick={toggleNavSearch} className="fas fa-search"/>
            <span onClick={() => toggleShopCard(!shopCardDisplayed)} className="fas fa-archive"/>
            <span onClick={() => toggleAuthComponent("sign-in")} className="fas fa-user"/>
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