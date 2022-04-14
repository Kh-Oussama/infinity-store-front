import React from 'react';
import {animated, useSpring} from "react-spring";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {signOutStart} from "../../redux/auth/auth.actions";
import {connect} from "react-redux";

const ProfileDropdown = ({showProfileDropdown, history, signOut}) => {

    const animation = useSpring({
        config: {
            duration: 350
        },
        opacity: showProfileDropdown ? 1 : 0,
    });

    return (
        <>
            {
                showProfileDropdown && <animated.div style={animation} className="profile-dropdown">
                    <div className="profile-dropdown-header">
                        <span>Points</span>
                        <span>0</span>
                    </div>
                    <div className="profile-dropdown-content">
                        <div className="item" onClick={() => history.push('/dashboard')}>
                            Profile
                        </div>
                        <div className="item" onClick={() => history.push('/dashboard/orders')}>
                            My orders
                        </div>
                        <div className="item" onClick={() => history.push('/dashboard/update-passwordcheckout')}>
                            Checkout
                        </div>
                        <div className="item" onClick={signOut}>
                            Logout
                        </div>

                    </div>

                </animated.div>
            }
        </>

    )
}


const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown));

