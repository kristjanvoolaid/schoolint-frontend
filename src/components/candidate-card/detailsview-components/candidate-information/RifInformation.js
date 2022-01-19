import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function RifInformation({ background, notes, residence, phoneNumber, email, handleNotesChange }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        Tekst<br></br>
                        <p className="text-box">{background}</p>
                    </Col>
                    <Col md={4}>
                        Admini märkmed
                        <p className="admin-notes text-box" aria-readonly>{notes}</p>
                    </Col>
                    <Col sm={4} className="candidate-data">
                        Aadress <br></br>
                        <p className="text-box" >{residence}</p>
                        <br></br> Number <br></br>
                        <p className="text-box">{phoneNumber}</p>
                        <br></br> Email <br></br>
                        <p className="text-box">{email}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RifInformation;
