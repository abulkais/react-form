import React, { useState } from 'react';
import "./style.css";
const Input = ({ label, onChange, errorMessage, ...otherprops }) => {
    const [focused, setFocused]  = useState(false);
    return (
        <>
            <div className='inputField'>
                <label>{label}</label>
                <input {...otherprops} onChange={onChange} onBlur={() => setFocused(true)} onFocus={() => otherprops.name === "confirmPassword" && setFocused(true)}  focused={focused.toString()}  />
                <span >{errorMessage}</span>
            </div>
        </>
    )
}
export default Input;