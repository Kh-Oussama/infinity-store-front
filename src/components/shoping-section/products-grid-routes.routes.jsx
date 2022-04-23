import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import ProductsGridForGroup from "../products-grid/products-grid-group.compoenent";
import ProductsGridForCategories from "../products-grid/products-grid-for-category.compoenent";
import ProductsGridForSubCategories from "../products-grid/products-grid-sub-categories.compoenent";


const ShoppingRoutes = () => {
    return (
        <Switch>
            {/*shopping routing*/}
            <Route exact path="/:group" component={ProductsGridForGroup}/>
            <Route exact path="/:group/categories/:slug" component={ProductsGridForCategories}/>
            <Route exact path="/:group/sub-categories/:slug" component={ProductsGridForSubCategories}/>

            <Redirect to="/:group?"/>
        </Switch>
    )
}

const mapStateToProps = createStructuredSelector({});


export default connect(mapStateToProps, null)(ShoppingRoutes);
