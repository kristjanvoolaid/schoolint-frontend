import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CandidateCard from './CandidateCard';
import './CandidatesCard.css';

const CandidateCardList = ({ candidates }) => {
    return (
        <div>
            <Container>
                <Row className="candidates-list-header">
                    <Col>Nr</Col>
                    <Col>Name</Col>
                    <Col>Score</Col>
                    <Col>Email</Col>
                    <Col>PersonalID</Col>
                </Row>    
            </Container> 
            {
                candidates.map((candidate, i) => {
                    return (
                        <CandidateCard 
                            key={candidates[i].id}
                            id={candidates[i].id}
                            name={candidates[i].firstName + " " + candidates[i].lastName}
                            score={candidates[i].finalScore}
                            email={candidates[i].email}
                            personalId={candidates[i].personalId}
                            present={candidates[i].present}
                        />
                    )
                })
            }
        </div>
    );
}

export default CandidateCardList;