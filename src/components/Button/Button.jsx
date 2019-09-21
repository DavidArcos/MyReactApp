import React from 'react';
import propTypes from 'prop-types';
import './Button.css';
const Button = (props) => {
    const { 
        className, 
        text, 
        type,
        onClick
    } = props;
    return (
        <button className={className} type={type} onClick={onClick}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    type: 'button'
}
Button.propTypes = {
    onClick: propTypes.func.isRequired,
    className: propTypes.string,
    text: propTypes.string.isRequired
}
export default Button;