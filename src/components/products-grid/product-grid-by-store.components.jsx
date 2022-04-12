import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductsItem from "../products-item/products-item.compoenent";
import {createStructuredSelector} from "reselect";
import {
    fetchProductsByStoreFailure,
    fetchProductsByStoreStart,
    fetchProductsStart
} from "./../../redux/product/products.actions";
import {
    selectFetchProductsLoading, selectProducts, selectFetchProductsError
} from "./../../redux/product/products.selectors";
import Spinner from "../spinner/spinner.components";

const ProductsGridByStore = ({fetchProducts, loading, errors, products, match}) => {

    useEffect(() => {
        fetchProducts({name: match.params.shop});
    }, [fetchProducts,match.params.shop]);

    return (
        <>

            <div className="products-grid">
                {
                    loading
                        ? <Spinner/>
                        :
                        products?.map(product => {
                            return  <ProductsItem key={product.id} imgUrl={product.images[0].path} name={product.name} newPrice={product.price} oldPrice={product.old_price} promo={'20%'} product={product}/>
                        })
                }


            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectFetchProductsLoading,
    errors: selectFetchProductsLoading,
    products: selectProducts,
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: store => dispatch(fetchProductsByStoreStart(store)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsGridByStore));