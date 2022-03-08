import React, { useEffect, useState } from "react";
import CheckBox from "../input-group/checkbox.component";
import InputGroup from "../input-group/input-group.component";
import TextAreaGroup from "../input-group/text-area-group.component";
import algeria from "./../../images/algeria.png";

const UserProfile = () => {
    const [selectedCheckBox, setSelectedCheckBox] = useState(0);
    const [crendentls, setCredentls] = useState({
        name: '',
        bio: '',
    });

    const { name, bio } = crendentls;

    //Function to show image input
    const showInput = () => {
        document.querySelector(".upload-img input").click();
    }

    //Function to handle change of profile
    const handleChange = e => {
        const event = e.target;
        setCredentls({
            ...crendentls,
            [event.name]: event.value,
        });
    }

    //Function to close update popup
    const closeUpdatePopup = _ => {
        let popup = document.querySelector('.user-profile .popup');
        popup.addEventListener('click', e => {

            if (!e.target.closest('.popup .content')) {
                popup.classList.remove('active');
            }
        });
    }

    //Function to close popup
    const closeAddressPopup = _ => {
        let popup = document.querySelector('.address .popup');
        popup.addEventListener('click', e => {

            if (!e.target.closest('.popup .content')) {
                popup.classList.remove('active');
            }
        });
    }

    //Function to display updat number popup
    const showUpdatePopup = () => {
        document.querySelector('.user-profile .popup').classList.add('active');
    }

    //Function to display updat number popup
    const showAddressPopup = () => {
        document.querySelector('.address .popup').classList.add('active');
        window.addEventListener('scroll', e => false);
    }

    useEffect(() => {
        closeUpdatePopup();
        closeAddressPopup();

        return () => {
            document.removeEventListener('click', closeUpdatePopup);
            document.removeEventListener('click', closeAddressPopup);
        }
    }, []);

    return (
        <div className="user-profile">
            <div className="profile-update">
                <form>
                    <div className="upload-img-ct">
                        <div className="upload-img" onClick={() => showInput()}>
                            <input
                                type="file"
                                accept="image/*"
                                name="image"
                            />
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            <p><span>Upload an image</span> or drag and drop PNG, JPG</p>
                        </div>
                    </div>

                    <InputGroup label="Name" name="name" type="text" value={name} onChange={handleChange} />

                    <TextAreaGroup label="Bio" name="bio" value={bio} onChange={handleChange} />

                    <div className="submit-ct">
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>

            <div className="update-number">
                <div className="content">
                    <p>Contact Number</p>
                    <button onClick={showUpdatePopup}><i className="fa-solid fa-plus"></i> Update</button>
                </div>

                <div className="info">
                    <div className="number">
                        <div>
                            <img src={algeria} alt="" />
                        </div>
                        <input type="text" value="+213 600 000 000" disabled />
                    </div>
                </div>

                <div className="popup">
                    <div className="content">
                        <p>Update Contact Number</p>

                        <form>
                            <div>
                                <div>
                                    <img src={algeria} alt="" />
                                </div>
                                <input type="text" value="+213 600 000 000" />
                            </div>
                            <input type="submit" value="update contact" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="address">
                <div className="content">
                    <p>Addresses</p>
                    <button onClick={showAddressPopup}><i className="fa-solid fa-plus"></i> Add</button>
                </div>

                <div className="address-ct">
                    <div className="address-item">
                        <h3>Billing</h3>
                        <p>2231 Kidd Avenue, AK, Kipnuk, 99614, United States</p>
                    </div>

                    <div className="address-item">
                        <h3>Shipping</h3>
                        <p>2231 Kidd Avenue, AK, Kipnuk, 99614, United States</p>
                    </div>
                </div>

                <div className="popup">
                    <div className="content">
                        <p>Add new address</p>
                        <form>
                            <div className="checkbox-ct">
                                <p>Type</p>
                                <div>
                                    <CheckBox label="Billing" isChecked={selectedCheckBox === 0} onClick={() => setSelectedCheckBox(0)} />
                                    <CheckBox label="Shipping" isChecked={selectedCheckBox === 1} onClick={() => setSelectedCheckBox(1)}/>
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
        </div>
    );
}

export default UserProfile;