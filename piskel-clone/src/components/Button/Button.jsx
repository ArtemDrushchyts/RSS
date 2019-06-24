import React from 'react';

import './Button.css';

const Button = (props) => {
    return (
        <button className={props.classN}>
            {props.name}
        </button>
    )
}

export default Button;