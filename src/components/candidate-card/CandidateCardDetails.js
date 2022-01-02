import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import RifInformation from './detailsview-components/candidate-information/RifInformation';
import CandidateInformation from './detailsview-components/candidate-information/CandidateInformation';
import RifTags from './detailsview-components/candidate-tags/RifTags';
import LoTags from './detailsview-components/candidate-tags/LoTags';
import KtdCandidateTags from './detailsview-components/candidate-tags/KtdCandidateTags';
import KtdCandidateAttachments from './detailsview-components/candidate-attachments/KtdCandidateAttachments';
import CandidateScores from './detailsview-components/candidate-scores/CandidateScores';
 
class CandidateCardDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {

            // Candidate details
            id: null,
            specialityCode: '',
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

        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);
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
                specialityCode, 
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
                specialityCode: specialityCode,
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

    handleCommentsChange(e) {
        this.setState({
            comments: e.target.value
        });
    };

    handleNotesChange(e) {
        this.setState({
            notes: e.target.value
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
        let candidateCode;
        let candidateScores;
        let candidateInformation;
        let candidateTags;
        let candidateAttachments;

        // Kandidaadi õppekavakoodi parsimine
        if (this.state.specialityCode.length == 5) {
            candidateCode = this.state.specialityCode.slice(0, 3);
        } else {
            candidateCode = this.state.specialityCode.slice(0, 2)
        }

        // Üldiste komponentide seadmine
        candidateScores = <CandidateScores
                            candidateCode={candidateCode}
                            scoresKat1={this.state.scores.kat1}
                            scoresKat2={this.state.scores.kat2}
                            scoresKat3={this.state.scores.kat3}
                            scoresKat4={this.state.scores.kat4}
                            finalScore={this.state.finalScore}
                        />

        candidateInformation = <CandidateInformation 
                                 notes={this.state.notes}
                                 handleNotesChange={this.handleNotesChange}
                                 residence={this.state.residence}
                                 phoneNumber={this.state.phoneNumber}
                                 email={this.state.email}
                             />

        // Komponentide seadmine õppekava järgi
        if (candidateCode === 'RIF') {
            candidateInformation = <RifInformation 
                                        background={this.state.background}
                                        notes={this.state.notes}
                                        handleNotesChange={this.handleNotesChange}
                                        residence={this.state.residence}
                                        phoneNumber={this.state.phoneNumber}
                                        email={this.state.email}
                                />

            candidateTags = <RifTags
                                comments={this.state.comments}
                                handleCommentsChange={this.handleCommentsChange}
                            />

            candidateAttachments = null;
        } else if (candidateCode === 'LO') {

            candidateTags = <LoTags
                                comments={this.state.comments}
                                handleCommentsChange={this.handleCommentsChange}
                            />

            candidateAttachments = null;
        } else {
            candidateScores = null;            
            candidateTags = <KtdCandidateTags
                                comments={this.state.comments}
                                handleCommentsChange={this.handleCommentsChange}
                          />
            
            candidateAttachments = <KtdCandidateAttachments />
        }

        const { minutes, seconds } = this.state;
        let presentButtonClassName = this.state.present ? "present_btn_pressed" : "present_btn";

        if (this.state.id == null) {
            return (
                <h1 className="text-center">Kandidaadi laadmine.. Palun oodake</h1>
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
                        <Col sm={10}></Col>
                        <Col sm={1}><h4>{minutes}:{seconds}</h4></Col>
                        <Col sm={1}><button className={presentButtonClassName} onClick={this.candidatePresent}>Kohal</button></Col>
                    </Row>
                    <br></br>
                    <Row>{candidateScores}</Row>
                    <Row>{candidateInformation}</Row>
                    <hr></hr>
                    <Row>{candidateAttachments}</Row>
                    <Row>{candidateTags}</Row>
                    <br></br>
                    <Row>
                        <Col sm={9}></Col>
                        <Col sm={1}>
                            <Link to="/candidates">
                                <button>Sulge</button>
                            </Link>
                        </Col>
                        <Col sm={1}>
                            <Popup trigger={<button>Salvesta</button>} modal>
                                {close => (
                                    <div>
                                        <div>
                                            <p>Kas oled kindel, et soovid salvestada ja väljuda?</p>
                                        </div>
                                        <button onClick={close}>Sulge</button>
                                        <Link to="/candidates">
                                            <button onClick={this.candidateChanges}>Salvesta</button>
                                        </Link>
                                    </div>
                                )}
                            </Popup>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CandidateCardDetails;