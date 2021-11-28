import React from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import InstagramIcon from "../../components/icons/instagram";
import ProductsGrid from "../../components/products-grid/products-grid.compoenent";

const ContactPage = () => {
    return (
        <>
            <div className="view-shop-page">
                <NavigationBar/>
                <div className="view-shop-page__container view-shop-page__container--contact ">
                    <div className="left-block left-block--contact">
                        <div className="shop-description">
                            <img src="/images/products/contavt-image.png" alt="shop"/>
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
                    <div className="right-block form-container right-block--contact">
                        <div className="form">
                            <h1>Questions, Comments, Or Concerns?</h1>
                           <div className="two-inputs">
                               <div className="input-block">
                                   <label htmlFor="">Name</label>
                                   <input type={"text"} />
                               </div>
                               <div className="input-block">
                                   <label htmlFor="">Email</label>
                                   <input type={"email"} />
                               </div>
                           </div>
                            <div className="input-block">
                                <label htmlFor="">Subject</label>
                                <input type={"text"} />
                            </div>
                            <div className="input-block">
                                <label htmlFor="">Description</label>
                                <textarea rows={5}/>
                            </div>
                            <button className={"submit-btn"}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;