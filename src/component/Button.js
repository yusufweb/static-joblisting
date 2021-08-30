import React from 'react';
import './Button.css';

function Button({value, handleClick}) {

    return (
        <>
            <button onClick={() => handleClick(value)}>{value}</button>
        </>
    )
}

export default Button
