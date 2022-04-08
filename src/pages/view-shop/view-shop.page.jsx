import React from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import iconSet from "../../selection.json";
import IcomoonReact from "icomoon-react";
import InstagramIcon from "../../components/icons/instagram";
import ProductsGrid from "../../components/products-grid/products-grid-group.compoenent";

const ViewShopPage = () => {
    return (
        <>
            <div className="view-shop-page">
                <NavigationBar/>
                <div className="view-shop-page__container">
                <div className="left-block">
                    <div className="shop-description">
                        <img src="/images/shops/Furniture-thumbnail.jpg" alt="shop"/>
                        <div className="name">Furniture Shop</div>
                        <div className="description">
                            The furniture shop is the best shop around the city. This is being run...
                        </div>
                        <span>Read more</span>
                        <div className="insta">
                            <InstagramIcon/>
                        </div>

                    </div>
                    <div className="divider"/>
                    <div className="shop-details">
                        <div className="shop-details__item">
                            <h1>Address</h1>
                            <p>588 Finwood Road, New Jersey, East Dover, 08753, USA</p>
                        </div>
                        <div className="shop-details__item">
                            <h1>Phone</h1>
                            <p>21342121221</p>
                        </div>
                        <div className="shop-details__item">
                            <h1>Website</h1>
                            <div>
                                <span>https://redq.io/</span>
                                <span>Visit the site</span>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="right-block">
                    <div className="imgCover">
                        <img src="/images/products/image-cover.jpg" alt=""/>
                    </div>
                    <ProductsGrid/>

                </div>
                </div>
            </div>
        </>
    )
}

export default ViewShopPage;