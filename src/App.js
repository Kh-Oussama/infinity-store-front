import React from 'react';
import  {Redirect, Route, Switch} from 'react-router-dom';
import Homepage from "./pages/home-page/home-page.page";


const App = () => {
  return (
    <>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Redirect to="/"/>
        </Switch>
      </>
  );
}

export default App;
