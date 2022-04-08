import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import LeftSideMenu from "../left-side-menu/left-side-menu.compoenent";
import ProductsGridRoutesRoutes from "./products-grid-routes.routes";

const ShoppingSection = ({group}) => {
    return (
        <>
            <div className="shop-container">
                <LeftSideMenu group={group} />
                <ProductsGridRoutesRoutes/>
            </div>
        </>
    )
}

export default ShoppingSection;