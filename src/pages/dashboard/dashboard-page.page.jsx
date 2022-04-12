import React from "react";
import { Switch, useRouteMatch, Route, Link, withRouter } from "react-router-dom";
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import UpdatePassword from "../../components/update-password/update-password.page";
import UserOrder from "../../components/user-order/user-order.page";
import UserProfile from "../../components/user-profile/user-profile.page";
import ProductsGridForGroup from "../../components/products-grid/products-grid-group.compoenent";
import ProductsGridForCategories from "../../components/products-grid/products-grid-for-category.compoenent";
import ProductsGridForSubCategories from "../../components/products-grid/products-grid-sub-categories.compoenent";

const Dashboard = () => {
    let { url, path } = useRouteMatch();

    //Function to toogle active link
    const toogleActiveLink = e => {
        let activeLink = document.querySelector('.user-dashboard > .dashboard-ct > .sidebar > .links-ct > ul li a.active');
        activeLink.classList.remove('active');
        e.target.classList.add('active');
    }

    return (
        <>
            <NavigationBar />
            <div className="user-dashboard">
                <div className="dashboard-ct">
                    <div className="sidebar">
                        <div className="wallet-ct">
                            <h3 >Wallet Points</h3>
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
                                <li>
                                    <Link className="active" to={`${path}/`} onClick={toogleActiveLink}>Profile</Link>
                                </li>
                                <li>
                                    <Link to={`${path}/update-password`} onClick={toogleActiveLink}>Change Password</Link>
                                </li>
                                <li>
                                    <Link to={`${path}/orders`} onClick={toogleActiveLink}>My Orders</Link>
                                </li>
                                <li>
                                    <Link to="/help" onClick={toogleActiveLink}>Need Help</Link>
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

                        <Switch>
                            {/*shopping routing*/}
                            <Route exact path="/dashboard" component={UserProfile}/>
                            <Route exact path="/dashboard/update-password" component={UpdatePassword}/>
                            <Route exact path="/dashboard/orders" component={UserOrder}/>
                            {/*<Redirect to="/dashboard"/>*/}
                        </Switch>

                    </div>

                </div>
            </div>
        </>

    );
}

export default Dashboard;