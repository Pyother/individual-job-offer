import props from 'prop-types';
import './formInput.css';

const FormInput = (props) => {
    return (
        <div className="formInput">
            <h2>{props.placeholder}</h2>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default FormInput

