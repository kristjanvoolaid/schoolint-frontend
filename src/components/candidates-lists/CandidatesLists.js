import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CandidatesListItem from './CandidatesListItem';

const CandidatesLists = ({ candidatesLists }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ offset: 11 }}><Link to="/import">Import</Link></Col>
                </Row>
            <Row className="candidates-list-header">
                    <Col sm={2}>Aasta</Col>
                    <Col>Õppekava</Col>
            </Row>
        </Container>

        {
            candidatesLists.map((listItem, i) => {
                return (
                    <CandidatesListItem
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