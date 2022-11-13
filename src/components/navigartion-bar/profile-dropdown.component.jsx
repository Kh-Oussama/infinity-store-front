import React from 'react';
import {animated, useSpring} from "react-spring";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {signOutStart} from "../../redux/auth/auth.actions";
import {connect} from "react-redux";
import { withTranslation } from 'react-i18next';
import cookies from "js-cookie";

const ProfileDropdown = ({showProfileDropdown, history, signOut, t}) => {
    const lang = cookies.get('i18next') || "en";

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
                    <div className="profile-dropdown-header" lang={lang}>
                        <span>{t('Points')}</span>
                        <span>0</span>
                    </div>
                    <div className="profile-dropdown-content">
                        <div className="item" lang={lang} onClick={() => history.push('/dashboard')}>
                            {t('Profile')}
                        </div>
                        <div className="item" lang={lang} onClick={() => history.push('/dashboard/orders')}>
                            {t('My orders')}
                        </div>
                        <div className="item" lang={lang} onClick={() => history.push('/dashboard/update-passwordcheckout')}>
                            {t('Checkout')}
                        </div>
                        <div className="item" lang={lang} onClick={signOut}>
                            {t('Logout')}
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

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown)));

