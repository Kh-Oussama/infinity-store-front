import React, {useEffect} from 'react';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {fetchStoresStart} from "../../redux/stores/stores.actions";
import {selectFetchStoresLoading, selectStores} from "../../redux/stores/stores.selectors";
import Spinner from "../spinner/spinner.components";
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';


const ShopsCollection = ({loading, errors, stores, fetchStores, history, t}) => {
    useEffect(() => {
        fetchStores();
    }, [fetchStores]);


    if (loading) return <div className='spinner-ct'><Spinner/></div>;
    return (
        <>
            <div className="shops-container">
                <div className="shops-container__title">
                    {t('All Shops')}
                </div>
                <div className="shops">
                    {
                        stores.map(store => (
                            <div className="shop" onClick={() => history.push(`/shops/${store.name}`)}>
                                <div className="imgBlock">
                                    <img src={`http://localhost:8000/${store.logo_path}`} alt="shop"/>
                                </div>
                                <div className="details">
                                    <div className="name">
                                        {store.name}
                                    </div>
                                    <div className="address">
                                        <IcomoonReact iconSet={iconSet} size={25} icon="map"/>
                                        {store.address}
                                    </div>
                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectFetchStoresLoading,
    errors: selectFetchStoresLoading,
    stores: selectStores,

});
const mapDispatchToProps = dispatch => ({
    fetchStores: () => dispatch(fetchStoresStart()),
});

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopsCollection)));
