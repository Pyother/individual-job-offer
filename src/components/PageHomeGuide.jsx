import React, { useEffect, useRef } from 'react';
import './components.css';

import { Row, Col, Container, Grid} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PageHomeGuide = (props) => {

    const ref = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {

        //There are two proven ways to handle redirections and I'm leaving code with both of them.

        const handleRedirectionDatabase = event => {
            navigate("/database");
        }

        const handleRedirectionAdmin = event => {
            navigate("/admin");
        }

        const element = ref.current;
        const redirectionAdmin = document.getElementById("redirect-admin");

        element.addEventListener('click', handleRedirectionDatabase);
        redirectionAdmin.addEventListener('click', handleRedirectionAdmin);

        return () => {
            element.removeEventListener('click', handleRedirectionDatabase);
            redirectionAdmin.removeEventListener('click', handleRedirectionAdmin);
        };
    }, []);
    
    return (
        <div>
            <Container fluid className="guide" style={{backgroundColor: "#f0f0f0"}}>
                <Row style={{margin: 0}}>
                    <div className="guide-header">
                        Nagłówek
                    </div>
                </Row>
                <p>(Miejsce na opis i przeznaczenie strony)</p>
                <Row style={{padding: "5%", width: "1200px"}}>
                    <Col md={4}>
                        <div ref={ref} className="guide-content" id='redirect-database'>
                            <Col >
                                <Row><h1>Baza danych</h1></Row>
                                <Row><p>(Opis)</p></Row>
                            </Col>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="guide-content" id='redirect-form'>
                            <Col >
                                <Row><h1>Formularz</h1></Row>
                                <Row><p>(Opis formularza)</p></Row>
                            </Col>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="guide-content" id='redirect-admin'>
                            <Col >
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