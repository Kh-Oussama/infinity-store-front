import React, {useState} from 'react';

//components
import ShoppingBagIcon from "../icons/shopingBag";
import ShoppingCardPopup from "../shopping-card-popup/shopping-card-popup-component";

//the left shopping card component
const ShopCard = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        if (!modal)  document.body.style.overflow = 'hidden';
        else  document.body.style.overflow = 'unset';
    };

    return (
        <>
            <ShoppingCardPopup toggleModal={toggleModal} showModal={modal}/>
            <div className="shop-card" onClick={() => toggleModal()}>
                <div className="items-count">
                    {/*this is for the icon*/}
                    <ShoppingBagIcon/>

                    <div className="count-number">0</div>
                    <div className={"items"}>Item</div>
                </div>
                <div className="total">
                    0.00$
                </div>
            </div>
        </>
    )
}

export default ShopCard;