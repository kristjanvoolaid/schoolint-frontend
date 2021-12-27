import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function RifInformation({ background, notes, residence, phoneNumber, email, handleNotesChange }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={4}><p>Tekst</p><p>{background}</p></Col>
                    <Col sm={4}><p>Admini märkmed</p><p><textarea value={notes} onChange={handleNotesChange}></textarea></p></Col>
                    <Col sm={4}>
                        <p>{residence}</p>
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RifInformation;
