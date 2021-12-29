import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
class CandidateCardDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {

            // Candidate details
            id: null,
            firstName: '-',
            lastName: '-',
            email: '-',
            personalId: '-',
            finalScore: null,
            phoneNumber: '-',
            residence: '-',
            scores: {
                kat1: '-',
                kat2: '-',
                kat3: '-',
                kat4: '-',
            },
            studies: {
                0: '',
                0: '',
                0: ''
            },
            background: '-',
            notes: '-',
            comments: '',
            room: '-',

            // Candidate present
            present: '',

            // Stopwatch data
            minutes: 0,
            seconds: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    candidatePresent = () => {
        if (!this.state.present) {
            this.startStopWatch();
        }

        this.setState({
            present: !this.state.present,
        });
    };

    componentDidMount() {
        this.fetchCandidate();
    };

    async fetchCandidate() {
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
                phoneNumber,
                residence,
                finalScore,
                scores,
                studies,
                background,
                notes,
                comments,
                room,
                present
            } = candidate.candidate;

            // Check if results are available
            if (background !== undefined && scores !== undefined && notes !== undefined && studies !== undefined) {
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
                studies: studies,
                background: background,
                notes: notes,
                comments: comments,
                room: room,
                present: present
            });
            }            
            
            this.setState({
                id: id,
                firstName: firstName,
                lastName: lastName,
                personalId: personalId,
                residence: residence,
                phoneNumber: phoneNumber,
            });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange(e) {
        this.setState({
            comments: e.target.value
        });
    };

    candidateChanges = () => {
        const candidateId = window.location.pathname;
        const { id, firstName, lastName, email, personalId, notes, present, comments } = this.state;
        
        axios({
            method: "PATCH",
            url: `http://localhost:3001${candidateId}`,
            data: {
                id,
                firstName,
                lastName,
                email,
                personalId,
                notes,
                present,
                comments
            }
        })
        .then(response => response.statusText)
        .then(result => console.log(result))
    }

    startStopWatch = () => {
        clearInterval(this.myInterval);
        this.myInterval = setInterval(() => {
            if (this.state.seconds === 59) {
                this.setState(prevState => ({
                    minutes: prevState.minutes + 1,
                    seconds: 0
                }))
            } else {
                this.setState(prevState => ({
                    seconds: prevState.seconds + 1
                }))
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        const { minutes, seconds } = this.state;
        let presentButtonClassName = this.state.present ? "present_btn_pressed" : "present_btn";
        if (this.state.id == null) {
            return (
                <h1 className="text-center">Loading..</h1>
            )
        }

        if (this.state.studies.length < 1) {
            this.setState({
                studies: 'No studies'
            });
        }

        return (
            <div className="text-center">
                <Container>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={6}>
                            <h1>{this.state.firstName} {this.state.lastName}</h1>            
                        </Col>
                        <Col md="auto"><h4>{minutes}:{seconds}</h4></Col>
                        <Col xs lg="1"><button className={presentButtonClassName} onClick={this.candidatePresent}>Alusta</button></Col>
                    
                    </Row>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={6}>
                            <p>{this.state.personalId}</p>
                        </Col>


                    </Row>
                    {/* <Row>
                        <Col sm={8}></Col>
                        <Col sm={1}><h4>{minutes}:{seconds}</h4></Col>
                        <Col sm={1}><button className={presentButtonClassName} onClick={this.candidatePresent}>Kohal</button></Col>
                    </Row> */}
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
                        <Col sm={4}><p>Tekst</p><p>{this.state.background}</p></Col>
                        <Col sm={4}><p>Märkmed</p><p>{this.state.notes}</p></Col>
                        <Col sm={4}>
                            <p>{this.state.residence}</p>
                            <p>{this.state.phoneNumber}</p>
                            <p>{this.state.email}</p>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col sm={4}>Kommentaar<br></br><textarea value={this.state.comments} onChange={this.handleChange} rows="6" cols="20"></textarea></Col>
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
                        <Col sm={10}></Col>

                        <Col sm={1}>
                            <Link to="/candidates">
                                <button className="button2">Katkesta</button>
                            </Link>
                        </Col>
                        
                        <Col sm={1}>
                            <Popup md={4} trigger={<button className="button1">Salvesta</button>} modal>
                                <div>
                                    <p>Kas oled kindel, et soovid salvestada ja väljuda?</p>
                                </div>
                                <button className="button2">Katkesta</button>
                                <Link to="/candidates">
                                    <button className="button1" onClick={this.candidateChanges}>Salvesta</button>
                                </Link>
                            </Popup>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CandidateCardDetails;