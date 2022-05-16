import React, { useEffect, useState } from "react";
import CheckBox from "../input-group/checkbox.component";
import InputGroup from "../input-group/input-group.component";
import TextAreaGroup from "../input-group/text-area-group.component";
import algeria from "./../../images/algeria.png";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser, selectProfileInformationErrors } from "../../redux/auth/auth.selectors";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfileInformationStart } from "../../redux/auth/auth.actions";
import NoResult from "../no-result/no-result.component";
import Select from "react-select";
import WilayaOption from "./wilaya-option.component";

const UserProfile = ({ updateUser, currentUser, errors }) => {

    //Credentials of user
    const [credentials, setCredentials] = useState({
        name: '',
        lastName: '',
        email: '',
        phoneNumber: '0600000000'
    });
    const { name, lastName, email, phoneNumber } = credentials;

    // Address information
    const [addressInfo, setAddressInfo] = useState({
        commune: '', zip: '', streetAddress: ''
    });
    const {  commune,  zip, streetAddress } = addressInfo;

    const [addresses, setAddresses] = useState([]);


    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [addressError, setAddressError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [photoError, setPhotoError] = useState(null);
    const [wilaya, setWilaya] = useState(null);


    const [image_path, setImage_path] = useState("");
    const [image, setImage] = useState("");

    const wilayaOptions = [
        { label: 'Alger', id: '16', value: '16' },
        { label: 'Constantine', id: '25', value: '25' },
        { label: 'Oum El Bouaghi', id: '04', value: '04' },
        { label: 'Oran', id: '28', value: '28' },
    ];

    //Function to show image input
    const showInput = () => {
        document.querySelector(".upload-img input").click();
    }

    //Function to handle credentials change of profile
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

    //Function to display update number popup
    const showUpdatePopup = () => {
        document.querySelector('.user-profile .popup').classList.add('active');
    }

    //Function to display update number popup
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

    //detect if error change
    useEffect(() => {
        if (errors) {
            if (errors.firstName) setFirstNameError(errors.firstName); else setFirstNameError(null);
            if (errors.lastName) setLastNameError(errors.lastName); else setLastNameError(null);
            if (errors.email) setEmailError(errors.email); else setEmailError(null);
            if (errors.phone_number) setPhoneError(errors.phone_number); else setPhoneError(null);
            if (errors.address) setAddressError(errors.address); else setAddressError(null);
        }

    }, [errors]);


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

    useEffect(() => {
        if (currentUser) {
            setCredentials({
                ...credentials,
                name: currentUser.name,
                lastName: currentUser.lastName,
                email: currentUser.email,
                phoneNumber: currentUser.phone_number,
            });
            setAddresses(currentUser.addresses)
        }
    }, [currentUser]);

    //Function to submit credentials information
    const handleCredentialsSubmit = event => {
        event.preventDefault();

        setFirstNameError(null);
        setLastNameError(null);
        setEmailError(null);
        setPhoneError(null);
        setAddressError(null);
        setPhotoError(null);

        const formData = new FormData();
        formData.append('firstName', name);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('addresses[]', JSON.stringify(addresses));
        formData.append('phone_number', phoneNumber);
        formData.append('photo', image_path);
        formData.append('_method', 'PATCH');

        updateUser({ id: currentUser.id, formData });
    }

    return (
        <div className="user-profile">
            <div className="profile-update">
                <form>
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
                    <div className="upload-img-ct">
                        <div className="upload-img" onClick={() => showInput()}>
                            <input
                                type="file"
                                accept="image/*"
                                name="image"
                                onChange={handlePhotoChange}
                            />
                            <span><i className="fa-solid fa-cloud-arrow-up" /></span>
                            <p><span>Upload an image</span> or drag and drop PNG, JPG</p>
                        </div>
                    </div>

                    <InputGroup label="First name" name="name" type="text" value={name} onChange={handleCrendentialsChange} />
                    {
                        firstNameError
                        &&
                        <span className={"input-validation-errors"}>
                            <i className="fa-solid fa-triangle-exclamation" />
                            {firstNameError}

                        </span>
                    }
                    <InputGroup label="Last name" name="lastName" type="text" value={lastName} onChange={handleCrendentialsChange} />
                    {
                        lastNameError
                        &&
                        <span className={"input-validation-errors"}>
                            <i className="fa-solid fa-triangle-exclamation" />
                            {lastNameError}

                        </span>
                    }
                    <InputGroup label="Email" name="email" type="text" value={email} onChange={handleCrendentialsChange} />
                    {
                        emailError
                        &&
                        <span className={"input-validation-errors"}>
                            <i className="fa-solid fa-triangle-exclamation" />
                            {emailError}

                        </span>
                    }

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
                        {
                            phoneError
                            &&
                            <span className={"input-validation-errors"}>
                                <i className="fa-solid fa-triangle-exclamation" />
                                {phoneError}

                            </span>
                        }
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
                        <button onClick={showAddressPopup}><i className="fa-solid fa-plus" /> Add</button>
                    </div>

                    {addresses.length !== 0 ?
                        <div className="address-ct">
                            {addresses.map((address, index) => {
                                return (
                                    <div className={"address-item"}>
                                        <h3>Address</h3>
                                        <p> {
                                            address.wilaya_id + " " + address.wilaya_name + " " + address.commune + " " + address.zip + " " +
                                            address.street + " - Algerie"
                                        }</p>
                                    </div>
                                );
                            })}
                            {
                                addressError
                                &&
                                <span className={"input-validation-errors"}>
                                    <i className="fa-solid fa-triangle-exclamation" />
                                    {addressError}

                                </span>
                            }
                        </div> : <NoResult />}

                    <div className="popup">
                        <div className="content">
                            <p>Add new address</p>
                            <div>
                                <InputGroup label="Country" type="text" name="title" value={"Algérie"} onChange={handleAddressInformationChange} disabled={true} />
                                <div className="row">
                                    <div className="wilaya-select">
                                        <span>Wilaya</span>
                                        <Select
                                            className="react-select-container"
                                            options={wilayaOptions}
                                            components={{ Option: WilayaOption }}
                                            name="wilaya"
                                            onChange={value => {setWilaya(value)}}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    primary: '#009f7f',
                                                },
                                            })}
                                        />
                                    </div>
                                    <InputGroup label="Commune" type="text" name="commune" value={commune} onChange={handleAddressInformationChange} />
                                </div>
                                <div className="row">
                                    <InputGroup label="Zip" type="text" name="zip" value={zip} onChange={handleAddressInformationChange} />
                                </div>



                                <TextAreaGroup label="Street Address" name="streetAddress" value={streetAddress} onChange={handleAddressInformationChange} />

                                <input type="button" value="Add address" onClick={_ => {
                                    closeAddressPopup();
                                    setAddresses([...addresses, {wilaya_id: wilaya.value, wilaya_name: wilaya.label, commune: commune, zip: zip, street: streetAddress,}]);
                                    setAddressInfo({ commune: '', city: '', state: '', zip: '', streetAddress: '' })
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
    errors: selectProfileInformationErrors,
});

const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateProfileInformationStart(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));

