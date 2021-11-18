import React from 'react';
import  {Redirect, Route, Switch} from 'react-router-dom';
import Homepage from "./pages/home-page/home-page.page";
import ProductPopup from "./components/product-popup/product-popup-component";
import ViewProduct from "./components/view-product/view-product.component";


const App = () => {
  return (
    <>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/test" component={ViewProduct}/>
            {/*<Redirect to="/"/>*/}
        </Switch>
      </>
  );
}

export default App;
