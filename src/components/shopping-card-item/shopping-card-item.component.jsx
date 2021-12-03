import React from 'react';
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/plusIcon";
import CloseIcon from "../icons/close-icon.component";

const ShoppingCardItem = () => {
    return (
        <>
            <div className="shopping-card-item">
                <div className="leftBlock">
                    <div className="minus">
                      -
                    </div>
                    <div className="qnt">10</div>
                    <div className="plus">
                      +
                    </div>
                </div>
                <div className="centerBlock">
                        <img src="/images/products/Apples.jpg" alt=""/>
                    <div className="details">
                        <div className="name">
                            Apples
                        </div>
                        <div className="price">
                            $1.60
                        </div>

                        <div className="qnt">
                        <span>10</span>
                            <div className={"iconContainer"}><CloseIcon/></div>
                        <span>1lb</span>
                        </div>
                    </div>
                </div>
                <div className="rightBlockContainer">
                    <div className="total">
                        $16.00
                    </div>
                    <div className="deleteIcon" >
                        <CloseIcon/>
                    </div>
                </div>


            </div>
            <div className="divider"/>
            </>
    )
}

export default ShoppingCardItem;