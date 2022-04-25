import React, {lazy, useEffect} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';

import ShopsPage from "./pages/shops-page/shops-page.page";
import ViewShopPage from "./pages/view-shop/view-shop.page";
import ContactPage from "./pages/contact-page/contact-page.page";
import FaqPage from "./pages/faq-page/faq-page.page";
import {fetchGroupsStart} from "./redux/group/groups.actions";
import {selectFetchGroupsLoading, selectGroups} from "./redux/group/groups.selectors";
import EyeLoader from "./components/EyeLoader/EyeLoader";
import Dashboard from "./pages/dashboard/dashboard-page.page";
import {selectCheckUserSessionLoading, selectCurrentUser, selectSignOutLoading} from "./redux/auth/auth.selectors";
import {checkUserSession} from "./redux/auth/auth.actions";
import ForgetPasswordPage from "./pages/Auth/forget-password/forget-password.page";
import ResetPasswordPage from "./pages/Auth/reset-password/reset-password.page";
import AuthPage from "./pages/Auth/auth-page/auth-page.component";

const ViewProductPage = lazy(() => import("./components/view-product-page/view-product-page.component"));
const Homepage = lazy(() => import("./pages/home-page/home-page.page"));


const App = ({
                 history,
                 fetchGroups,
                 loading,
                 errors,
                 groups,
                 currentUser,
                 checkLoading,
                 checkUserSession,
                 logOutLoading,

             }) => {

    useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);

    useEffect(() => {
        checkUserSession()
    }, [checkUserSession]);




    if (loading || checkLoading || logOutLoading) return <EyeLoader/>;
    return (
        <>
            {
                currentUser
                    ? (
                        <Switch>
                            <Route exact path="/shops" component={ShopsPage}/>
                            <Route exact path="/shops/:shop" component={ViewShopPage}/>
                            <Route exact path="/contact" component={ContactPage}/>
                            <Route exact path="/help" component={FaqPage}/>
                            <Route path="/products/:slug" component={ViewProductPage} />
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route path="/:group?" component={Homepage}/>
                            <Redirect to="/:group?"/>
                        </Switch>
                    )
                    : (
                        <Switch>
                            <Route exact path="/shops" component={ShopsPage}/>
                            <Route exact path="/shops/:shop" component={ViewShopPage}/>
                            <Route exact path="/contact" component={ContactPage}/>
                            <Route exact path="/help" component={FaqPage}/>
                            <Route path="/products/:slug" component={ViewProductPage} />
                            <Route exact path="/forget-password" component={ForgetPasswordPage}/>
                            <Route exact path="/auth" component={AuthPage}/>
                            <Route exact path="/reset-password/:email/:token" component={ResetPasswordPage}/>
                            <Route path="/:group?" component={Homepage}/>
                            <Redirect to="/:group?"/>
                        </Switch>
                    )
            }

        </>
    );
}

const mapStateToProps = createStructuredSelector({
    loading: selectFetchGroupsLoading,
    errors: selectFetchGroupsLoading,
    groups: selectGroups,

    currentUser: selectCurrentUser,
    checkLoading: selectCheckUserSessionLoading,
    logOutLoading: selectSignOutLoading,
});
const mapDispatchToProps = dispatch => ({
    fetchGroups: () => dispatch(fetchGroupsStart()),
    checkUserSession: () => dispatch(checkUserSession()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

