import React from 'react';
import CloseIcon from "../icons/close-icon.component";
import {createStructuredSelector} from "reselect";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const ShoppingCardItem = ({removeItem, item, clearItem, addItem}) => {
    return (
        <>
            <div className="shopping-card-item">
                <div className="leftBlock">
                    <div className="minus" onClick={() => removeItem(item)}>
                        -
                    </div>
                    <div className="qnt">{item.quantity}</div>
                    <div className="plus" onClick={() => addItem(item)}>
                        +
                    </div>
                </div>
                <div className="centerBlock">
                    <img src={`http://localhost:8000/${item.images[0].path}`} alt=""/>
                    <div className="details">
                        <div className="name">
                            {item.name}
                        </div>
                        <div className="price">
                            {item.price}
                        </div>

                        <div className="qnt">
                            <div className="detail-sizes-block" >
                                <div className="detail-sizes-block-items" >
                                    <div className={`category-item item`}>
                                        {item.size?.name}
                                    </div>
                                </div>
                            </div>
                            <div className={"iconContainer"}><CloseIcon/></div>
                            <div className="detail-sizes-block" >
                                <div className="detail-sizes-block-items" >
                                    <div className={`category-item item color-cart  ${item.color?.name}`} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightBlockContainer">
                    <div className="total">
                        {item.price * item.quantity}
                    </div>
                    <div className="deleteIcon" onClick={() => clearItem(item)}>
                        <CloseIcon/>
                    </div>
                </div>


            </div>
            <div className="divider"/>
        </>
    )
}

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCardItem));

