import Select from 'react-select';
import './components.css';

const FormInputSelect = (props) => {
    const options = [
        { value: "Mężczyzna", label: "Mężczyzna"},
        { value: "Kobieta", label: "Kobieta"}
    ]

    return (
        <div className="formInput">
            <h3>{props.placeholder}</h3>
            <select>
                <option value="Mężczyna">Mężczyzna</option>
                <option value="Kobieta">Kobieta</option>
            </select>
        </div>
    );
}

export default FormInputSelect;