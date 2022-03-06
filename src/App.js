import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from "./pages/home-page/home-page.page";
import ShopsPage from "./pages/shops-page/shops-page.page";
import ViewShopPage from "./pages/view-shop/view-shop.page";
import ContactPage from "./pages/contact-page/contact-page.page";
import FaqPage from "./pages/faq-page/faq-page.page";
import Dashoard from './pages/dashboard/dashboard-page.page';


const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/shops" component={ShopsPage}/>
                <Route exact path="/shops/shop" component={ViewShopPage}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/help" component={FaqPage}/>
                <Route exact path="/dashboard" component={Dashoard} />
                {/*<Redirect to="/"/>*/}
            </Switch>
        </>
    );
}

export default App;
