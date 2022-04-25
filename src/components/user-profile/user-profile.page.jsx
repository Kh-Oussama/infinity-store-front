import React, { useEffect, useState } from "react";
import CheckBox from "../input-group/checkbox.component";
import InputGroup from "../input-group/input-group.component";
import TextAreaGroup from "../input-group/text-area-group.component";
import algeria from "./../../images/algeria.png";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfileInformationStart } from "../../redux/auth/auth.actions";

const UserProfile = ({ updateUser, currentUser }) => {

    //Credentials of user
    const [credentials, setCredentials] = useState({
        name: '',
        lastName: '',
        email: '',
        phoneNumber: '0600000000'
    });
    const { name, lastName, email, phoneNumber } = credentials;

    // Address informations
    const [addressInfo, setAddressInfo] = useState({
        title: '', country: '', city: '', state: '', zip: '', streetAddress: ''
    });
    const { title, country, city, state, zip, streetAddress } = addressInfo;

    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(0);


    const [image_path, setImage_path] = useState("");
    const [image, setImage] = useState("");

    //Function to show image input
    const showInput = () => {
        document.querySelector(".upload-img input").click();
    }

    //Function to handle crendentials change of profile
    const handleCrendentialsChange = e => {
        const event = e.target;
        setCredentials({
            ...credentials,
            [event.name]: event.value,
        });
    }

    //Function to handle address info change
    const handleAddressInformationChange = e => {
        let event = e.target;
        setAddressInfo({
            ...addressInfo,
            [event.name]: event.value,
        });
    }

    //Function to close update popup
    const closeUpdatePopup = _ => {
        let popup = document.querySelector('.user-profile .popup');
        popup.addEventListener('click', e => {

            if (!e.target.closest('.popup .content') || e.target.closest(".popup .content input[type='button']")) {
                popup.classList.remove('active');
            }
        });
    }

    //Function to close popup
    const closeAddressPopup = _ => {
        let popup = document.querySelector('.address .popup');
        popup.addEventListener('click', e => {
            if (!e.target.closest('.popup .content') || e.target.closest(".popup .content input[type='button']")) {
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

    //Function to select photo
    const handlePhotoChange = async event => {
        if (event.target.files && event.target.files[0]) {
            let rd = new FileReader();
            rd.onload = (e) => {
                setImage(e.target.result);
            };
            rd.readAsDataURL(event.target.files[0]);
        }
        try {
            const file = event.target.files[0];
            setImage_path(file);
        } catch (err) {
            console.log(err);
        }
    }

    //Function to submit credentials information
    const handleCredentialsSubmit = event => {
        event.preventDefault();

        //console.log(title+' '+country+' '+city+' '+state+' '+zip+' '+streetAddress);
        //
        // setFirstNameError(null);
        // setLastNameError(null);
        // setEmailError(null);
        // setPhotoError(null);

        const formData = new FormData();
        formData.append('firstName', name);
        formData.append('lastName', lastName);
        formData.append('email', email);
        //formData.append('address', title + ' ' + country + ' ' + city + ' ' + state + ' ' + zip + ' ' + streetAddress);
        formData.append('address', addresses[selectedAddress]);
        formData.append('photo', image_path);
        formData.append('_method', 'PATCH');

        updateUser({ id: currentUser.id, formData });

    }

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
                                onChange={handlePhotoChange}
                            />
                            {
                                image
                                    ? <div className="profile-img">
                                        <img src={image} alt="User Photo" />
                                    </div>
                                    : currentUser.photo_path
                                        ? <div className="profile-img">
                                            <img src={`http://localhost:8000/${currentUser.photo_path}`} alt="User Photo" />
                                        </div>
                                        : null
                            }
                            <span><i className="fa-solid fa-cloud-arrow-up" /></span>
                            <p><span>Upload an image</span> or drag and drop PNG, JPG</p>
                        </div>
                    </div>

                    <InputGroup label="First name" name="name" type="text" value={name} onChange={handleCrendentialsChange} />
                    <InputGroup label="Last name" name="lastName" type="text" value={lastName} onChange={handleCrendentialsChange} />
                    <InputGroup label="Email" name="email" type="text" value={email} onChange={handleCrendentialsChange} />


                </form>
                <div className="update-number">
                    <div className="content">
                        <p>Contact Number</p>
                        <button onClick={showUpdatePopup}>
                            <i className="fa-solid fa-plus" />
                            Update
                        </button>
                    </div>

                    <div className="info">
                        <div className="number">
                            <div>
                                <img src={algeria} alt="" />
                            </div>
                            <input type="text" value={phoneNumber} disabled />
                        </div>
                    </div>

                    <div className="popup">
                        <div className="content">
                            <p>Update Contact Number</p>

                            <div>
                                <div>
                                    <div>
                                        <img src={algeria} alt="" />
                                    </div>
                                    <input type="text" value={phoneNumber} name="phoneNumber" onChange={handleCrendentialsChange} />
                                </div>
                                <input type="button" value="update contact" onClick={closeUpdatePopup} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="address">
                    <div className="content">
                        <p>Addresses</p>
                        <button onClick={showAddressPopup}><i className="fa-solid fa-plus"></i> Add</button>
                    </div>

                    <div className="address-ct">
                        {addresses.map((address, index) => {
                            return (
                                <div className={`address-item ${selectedAddress === index?'active':''}`} onClick={() => setSelectedAddress(index)}>
                                    <h3>Address</h3>
                                    <p>{address}</p>
                                </div>
                            );
                        })}

                    </div>

                    <div className="popup">
                        <div className="content">
                            <p>Add new address</p>
                            <div>
                                <InputGroup label="Title" type="text" name="title" value={title} onChange={handleAddressInformationChange} />

                                <div className="row">
                                    <InputGroup label="Country" type="text" name="country" value={country} onChange={handleAddressInformationChange} />
                                    <InputGroup label="City" type="text" name="city" value={city} onChange={handleAddressInformationChange} />
                                </div>

                                <div className="row">
                                    <InputGroup label="State" type="text" name="state" value={state} onChange={handleAddressInformationChange} />
                                    <InputGroup label="Zip" type="text" name="zip" value={zip} onChange={handleAddressInformationChange} />
                                </div>

                                <TextAreaGroup label="Street Address" name="streetAddress" value={streetAddress} onChange={handleAddressInformationChange} />

                                <input type="button" value="Update address" onClick={_ => {
                                    closeAddressPopup();
                                    setAddresses([...addresses, `${title} ${country} ${city} ${state} ${zip} ${streetAddress}`]);
                                    setAddressInfo({title: '', country: '', city: '', state: '', zip: '', streetAddress: ''})
                                }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="submit-ct">
                    <input type="submit" value="Save" onClick={handleCredentialsSubmit} />
                </div>
            </div>
        </div>
    );
}



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateProfileInformationStart(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));

