import React from 'react';
import './components.css';

import { Row, Col, Container } from 'react-bootstrap';

const HomePageHeader = (props) =>{
    return (
        <div>
            <Container className="header">
                <Row>
                    <Col>
                        <div className="title">
                            <p>Kalkulator<br/>
                                <p>Indywidualnej<br/>
                                    <p>Propozycji<br/>
                                        <p>Zatrudnienia</p>
                                    </p>
                                </p>
                            </p>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePageHeader;