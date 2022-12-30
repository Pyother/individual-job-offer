import { useState } from 'react';
import './components.css';

const FormInputText = (props) => {

    
    
    return (
        <div className="formInput">
            <h3>{props.placeholder}</h3>
            <input type="text" required placeholder={props.placeholder} value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="submit"/>
        </div>
    );
}

export default FormInputText

