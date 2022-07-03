import React from 'react';
import { withTranslation } from 'react-i18next';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import BottomNavigationBar from "./../../components/bottom-navigation/bottom-navigation.component";
import cookies from "js-cookie";

const FaqPage = ({t}) => {
    const lang = cookies.get('i18next') || "en";

    return (
        <div className='faq-page'>
            <NavigationBar/>
            <div className="faq-container">

                <div className="qst-Block">
                    <h1>{t('FAQ')}</h1>
                    <div className="qst-item">
                        <details>
                            <summary lang={lang}>
                                <span lang={lang}>{t('How to contact with Customer Service?')}</span>
                                <span>+</span>
                            </summary>
                            <p lang={lang}>{t('Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.')}</p>
                        </details>
                    </div>
                    <div className="qst-item">
                        <details>
                            <summary lang={lang}>
                                <span lang={lang}>{t('How to contact with Customer Service?')}</span>
                                <span>+</span>
                            </summary>
                            <p lang={lang}>{t('Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.')}</p>
                        </details>
                    </div>
                    <div className="qst-item">
                        <details>
                            <summary lang={lang}>
                                <span lang={lang}>{t('How to contact with Customer Service?')}</span>
                                <span>+</span>
                            </summary>
                            <p lang={lang}>{t('Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.')}</p>
                        </details>
                    </div>
                </div>
            </div>
            <BottomNavigationBar />
        </div>
    )
}

export default withTranslation()(FaqPage);