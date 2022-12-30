import React from "react";
import './components.css';

import { Col, Row, Container } from "react-bootstrap";

const PageAdminGuide = (props) => {
    return (
        <div>
            <Container fluid className="guide">
                <Row style={{margin: "0", padding: "5%", width: "500px"}}>
                    <div className="guide-header">Panel administracyjny</div>
                </Row>
                <Row style={{margin: "0", padding: "0"}}>
                    <p>(Miejsce na opis zastosowania panelu administracyjnego)</p>
                </Row>
            </Container>
        </div>
    );
}

export default PageAdminGuide;