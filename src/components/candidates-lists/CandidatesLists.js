import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CandidatesListsItem from './CandidatesListsItem';

const CandidatesLists = ({ candidatesLists }) => {
    return (
        <div>
            <Container className="text-center">
                <Row>
                    <Col md={{ offset: 11 }}><Link to="/import">Import</Link></Col>
                </Row>
                <Row className="candidates-list-header">
                        <Col md={3}>Nr</Col>
                        <Col md={3}>Aasta</Col>
                        <Col md={3}>Õppekava</Col>
                        <Col md={3}>Tegevus</Col>
                </Row>
            </Container>
            {
                candidatesLists.map((listItem, i) => {
                    return (
                        <CandidatesListsItem
                            id={candidatesLists[i].id}
                            listCode={candidatesLists[i].listCode}
                            year={candidatesLists[i].year}
                        />
                    )
                })
            }
        </div>
    )
}

export default CandidatesLists;