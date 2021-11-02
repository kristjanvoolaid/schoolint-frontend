import React from "react";
import './CandidatesCard.css';
import { Link } from "react-router-dom";
import { Col, Container, Row, Table } from "react-bootstrap";

const CandidateCard = ({ id, name, score, email, personalId }) => {
    const candidateEndpoint = `/candidates/${id}`;
    return (
        <div>                                
            <Container>
                <Row>
                    <Col>
                        <Link id={id} to={{pathname: candidateEndpoint, id: id}}>{name}</Link>
                    </Col>
                    <Col>{score}</Col>
                    <Col>{email}</Col>
                    <Col>{personalId}</Col>
                </Row>
            </Container>

        </div>
    )
}

export default CandidateCard;