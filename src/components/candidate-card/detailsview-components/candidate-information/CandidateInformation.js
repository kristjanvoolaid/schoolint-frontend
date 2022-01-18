import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CandidateInformation({ notes, residence, phoneNumber, email }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        Admini märkmed
                        <p className="admin-notes text-box" readonly>{notes}</p>
                    </Col>
                    <Col md={4} className="candidate-data">
                        Aadress <br></br>
                        <p className="text-box" >{residence}</p>
                        <br></br> Number <br></br>
                        <p className="text-box">{phoneNumber}</p>
                        <br></br> Email <br></br>
                        <p className="text-box">{email}</p>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default CandidateInformation;
