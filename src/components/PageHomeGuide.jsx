import React from 'react';
import './components.css';

import { Row, Col, Container, Grid} from 'react-bootstrap';

const PageHomeGuide = (props) => {
    return (
        <div>
            <Container fluid className="guide">
                <Row style={{margin: 0}}>
                    <div className="guide-header">
                        Nagłówek
                    </div>
                </Row>
                <p>(Miejsce na opis i przeznaczenie strony)</p>
                <Row style={{padding: "5%", width: "1200px"}}>
                    <Col md={4}>
                        <div className="guide-content">
                            <Col>
                                <Row><h1>Baza danych</h1></Row>
                                <Row><p>(Opis)</p></Row>
                            </Col>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="guide-content">
                            <Col>
                                <Row><h1>Formularz</h1></Row>
                                <Row><p>(Opis formularza)</p></Row>
                            </Col>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="guide-content">
                            <Col>
                                <Row><h1>Panel administracyjny</h1></Row>
                                <Row><p>(Opis zastosowania panelu administracyjnego)</p></Row>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageHomeGuide;