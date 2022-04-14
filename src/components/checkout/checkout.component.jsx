import React, { useLayoutEffect } from "react";
import NavigationBar from "./../navigartion-bar/navigation-bar.component";
import algeria from "./../../images/algeria.png";
import InfoButton from "../utils/info-button/info-button.component";
import AddressCard from "../utils/address-card/address-card.component";
import CheckBox from "../input-group/checkbox.component";
import InputGroup from "../input-group/input-group.component";
import TextAreaGroup from "../input-group/text-area-group.component";


const Checkout = () => {

    //Function to display updat number popup
    const showUpdatePopup = () => {
        document.querySelector('.phone-card .popup').classList.add('active');
    }

    //Function to display updat number popup
    const showAddressPopup = () => {
        document.querySelector('.address-card .popup').classList.add('active');
        window.addEventListener('scroll', e => false);
    }


    //Function to close update popup
    const closeUpdatePopup = _ => {
        let popup = document.querySelector('.phone-card .popup');
        popup.addEventListener('click', e => {

            if (!e.target.closest('.popup .content')) {
                popup.classList.remove('active');
            }
        });
    }

    //Function to close popup
    const closeAddressPopup = _ => {
        let popup = document.querySelector('.address-card .popup');
        popup.addEventListener('click', e => {

            if (!e.target.closest('.popup .content')) {
                popup.classList.remove('active');
            }
        });
    }



    useLayoutEffect(() => {
        closeUpdatePopup();
        closeAddressPopup()

        return () => {
            document.removeEventListener('click', closeUpdatePopup);
            document.removeEventListener('click', closeAddressPopup);
        }
    }, []);

    return (
        <div className="checkout-page">
            <NavigationBar />

            <div className="container">
                <div className="info-section">
                    <div className="card phone-card">
                        <div className="title">
                            <span>1</span>
                            <h1>Contact Number</h1>
                            <InfoButton icon="fa-solid fa-plus" text="Update" onClick={showUpdatePopup} />
                        </div>

                        <div className="info">
                            <div className="number">
                                <div>
                                    <img src={algeria} alt="" />
                                </div>
                                <input type="text" value={"0667885532"} disabled />
                            </div>
                            <div className="popup">
                                <div className="content">
                                    <p>Update Contact Number</p>

                                    <form>
                                        <div>
                                            <div>
                                                <img src={algeria} alt="" />
                                            </div>
                                            <input type="text" value={"545454343"} name="phoneNumber" onChange={() => { }} />
                                        </div>
                                        <input type="submit" value="update contact" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card address-card">
                        <div className="title">
                            <span>2</span>
                            <h1>Billing Address</h1>
                            <InfoButton icon="fa-solid fa-plus" text="Add" onClick={showAddressPopup} />
                        </div>

                        <div className="address-ct">
                            <AddressCard title="Billing" text="2231 Kidd Avenue, AK, Kipnuk, 99614, United States" />
                            <AddressCard title="Billing" text="2231 Kidd Avenue, AK, Kipnuk, 99614, United States" />
                        </div>

                        <div className="popup">
                            <div className="content">
                                <p>Add new address</p>
                                <form>
                                    <div className="checkbox-ct">
                                        <p>Type</p>
                                        <div>
                                            <CheckBox label="Billing" isChecked={true} onClick={() => { }} />
                                            <CheckBox label="Shipping" isChecked={false} onClick={() => { }} />
                                        </div>
                                    </div>

                                    <InputGroup label="Title" type="text" name="title" onChange={() => { }} />

                                    <div className="row">
                                        <InputGroup label="Country" type="text" name="country" onChange={() => { }} />
                                        <InputGroup label="City" type="text" name="city" onChange={() => { }} />
                                    </div>

                                    <div className="row">
                                        <InputGroup label="State" type="text" name="state" onChange={() => { }} />
                                        <InputGroup label="Zip" type="text" name="zip" onChange={() => { }} />
                                    </div>

                                    <TextAreaGroup label="Street Address" name="address" onChange={() => { }} />

                                    <input type="submit" value="Update address" />
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="card address-card">
                        <div className="title">
                            <span>3</span>
                            <h1>Shipping Address</h1>
                            <InfoButton icon="fa-solid fa-plus" text="Add" onClick={showAddressPopup} />
                        </div>

                        <div className="address-ct">
                            <AddressCard title="Shipping" text="2231 Kidd Avenue, AK, Kipnuk, 99614, United States" />
                            <AddressCard title="Shipping" text="2231 Kidd Avenue, AK, Kipnuk, 99614, United States" />
                        </div>
                    </div>
                </div>
                <div className="order-section">
                    <h2>Your order</h2>

                    <div className="order-list">
                        <div className="order-item">
                            <div className="product-name">
                                <span>1</span>
                                <i>x</i>
                                <span>Blueberries</span>
                                <i>|</i>
                                <span>1 lib</span>
                            </div>

                            <p>$0.60</p>
                        </div>

                        <div className="order-item">
                            <div className="product-name">
                                <span>1</span>
                                <i>x</i>
                                <span>Blueberries</span>
                                <i>|</i>
                                <span>1 lib</span>
                            </div>

                            <p>$0.60</p>
                        </div>

                        <div className="order-item">
                            <div className="product-name">
                                <span>1</span>
                                <i>x</i>
                                <span>Blueberries</span>
                                <i>|</i>
                                <span>1 lib</span>
                            </div>

                            <p>$0.60</p>
                        </div>
                    </div>

                    <div className="total">
                        <p>Sub Total</p>
                        <p>$15.60</p>
                    </div>

                    <button>Save Order</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;