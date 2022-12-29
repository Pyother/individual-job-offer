import React from "react";
import './components.css';

import { Col, Row, Container } from "react-bootstrap";

const PageDatabaseGuide = (props) => {
    return (
        <div>
            <Container fluid className="guide">
                <Row style={{margin: "0", padding: "5%", width: "500px"}}>
                    <div className="guide-header">Baza systemów wynagradzania</div>
                </Row>
                <Row style={{margin: "0", padding: "0"}}>
                    <p>(Miejsce na opis systemów wynagradzania)</p>
                </Row>
            </Container>
        </div>
    );
}

export default PageDatabaseGuide;