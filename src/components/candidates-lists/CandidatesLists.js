import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CandidatesLists = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12}></Col>
                    <Col><Link to="/import">Import</Link></Col>
                </Row>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Aasta</th>
                        <th>Õppekava</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2019</td>
                        <td>RIF19</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td>RIF20</td>
                    </tr>
                    <tr>
                        <td>2019</td>
                        <td>KT19</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>KT21</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        </div>
    )
}

export default CandidatesLists;