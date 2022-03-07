import React, { useState } from "react";
import InputGroup from "../input-group/input-group.component";
import TextAreaGroup from "../input-group/text-area-group.component";


const UserProfile = () => {

    const [crendentls, setCredentls] = useState({
        name: '',
        bio: '',
    });

    const {name, bio} = crendentls;

    //Function to show image input
    const showInput = () => {
        document.querySelector(".upload-img input").click();
    }

    const handleChange = e => {
        const event = e.target;
        setCredentls({
            ...crendentls,
            [event.name]: event.value,
        });
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
        </div>
    );
}

export default UserProfile;