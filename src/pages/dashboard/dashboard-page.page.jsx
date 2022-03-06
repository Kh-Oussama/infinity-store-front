import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";

const Dashoard = () => {

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
                                    <Link className="active" to="/dashboard" onClick={toogleActiveLink}>Profile</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" onClick={toogleActiveLink}>Change Password</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" onClick={toogleActiveLink}>My Orders</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" onClick={toogleActiveLink}>My Refunds</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" onClick={toogleActiveLink}>Need Help</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="/dashboard">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="main">

                    </div>
                </div>
            </div>
        </>

    );
}

export default Dashoard;