import React from 'react';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";

const ShopsCollection = () => {
    return (
        <>
            <div className="shops-container">
                <div className="shops-container__title">
                    All Shops
                </div>
                <div className="shops">
                    <div className="shop">
                        <div className="imgBlock">
                            <img src="/images/shops/Furniture-thumbnail.jpg" alt="shop"/>
                        </div>
                        <div className="details">
                            <div className="name">
                                Furniture Shop
                            </div>
                            <div className="address">
                                <IcomoonReact iconSet={iconSet} size={25} icon="map"/>
                                 Finwood Road, New Jersey, East Dover, 08753, USA
                            </div>
                        </div>
                    </div>
                    <div className="shop">
                        <div className="imgBlock">
                            <img src="/images/shops/fashion-thumbnail.jpg" alt="shop"/>
                        </div>
                        <div className="details">
                            <div className="name">
                                Furniture Shop
                            </div>
                            <div className="address">
                                <IcomoonReact iconSet={iconSet} size={25} icon="map"/>
                                 Finwood Road, New Jersey, East Dover, 08753, USA
                            </div>
                        </div>
                    </div>
                    <div className="shop">
                        <div className="imgBlock">
                            <img src="/images/shops/Backpack-thumbnail.jpg" alt="shop"/>
                        </div>
                        <div className="details">
                            <div className="name">
                                Furniture Shop
                            </div>
                            <div className="address">
                                <IcomoonReact iconSet={iconSet} size={25} icon="map"/>
                                 Finwood Road, New Jersey, East Dover, 08753, USA
                            </div>
                        </div>
                    </div>
                    <div className="shop">
                        <div className="imgBlock">
                            <img src="/images/shops/Backpack-thumbnail.jpg" alt="shop"/>
                        </div>
                        <div className="details">
                            <div className="name">
                                Furniture Shop
                            </div>
                            <div className="address">
                                <IcomoonReact iconSet={iconSet} size={25} icon="map"/>
                                Finwood Road, New Jersey, East Dover, 08753, USA
                            </div>
                        </div>
                    </div>
                    <div className="shop">
                        <div className="imgBlock">
                            <img src="/images/shops/Furniture-thumbnail.jpg" alt="shop"/>
                        </div>
                        <div className="details">
                            <div className="name">
                                Furniture Shop
                            </div>
                            <div className="address">
                                <IcomoonReact iconSet={iconSet} size={25} icon="map"/>
                                Finwood Road, New Jersey, East Dover, 08753, USA
                            </div>
                        </div>
                    </div>
                    <div className="shop">
                        <div className="imgBlock">
                            <img src="/images/shops/fashion-thumbnail.jpg" alt="shop"/>
                        </div>
                        <div className="details">
                            <div className="name">
                                Furniture Shop
                            </div>
                            <div className="address">
                                <IcomoonReact iconSet={iconSet} size={25} icon="map"/>
                                Finwood Road, New Jersey, East Dover, 08753, USA
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         </>
    )
}

export default ShopsCollection;