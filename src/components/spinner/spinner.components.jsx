import React from 'react';
import './spinner.styles.scss';

const Spinner = ({custom}) => (
<>
    <div className={`lds-grid ${custom ? 'custom' : null}`}>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
    </>
)

export default Spinner;