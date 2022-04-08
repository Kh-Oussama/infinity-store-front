import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {toggleAuthComponent} from "../../redux/design-utilites/design-utilities.actions";

const BottomNavigation = ({toggleAuthComponent}) => {
    return (
        <div className="bottom-navigation">
            <span className="fas fa-home"></span>
            <span className="fas fa-search"></span>
            <span className="fas fa-archive"></span>
            <span onClick={() => toggleAuthComponent("sign-in")} className="fas fa-user"></span>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => ({
    //change the auth popup view state
    toggleAuthComponent: current_component => dispatch(toggleAuthComponent(current_component)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation);