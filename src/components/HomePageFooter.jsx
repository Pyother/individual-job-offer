import React from 'react';
import './components.css';

import { Row, Col, Container } from 'react-bootstrap';

const HomePageFooter = (propos) => {
    return (
        <div>
            <Container fluid className='footer'>
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

export default HomePageFooter;