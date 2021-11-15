import React from 'react';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import ShopingBagIcon from "../icons/shopingBag";

const ShopCard = () => {
    return (
        <>
          <div className="shop-card">
              <div className="items-count">
                  <ShopingBagIcon/>
                    <div className={"count-number"}>0</div>
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