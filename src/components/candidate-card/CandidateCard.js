import React from "react";
import './CandidatesCard.css';
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const CandidateCard = ({ id, name, score, email, personalId, present }) => {
    const candidateEndpoint = `/candidates/${id}`;
    let candidateBackground = present ? "list-item_present" : "list-item"; 
    return (
        <div>                                
            <Container>
                <Link id={id} to={{pathname: candidateEndpoint, id: id}} className="candidate-name">
                    <Row className={candidateBackground}>
                        <Col>{id}</Col>
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