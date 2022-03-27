import React, {useState} from 'react';

//components
import ShoppingBagIcon from "../icons/shopingBag";
import ShoppingCardPopup from "../shopping-card-popup/shopping-card-popup-component";
import ContentLoader from "react-content-loader";

//the left shopping card component
const ShopCard = ({loading}) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        if (!modal)  document.body.style.overflow = 'hidden';
        else  document.body.style.overflow = 'unset';
    };

    return (
        <>
            <ShoppingCardPopup toggleModal={toggleModal} showModal={modal}/>
            <div className="shop-card" style={{backgroundColor: loading ?'transparent' : null}} onClick={() => toggleModal()}>

                {
                    loading
                    ?  <ContentLoader
                            speed={3}
                            width={"120%"}
                            height={"120%"}
                            viewBox="0 0 100% 656"
                            backgroundColor="#f2f2f2"
                            foregroundColor="#e1e1e1"
                        >
                            <rect x="0" y="0%" rx="3" ry="3" width="120%" height="120%"/>
                        </ContentLoader>
                        : <>
                            <div className="items-count">
                                {/*this is for the icon*/}
                                <ShoppingBagIcon/>

                                <div className="count-number">0</div>
                                <div className={"items"}>Item</div>
                            </div>
                            <div className="total">
                                0.00$
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default ShopCard;