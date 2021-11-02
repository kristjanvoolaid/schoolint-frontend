import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import CandidateCard from './CandidateCard';
import './CandidatesCard.css';

const CandidateCardList = ({ candidates }) => {
    return (
        <div>

            <Container>
                <Row>
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
                        />
                    )
                })
            }
        </div>
    );
}

export default CandidateCardList;
