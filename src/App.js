import React, {lazy, Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';

import ShopsPage from "./pages/shops-page/shops-page.page";
import ViewShopPage from "./pages/view-shop/view-shop.page";
import ContactPage from "./pages/contact-page/contact-page.page";
import FaqPage from "./pages/faq-page/faq-page.page";
import Dashoard from'../src/pages/dashboard/dashboard-page.page';
import UserProfile from './components/user-profile/user-profile.page';
import UserOrder from './components/user-order/user-order.page';

const Homepage = lazy(() => import("./pages/home-page/home-page.page"));


const App = () => {

    return (
        <>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/shops" component={ShopsPage} />
                    <Route exact path="/shops/shop" component={ViewShopPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/help" component={FaqPage} />
                    <Route exact path="/dashboard" component={Dashoard} />
                    {/*<Redirect to="/"/>*/}
                </Switch>
        </>
    );
}

export default App;
