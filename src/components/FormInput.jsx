import './components.css';

const FormInput = (props) => {
    return (
        <div className="formInput">
            <h3>{props.placeholder}</h3>
            <input placeholder={props.placeholder}/>
        </div>
    );
}

export default FormInput

