import props from 'prop-types';
import './formInput.css';

const FormInput = () => {
    return (
        <div className="formInput">
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default FormInput