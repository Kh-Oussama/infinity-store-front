import React, { useEffect } from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectGetStoreError, selectGetStoreLoading, selectStoreVar } from "../../redux/stores/stores.selectors";
import { getStoreStart } from "../../redux/stores/stores.actions";
import Spinner from "../../components/spinner/spinner.components";
import ProductsGridByStore from "../../components/products-grid/product-grid-by-store.components";
import BottomNavigationBar from "./../../components/bottom-navigation/bottom-navigation.component";

const ViewShopPage = ({ currentStore, getLoading, getErrors, getStore, match }) => {

    useEffect(() => {
        getStore({ name: match.params.shop });
    }, [getStore]);

    return (
        <>
            <div className="view-shop-page">
                <NavigationBar />
                {
                    getLoading
                        ? <div className='spinner-ct'><Spinner /></div>
                        : <div className="view-shop-page__container">
                            <div className="left-block view-shop-left-block">
                                <div className="shop-description">

                                    <img src={`http://localhost:8000/${currentStore.logo_path}`} alt=""/>

                                    <div className="name">{currentStore.name}</div>
                                    <div className="description">
                                        {currentStore.description}
                                    </div>
                                    <span>Read more</span>

                                    {/*<div className="insta">*/}
                                    {/*    <InstagramIcon/>*/}
                                    {/*</div>*/}

                                </div>
                                <div className="divider" />
                                <div className="shop-details">
                                    <div className="shop-details__item">
                                        <h1>Address</h1>
                                        <p>{currentStore.address}</p>
                                    </div>
                                    {/*<div className="shop-details__item">*/}
                                    {/*    <h1>Phone</h1>*/}
                                    {/*    <p>21342121221</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="shop-details__item">*/}
                                    {/*    <h1>Website</h1>*/}
                                    {/*    <div>*/}
                                    {/*        <span>https://redq.io/</span>*/}
                                    {/*        <span>Visit the site</span>*/}
                                    {/*    </div>*/}

                                    {/*</div>*/}

                                </div>
                            </div>
                            <div className="right-block">
                                {/* Shop name in responsive */}
                                <div className='shop-name-rs'>
                                    <div className='img-ct'>
                                        <img src="/images/shops/Furniture-thumbnail.jpg" alt="" />
                                    </div>

                                    <div className='detail-ct'>
                                        <h1>{currentStore.name}</h1>
                                        <p>{currentStore.description}</p>
                                    </div>
                                </div>
                                <div className="imgCover">
                                    <img src={`http://localhost:8000/${currentStore.cover_path}`} alt=""/>
                                </div>
                                <ProductsGridByStore />

                            </div>
                        </div>
                }
                <BottomNavigationBar />
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    currentStore: selectStoreVar,
    getLoading: selectGetStoreLoading,
    getErrors: selectGetStoreError,

});
const mapDispatchToProps = dispatch => ({
    getStore: Store => dispatch(getStoreStart(Store)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewShopPage));
