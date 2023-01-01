import { Row, Col, Container } from "react-bootstrap";
import { jsPDF } from "jspdf";
import "./components.css";

const PageEditorGuide = () => {

    let win = window.sessionStorage;

    const doc = new jsPDF();

    function writePDFfile() {
        doc.text("Hello world!", 100, 10);

        doc.save("output.pdf");
    }

    return (
        <div>
            <Container fluid className="guide">
                <Row style={{margin: "0", padding: "5%", width: "700px"}}>
                    <div className="guide-header">Edytor dokumentu</div>
                </Row>
                <Row style={{margin: "0", padding: "0"}}>
                    <p>(Miejsce na opis zastosowania edytora)</p>
                </Row>
                <Row style={{margin: "0", padding: "5%"}}>
                    <Row style={{margin: "0", padding: "0"}}>
                        <Col className="editor-table">Pracodawca</Col><Col className="editor-table">{win.getItem("employer")}</Col>
                    </Row>
                    <Row style={{margin: "0", padding: "0"}}>
                        <Col className="editor-table">System wynagradzania</Col><Col className="editor-table">{win.getItem("system")}</Col>
                    </Row>
                    <Row style={{margin: "0", padding: "0"}}>
                        <Col className="editor-table">Dane pracownika</Col><Col className="editor-table">{win.getItem("name")} {win.getItem("surname")}</Col>
                    </Row>
                </Row>
                <Container fluid className="button-container">
                    <Row style={{padding: "3%"}}>
                        <button type="submit" className="button" onClick={(() => writePDFfile())}>Pobierz PDF</button>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default PageEditorGuide