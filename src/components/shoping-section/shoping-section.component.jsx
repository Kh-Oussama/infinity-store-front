import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import LeftSideMenu from "../left-side-menu/left-side-menu.compoenent";
import ProductsGrid from "../products-grid/products-grid.compoenent";

const ShoppingSection = ({ group }) => {
    return (
        <>
            <div className="shop-container">
                <LeftSideMenu group={group} />
                <ProductsGrid />
            </div>
        </>
    )
}

export default ShoppingSection;