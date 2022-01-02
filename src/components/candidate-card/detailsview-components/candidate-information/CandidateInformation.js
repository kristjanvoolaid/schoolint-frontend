import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CandidateInformation({ notes, residence, phoneNumber, email, handleNotesChange }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6}>
                        <p>Admini märkmed</p>
                        <textarea value={notes} onChange={handleNotesChange}></textarea>
                    </Col>
                    <Col sm={6}>
                        <p>{residence}</p>
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CandidateInformation;
