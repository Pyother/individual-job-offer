import React from 'react';
import './components.css';

import { Row, Col, Container } from 'react-bootstrap';

const HomePageHeader = (props) =>{
    return (
        <div>
            <Container className="header">
                <Row style={{padding: 0}}>
                    <Col md={5} style={{padding: 0}}>
                        <div className="title">
                            <p>Kalkulator<br/>
                                <p class='title-2'>Indywidualnej<br/>
                                    <p class='title-3'>Propozycji<br/>
                                        <p class='title-4'>Zatrudnienia</p>
                                    </p>
                                </p>
                            </p>
                        </div>
                    </Col>
                    <Col md={7} style={{padding: 0}}>
                        <div className="title-graphics">
                            Fweef
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePageHeader;