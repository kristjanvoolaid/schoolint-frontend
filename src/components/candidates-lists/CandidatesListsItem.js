import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CandidatesListItem = ({ id, listCode, year }) => {
    console.log(id, listCode, year);
    return (
        <Container>
            <Row>
                <Col sm={2}>{year}</Col>
                <Col sm={8}>{listCode}</Col>
                <Col>
                    <Link to="/import">Import</Link>
                </Col>
                <Col><button>Export</button></Col>
            </Row>
        </Container>
    )
};

export default CandidatesListItem;