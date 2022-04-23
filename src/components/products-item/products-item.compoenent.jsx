import React, {useEffect, useState} from 'react';
import ProductPopup from "../product-popup/product-popup-component";

//Import loader of product item
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";

const ProductsItem = ({imgUrl, name, newPrice, oldPrice, promo, product,addItem,item}) => {
    const [modal, setModal] = useState(false);

    //pour tester
    const [loading, setLoading] = useState(true);

    const toggleModal = () => {
        setModal(!modal);
    };

    //wait 6 seconds
    useEffect(() => {
        let timer = null;
        timer = setTimeout(() => {
            setLoading(false)
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (

        <>
            <ProductPopup showModal={modal} product={product} toggleModal={toggleModal}/>
            <div className="products-item" onClick={toggleModal}>
                {
                    promo
                        ? <div className="percent"> {promo}</div>
                        : null
                }

                <div className="imgBlock" >
                    <img src={`http://localhost:8000/${imgUrl}`} alt=""/>
                </div>
                <div className="detailsBlock" >
                    <div className="priceBlock">
                        <div className="newPrice">{newPrice} Da</div>
                        <div className="oldPrice">{oldPrice ? oldPrice : null} Da</div>

                    </div>
                    <div className="productName">
                        {name}
                    </div>
                    <div className="action">
                        <button >
                                <span className={"text"}>view</span>
                            <span className={"add"}></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsItem));

