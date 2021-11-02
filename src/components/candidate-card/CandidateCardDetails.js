import React, { Component } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { withRouter } from 'react-router';
 
class CandidateCardDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            personalId: null,
            finalScore: null,
            phoneNumber: null,
            residence: '',
            scores: {
                kat1: null,
                kat2: null,
                kat3: null,
                kat4: null,
            },
            studies: {
                0: '',
                0: '',
                0: ''
            }
        }
    }

    componentDidMount() {
        this.fetchCandidate();
    }

    async fetchCandidate() {
        const { id } = this.props.location;
        const endpoint = window.location.pathname;
        try {
            const response = await fetch(`http://127.0.0.1:3001${endpoint}`);
            const candidate = await response.json();

            const { 
                id, 
                firstName, 
                lastName,
                email,
                personalId,
                finalScore,
                phoneNumber,
                residence,
                scores,
                studies
            } = candidate.candidate;
            
            this.setState({
                id: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                personalId: personalId,
                finalScore: finalScore,
                phoneNumber: phoneNumber,
                residence: residence,
                scores: scores,
                studies: studies
            });

        } catch (error) {
            console.log(error);
        }
    }
    render() {

        if (this.state.id == null) {
            return (
                <h1 className="text-center">Loading..</h1>
            )
        }

        if (this.state.studies.length > 1) {
            this.setState({
                studies: 'No studies'
            });
        }

        return (
            <div className="text-center">
                <Container>
                    <Row>
                        <Col>
                            <h1>{this.state.firstName} {this.state.lastName}</h1>            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{this.state.personalId}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}></Col>
                        <Col sm={1}>14.10</Col>
                        <Col sm={2}>Kohal <input type="checkbox"></input></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Table striped>
                            <thead>
                                <tr>
                                <th></th>
                                <th>Kat1</th>
                                <th>Kat2</th>
                                <th>Kat3</th>
                                <th>Kat4</th>
                                <th>Kokku</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Test</td>
                                    <td>{this.state.scores.kat1}</td>
                                    <td>{this.state.scores.kat2}</td>
                                    <td>{this.state.scores.kat3}</td>
                                    <td>{this.state.scores.kat4}</td>
                                    <td>{this.state.finalScore}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <Col sm={4}>Tekst<br></br><textarea rows="4" cols="20"></textarea></Col>
                        <Col sm={4}>Märkmed<br></br><textarea rows="4" cols="20"></textarea></Col>
                        <Col sm={4}>
                            <br></br>
                            <p>{this.state.residence}</p>
                            <p>{this.state.phoneNumber}</p>
                            <p>{this.state.email}</p>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col sm={4}>Kommentaar<br></br><textarea rows="6" cols="20"></textarea></Col>
                        <Col sm={2}>
                            Kat 1.1
                            <br></br>
                            <select>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                            </select>
                        </Col>
                        <Col sm={2}>
                            Kat 1.2
                            <br></br>
                            <select>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                            </select>
                        </Col>
                        <Col sm={2}>
                            Kat 1.3
                            <br></br>
                            <select>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                            </select>
                        </Col>
                        <Col sm={2}>
                            Kat 1.4
                            <br></br>
                            <select>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                                <option value="test">Test</option>
                            </select>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={9}></Col>
                        <Col sm={1}><button>Sulge</button></Col>
                        <Col sm={1}><button>Salvesta</button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CandidateCardDetails;
