import React, {useState} from 'react';
import ProductPopup from "../product-popup/product-popup-component";

const ProductsItem = ({imgUrl, name, newPrice, oldPrice, promo}) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
       if (!modal)  document.body.style.overflow = 'hidden';
       else  document.body.style.overflow = 'unset';
    };

    return (
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