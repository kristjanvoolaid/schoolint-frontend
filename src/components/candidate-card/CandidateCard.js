import React from "react";
import './CandidatesCard.css';
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const CandidateCard = ({ id, name, testScore, interviewScore, score, email, personalId, present, time }) => {
    const candidateEndpoint = `/candidates/${id}`;
    let candidateBackground;
    let startTime;
    // Kandidaadi kohalolek
    if (present === 1) {
        candidateBackground = "list-item_present";
    } else {
        candidateBackground = "list-item";
    }

    // Intervjuu algus aeg
    if (time !== null) {
        startTime = time;
    } else {
        startTime = "-";
    }

    return (
        <div>
            <Container>
                <Link id={id} to={{pathname: candidateEndpoint, id: id}} className="candidate-name">
                    <Row className={candidateBackground}>
                        <Col classname="col-1">{id}</Col>
                        <Col className="candidate-name col-3">{name}</Col>
                        <Col className="col-1">{testScore}</Col>
                        <Col className="col-1">{interviewScore}</Col>
                        <Col className="col-1">{score}</Col>
                        <Col className="col-3">{email}</Col>
                        <Col className="col-1">{personalId}</Col>
                        <Col className="col-1">{startTime}</Col>
                    </Row>
                </Link>
            </Container>                               
        </div>
    )
}

export default CandidateCard;