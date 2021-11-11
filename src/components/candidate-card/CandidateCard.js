import React from "react";
import './CandidatesCard.css';
import { Link } from "react-router-dom";
import { Col, Container, Row, Table } from "react-bootstrap";

const CandidateCard = ({ id, name, score, email, personalId }) => {
    const candidateEndpoint = `/candidates/${id}`;
    return (
        <div>                                
            <Container>
                <Link id={id} to={{pathname: candidateEndpoint, id: id}} className="candidate-name">
                    <Row className="list-item">
                        <Col className="candidate-name">{name}</Col>
                        <Col>{score}</Col>
                        <Col>{email}</Col>
                        <Col>{personalId}</Col>
                    </Row>
                </Link>
            </Container>
        </div>
    )
}

export default CandidateCard;