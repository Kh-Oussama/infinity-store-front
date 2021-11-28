import React from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";

const FaqPage = () => {
    return (
        <>
            <NavigationBar/>
            <div className="faq-container">

                <div className="qst-Block">
                    <h1>Faq</h1>
                    <div className="qst-item">
                        <details>
                            <summary>
                                <span>How to contact with Customer Service?</span>
                                <span>+</span>
                            </summary>
                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.</p>
                        </details>
                    </div>
                    <div className="qst-item">
                        <details>
                            <summary>
                                <span>How to contact with Customer Service?</span>
                                <span>+</span>
                            </summary>
                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.</p>
                        </details>
                    </div>
                    <div className="qst-item">
                        <details>
                            <summary>
                                <span>How to contact with Customer Service?</span>
                                <span>+</span>
                            </summary>
                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.</p>
                        </details>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqPage;