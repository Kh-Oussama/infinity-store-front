import React, {useEffect, useState} from 'react';
import ProductPopup from "../product-popup/product-popup-component";

//Import loader of product item
import ProductItemLoader from "./product-item-loader.component";

const ProductsItem = ({imgUrl, name, newPrice, oldPrice, promo}) => {
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
        loading
            ? <ProductItemLoader/>
            :
            <>
                <ProductPopup showModal={modal} toggleModal={toggleModal}/>
                <div className="products-item" onClick={toggleModal}>
                    {
                        promo
                            ? <div className="percent"> {promo}</div>
                            : null
                    }

                    <div className="imgBlock">
                        <img src={`/images/products/${imgUrl}`} alt=""/>
                    </div>
                    <div className="detailsBlock">
                        <div className="priceBlock">
                            <div className="newPrice">{newPrice}</div>
                            <div className="oldPrice">{oldPrice ? oldPrice : null}</div>

                        </div>
                        <div className="productName">
                            {name}
                        </div>
                        <div className="action">
                            <button>
                                <span className={"text"}>Add</span>
                                <span className={"add"}>+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default ProductsItem;
