import React, { useLayoutEffect, useState } from "react";
import { Link, Redirect, Route, Switch, useLocation, useRouteMatch, withRouter } from "react-router-dom";
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import UpdatePassword from "../../components/update-password/update-password.page";
import UserOrder from "../../components/user-order/user-order.page";
import UserProfile from "../../components/user-profile/user-profile.page";
import EmailVerification from "../../components/email-verification/email-verification.page";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { connect } from "react-redux";
import TwoFactorAuthSettings from "../../components/two-factors-auth-setting/two-factors-auth-setting.component";
import ConfirmPasswordComponent
    from "../../components/two-factors-auth-setting/confirm-password/confirm-password.component";

import Checkout from "../../components/checkout/checkout.component";
import ConfirmOrder from "../../components/checkout/confirm-order.component";
import OrderView from "../../components/checkout/order-view.comonent";


const Dashboard = ({ currentUser }) => {
    const location = useLocation();
    const [showLeftSide, setLeftSide] = useState(false);

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
            
            if(!event.target.closest('.fa-user') && !event.target.closest('.links-ct')){
                setLeftSide(false);
            }
        };

        document.addEventListener('click', clickEvent);

        return () => {
            document.removeEventListener('click', clickEvent);
        }
    }, []);

    return (
        <>
            <NavigationBar />
            <div className="user-dashboard">
                <div className="dashboard-ct">
                    <div className="sidebar">
                        <div className="wallet-ct">
                            <h3>Wallet Points</h3>
                            <div>
                                <div>
                                    <span>0</span>
                                    <span>Total</span>
                                </div>
                                <div>
                                    <span>0</span>
                                    <span>Used</span>
                                </div>
                                <div>
                                    <span>0</span>
                                    <span>Available</span>
                                </div>
                            </div>
                        </div>
                        <div className={`links-ct ${showLeftSide?'active':''}`}>
                            {/* Displaying only in responsive */}
                            <div className="brand-side-menu">
                                <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo" />
                                <span className="fa-solid fa-xmark" onClick={() => setLeftSide(false)}></span>
                            </div>

                            <div className="side-bar-wallet">
                                <div>
                                    <span>Total Points</span>
                                    <span>0</span>
                                </div>
                                <div>
                                    <span>Points Used</span>
                                    <span>0</span>
                                </div>
                                <div>
                                    <span>Avalaible Points</span>
                                    <span>0</span>
                                </div>
                            </div>

                            <ul>
                                {
                                    !currentUser.email_verified_at && <li>
                                        <Link className="active" to={`/dashboard/verify-email`} >Verify
                                            Email</Link>
                                    </li>
                                }
                                <li>
                                    <Link className={location.pathname === "/dashboard" ? 'active' : null} to={`/dashboard`} >Profile</Link>
                                </li>
                                <li>
                                    <Link to={`/dashboard/update-password`} className={location.pathname === "/dashboard/update-password" ? 'active' : null} >Change
                                        Password</Link>
                                </li>
                                <li>
                                    <Link to={`/dashboard/orders`} className={location.pathname === "/dashboard/orders" ? 'active' : null}  >My Orders</Link>
                                </li>
                                <li>
                                    <Link to={`/dashboard/checkout`} className={location.pathname === "/dashboard/checkout" || location.pathname === "/dashboard/place-order" ? 'active' : null} >Checkout</Link>
                                </li>
                                <li>
                                    <Link to="/help" className={location.pathname === "/dashboard/help" ? 'active' : null} >Need Help</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/two-factors-auth" className={location.pathname === "/dashboard/two-factors-auth" ? 'active' : null} >Two Factors Authentication</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="/">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="main">
                        {
                            !currentUser.email_verified_at
                                ? <Switch>
                                    <Route exact path="/dashboard/verify-email" component={EmailVerification} />
                                    <Redirect to="/dashboard/verify-email" />
                                </Switch>

                                :  <Switch>
                                    <Route exact path="/dashboard" component={UserProfile}/>
                                    <Route exact path="/dashboard/update-password" component={UpdatePassword}/>
                                    <Route exact path="/dashboard/orders" component={OrderView}/>
                                    <Route exact path="/dashboard/checkout" component={Checkout} />
                                    <Route exact path="/dashboard/place-order" component={ConfirmOrder} />
                                    <Route exact path="/dashboard/two-factors-auth" component={TwoFactorAuthSettings} />
                                    <Route exact path="/dashboard/confirm-password/:componentPath" component={ConfirmPasswordComponent} />
                                    <Redirect to="/dashboard" />
                                </Switch>
                        }
                    </div>

                </div>
            </div>

            <div className="bottom-navigation">
                <span onClick={displayRightMenu} className="fa-solid fa-align-left" />
                <span className="fas fa-home" />
                <span onClick={toggleNavSearch} className="fas fa-search" />
                <span onClick={() => setLeftSide(true)} className="fa-solid fa-user"></span>
            </div>
        </>

    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

});
const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));


