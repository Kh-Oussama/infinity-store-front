import React from "react";
import { Link, Redirect, Route, Switch, useRouteMatch, withRouter } from "react-router-dom";
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


const Dashboard = ({ currentUser }) => {
    let { url, path } = useRouteMatch();

    //Function to toogle active link
    const toogleActiveLink = e => {
        if (currentUser.email_verified_at) {
            let activeLink = document.querySelector('.user-dashboard > .dashboard-ct > .sidebar > .links-ct > ul li a.active');
            activeLink.classList.remove('active');
            e.target.classList.add('active');
        }

    }

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
                        <div className="links-ct">
                            <ul>
                                {
                                    !currentUser.email_verified_at && <li>
                                        <Link className="active" to={`${path}/verify-email`} onClick={toogleActiveLink}>Verify
                                            Email</Link>
                                    </li>
                                } 
                                <li>
                                    <Link className={currentUser.email_verified_at ? 'active' : null} to={`${path}/`} onClick={toogleActiveLink}>Profile</Link>
                                </li>
                                <li>
                                    <Link to={`${path}/update-password`}  onClick={toogleActiveLink} >Change
                                        Password</Link>
                                </li>
                                <li>
                                    <Link to={`${path}/orders`} onClick={toogleActiveLink} >My Orders</Link>
                                </li>
                                <li>
                                    <Link to={`${path}/checkout`} onClick={toogleActiveLink} >Checkout</Link>
                                </li>
                                <li>
                                    <Link to="/help" onClick={toogleActiveLink} >Need Help</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/two-factors-auth" onClick={toogleActiveLink} >Two Factors Authentication</Link>
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
                            ?  <Switch>
                                    <Route exact path="/dashboard/verify-email" component={EmailVerification}/>
                                    <Redirect to="/dashboard/verify-email"/>
                                </Switch>
                                :  <Switch>
                                    <Route exact path="/dashboard" component={UserProfile}/>
                                    <Route exact path="/dashboard/update-password" component={UpdatePassword}/>
                                    <Route exact path="/dashboard/orders" component={UserOrder}/>
                                    <Route exact path="/dashboard/checkout" component={Checkout} />
                                    <Route exact path="/dashboard/two-factors-auth" component={TwoFactorAuthSettings}/>
                                    <Route exact path="/dashboard/confirm-password/:componentPath" component={ConfirmPasswordComponent}/>
                                    <Redirect to="/dashboard"/>
                                </Switch>
                        } 
                    </div>

                </div>
            </div>
        </>

    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

});
const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));


