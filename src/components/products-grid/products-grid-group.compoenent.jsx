import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductsItem from "../products-item/products-item.compoenent";
import {createStructuredSelector} from "reselect";
import {fetchProductsStart} from "./../../redux/product/products.actions";
import {
    selectFetchProductsLoading, selectProducts, selectFetchProductsError
} from "./../../redux/product/products.selectors";
import Spinner from "../spinner/spinner.components";

const ProductsGridForGroup = ({fetchProducts, loading, errors, products, match}) => {

    useEffect(() => {
        fetchProducts({name: match.params.group});
    }, [fetchProducts,match.params.group]);

    return (
        <>

            <div className="products-grid">
                {
                    loading
                    ? <Spinner/>
                        :
                            products?.map(product => {
                            return  <ProductsItem imgUrl={product.images[0].path} name={product.name} newPrice={product.price} oldPrice={product.old_price} promo={'20%'} product={product}/>
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
    fetchProducts: group => dispatch(fetchProductsStart(group)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsGridForGroup));