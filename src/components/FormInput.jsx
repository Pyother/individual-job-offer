import { useState } from 'react';
import './components.css';

const FormInput = (props) => {

    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(value) {
        console.warn(value.target)
    }
    
    return (
        <div className="formInput">
            <h3>{props.placeholder}</h3>
            <input placeholder={props.placeholder} onChange={getData} on/>
            
        </div>
    );
}

export default FormInput

