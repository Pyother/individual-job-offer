import React from 'react';
import './components.css';

import { Row, Col, Container } from 'react-bootstrap';

const PageHomeFooter = (props) => {
    return (
        <div>
            <Container fluid className='footer' style={{backgroundColor: "#f0f0f0"}}>
                <Row>
                    <Col>
                        Autorzy
                    </Col>
                    <Col>
                        Kontakt
                    </Col>
                    <Col>
                        Polityka prywatności
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageHomeFooter;