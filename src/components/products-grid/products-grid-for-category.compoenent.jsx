import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {fetchProductsByCategoryStart, fetchProductsStart} from "./../../redux/product/products.actions";
import {selectFetchProductsLoading, selectProducts} from "./../../redux/product/products.selectors";
import ProductsItem from "../products-item/products-item.compoenent";
import Spinner from "../spinner/spinner.components";

const ProductsGridForCategories = ({fetchProducts, loading, errors, products, match}) => {

    useEffect(() => {
        fetchProducts({slug: match.params.slug});
    }, [fetchProducts,match.params.slug]);

    return (
        <>
            <div className="products-grid">
                {
                    loading
                        ? <Spinner custom />
                        :
                        products?.map(product => {
                            return  <ProductsItem key={product.id} item={product} imgUrl={product.images[0].path} name={product.name} newPrice={product.price} oldPrice={product.old_price} promo={'20%'} product={product}/>
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
    fetchProducts: category => dispatch(fetchProductsByCategoryStart(category)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsGridForCategories));