import React, {lazy, useEffect} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';

import ShopsPage from "./pages/shops-page/shops-page.page";
import ViewShopPage from "./pages/view-shop/view-shop.page";
import ContactPage from "./pages/contact-page/contact-page.page";
import FaqPage from "./pages/faq-page/faq-page.page";
import Dashoard from '../src/pages/dashboard/dashboard-page.page';
import {fetchGroupsStart} from "./redux/group/groups.actions";
import {selectFetchGroupsLoading, selectGroups} from "./redux/group/groups.selectors";
import EyeLoader from "./components/EyeLoader/EyeLoader";

const Homepage = lazy(() => import("./pages/home-page/home-page.page"));


const App = ({history, fetchGroups, loading, errors, groups}) => {

    useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);


    if (loading) return <EyeLoader/>;
    return (
        <>
            <Switch>
                <Route exact path="/:group" component={Homepage}/>
                <Route exact path="/shops" component={ShopsPage}/>
                <Route exact path="/shops/shop" component={ViewShopPage}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/help" component={FaqPage}/>
                <Route exact path="/dashboard" component={Dashoard}/>
                <Redirect to="/"/>
            </Switch>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    loading: selectFetchGroupsLoading,
    errors: selectFetchGroupsLoading,
    groups: selectGroups,

});
const mapDispatchToProps = dispatch => ({
    fetchGroups: () => dispatch(fetchGroupsStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


