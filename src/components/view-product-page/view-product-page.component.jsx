import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "./../../redux/product/products.selectors";
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import BottomNavigationBar from "./../../components/bottom-navigation/bottom-navigation.component";
import ViewProduct from "./../view-product/view-product.component";
import ProductsItem from "./../products-item/products-item.compoenent";
import { useHistory } from "react-router-dom";
import Spinner from "../spinner/spinner.components";

const ViewProductPage = ({ products }) => {
    let { slug } = useParams();
    let history = useHistory();

    return (
        <div className="view-product-page">
            <NavigationBar />
            <div className="view-product-ct">
                <div className="back">
                    <span onClick={() => history.goBack()}><i className="fa-solid fa-arrow-left-long"></i> Back</span>
                </div>

                <ViewProduct product={products.find(p => p.slug === slug)} />

                <div className="related-products-ct">
                    <div className="title-ct">
                        <h1>Related product</h1>
                    </div>

                    <div className="related-products">
                        {products.map(product => {
                            return <ProductsItem key={product.id} item={product} imgUrl={product.images[0].path} name={product.name} newPrice={product.price} oldPrice={product.old_price} promo={'20%'} product={product} />
                        })}
                    </div>
                </div>
            </div>
            <BottomNavigationBar />
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    products: selectProducts,
});

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(ViewProductPage);