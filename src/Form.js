import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import "./components/components.css";

const Form = () => {

    const [employer, setEmployer] = useState("");
    const [system, setSystem] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    
    const win = window.sessionStorage;

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        win.clear();
        win.setItem("employer", employer);
        win.setItem("system", system);
        win.setItem("name", name);
        win.setItem("surname", surname);
        navigate("/editor");
    }
    
    return (
        <div className="myform">
            <form onSubmit={handleSubmit} >
                <h2>Formularz</h2>
                <div className="formInput">
                    <h3>Pracodawca</h3>
                    <input type="text" required placeholder="Pracodawca" value={employer} onChange={(e) => setEmployer(e.target.value)}/>
                </div>
                <div className="formInput">
                    <h3>System wynagradzania</h3>
                    <input type="text" required placeholder="System wynagradzania" value={system} onChange={(e) => setSystem(e.target.value)}/>
                </div>
                <div className="formInput">
                    <h3>Imię</h3>
                    <input type="text" placeholder="Imię" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="formInput">
                    <h3>Nazwisko</h3>
                    <input type="text" required placeholder="Nazwisko" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                </div>
                <Container fluid className="button-container">
                    <Row style={{padding: "3%"}}>
                        <button type="submit" className="button">Zatwierdź odpowiedzi</button>
                    </Row>
                </Container>
            </form>
        </div>
    );
}

export default Form;

