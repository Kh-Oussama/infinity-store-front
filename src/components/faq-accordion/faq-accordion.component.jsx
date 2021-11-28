import React, { useState } from 'react';
import { Data } from './data';





const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
            <div className="AccordionSection">
                <div className="container">
                    {Data.map((item, index) => {
                        return (
                            <>
                                <div className="wrap" onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? "-" : "+"}</span>
                                </div>
                                {clicked === index ? (
                                    <div className="dropdown">
                                        <p>{item.answer}</p>
                                    </div>
                                ) : null}
                            </>
                        );
                    })}
                </div>
            </div>

    );
};

export default Accordion;