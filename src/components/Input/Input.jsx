import React from 'react';
import './Input.css';

const Input = (props) => {
    const {  
        type,
        name,
        onChange,
        value,
        placeholder,
        clasName,
        maxLength,
        minLength,
        disabled
    } = props;
    return (
        <input 
        type={type} 
        name={name} 
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={clasName}
        maxLength={maxLength}
        minLength={minLength}
        disabled={disabled}
        />
    );
};

Input.defaultProps = {
    disabled: false,
    minLength: '0',
    maxLength: '50',
    type: 'text',
    clasName: 'input'

}

export default Input;