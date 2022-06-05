import React, { useLayoutEffect, useState } from "react";
import cookies from "js-cookie";
import i18next from "./../../../traduction";

import ar from "./../../../images/ar.png";
import en from "./../../../images/en.png";
import fr from "./../../../images/fr.png";



const LanguageDropdown = () => {
    const [showDropDown, setDropDown] = useState(false);
    const currentLang = cookies.get("i18next") || "en";

    // When user click outside dropdown auto close
    useLayoutEffect(() => {
        const checkIfClickOutside = (event) => {
            if (!event.target.closest('.language-dropdown > .dropdown') && !event.target.closest('.fa-globe')) {
                setDropDown(false);
            }
        }
        document.addEventListener("click", checkIfClickOutside);

        return () => {
            document.removeEventListener("click", checkIfClickOutside);
        }
    }, []);

    // Function to change language
    const changeLang = lang => {
        i18next.changeLanguage(lang);
        cookies.set('i18next', lang);
        setDropDown(false);
    }

    return (
        <div className="language-dropdown">
            <span className='fa-solid fa-globe' onClick={_ => setDropDown(!showDropDown)}></span>
            <div className={`dropdown ${showDropDown && 'active'}`}>
                <div className={`lang-item ${currentLang === 'en' && 'active'}`} onClick={_ => changeLang('en')}>
                    <img src={en} alt="" />
                    <span>English</span>
                </div>
                <div className={`lang-item ${currentLang === 'ar' && 'active'}`} onClick={_ => changeLang('ar')}>
                    <img src={ar} alt="Arabic" />
                    <span>Arabic</span>
                </div>
                <div className={`lang-item ${currentLang === 'fr' && 'active'}`} onClick={_ => changeLang('fr')}>
                    <img src={fr} alt="French" />
                    <span>Français</span>
                </div>
            </div>
        </div>
    );
}

export default LanguageDropdown;