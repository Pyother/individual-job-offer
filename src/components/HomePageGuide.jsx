import React from 'react';
import './components.css';

import { Row, Col, Container, Grid} from 'react-bootstrap';

const HomePageGuide = (props) => {
    return (
        <div>
            <Container fluid className="guide">
                <Row style={{margin: 0}}>
                    <div className="guide-header">
                        Nagłówek
                    </div>
                </Row>
                <p>(Miejsce na opis i przeznaczenie strony)</p>
                <Row style={{padding: "10%"}}>
                    <Col md={4}>
                        <div className="guide-content">
                            1
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="guide-content">
                            2
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="guide-content">
                            3
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePageGuide;