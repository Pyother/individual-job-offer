import React from 'react';
import './components.css';

import { Row, Col, Container } from 'react-bootstrap';

const PageHomeHeader = (props) =>{
    return (
        <div style={{position: "relative", zIndex: "2"}}>
            <Container className="header" >
                <Row className="title-container" style={{padding: 0}}>
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
                            (Miejsce na grafikę i efekty specjalne)
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageHomeHeader;