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
                        <Col>Nr</Col>
                        <Col>Aasta</Col>
                        <Col>Õppekava</Col>
                        <Col>Loodud</Col>
                        <Col>Tegevus</Col>
                </Row>
            </Container>
            {
                candidatesLists.map((listItem, i) => {
                    return (
                        <CandidatesListsItem
                            id={candidatesLists[i].id}
                            listCode={candidatesLists[i].listCode}
                            year={candidatesLists[i].year}
                            created={candidatesLists[i].created}
                            enabled={candidatesLists[i].enabled}
                        />
                    )
                })
            }
        </div>
    )
}

export default CandidatesLists;