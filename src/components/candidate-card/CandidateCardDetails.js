import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
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
import authHeader from "../../services/AuthHeader";
import config from "../../config";

class CandidateCardDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {

            // Candidate details
            id: null,
            specialityCode: '',
            courseId: '',
            firstName: '-',
            lastName: '-',
            email: '-',
            personalId: '-',
            finalScore: null,
            phoneNumber: '-',
            residence: '-',
            scores: {
                cat1: '-',
                cat2: '-',
                cat3: '-',
                cat4: '-',
            },
            background: '-',
            notes: '-',
            comments: '',
            room: '-',
            tags: [],
            interviewResult: {
                interviewCat1: '',
                interviewCat2: '',
                interviewCat3: '',
                interviewCat4: '',
                interviewCat5: '',
                interviewCat6: '',
                interviewCat7: '',
                interviewCat8: '',
                tags: []
            },
            attachments: [],

            // Candidate present
            present: null,

            // Stopwatch data
            minutes: 0,
            seconds: 0,

            // Tags search
            searchField: ''
        }

        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);
    }

    candidatePresent = () => {
        if (this.state.present === 0) {
            // siin pahandas vs koodiga, st vahetasin == välja === vastu.
            this.startStopWatch();

            this.setState(prevState => ({
                present: 1,
            }));
        } else {
            this.setState({
                present: 0
            })
        }
    };

    componentDidMount() {
        this.fetchCandidate();
        this.fetchCourseTags();
    };

    fetchCourseTags() {
        setTimeout(() => {
            const endpoint = this.state.courseId;
            axios.get(config.API_URL + `/tags/coursetags/${endpoint}`, { headers: authHeader() })
            .then(response => this.setState({ tags: response.data.tags }))
            .catch((error) => {console.log(error)});
        }, 1000)
    }

    fetchCandidate() {
        const endpoint = window.location.pathname;
        axios.get(config.API_URL + `${endpoint}`, { headers: authHeader() })
        .then((response) => {
            const { 
                id,
                specialityCode,
                courseId, 
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
                present,
                attachments
            } = response.data.candidate;

            // Check if results are available
            if (background && scores) {
                    this.setState({
                    id: id,
                    specialityCode: specialityCode,
                    courseId: courseId,
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
                    present: present,
                    attachments: attachments
                });
            }
            
            this.setState({
                id: id,
                firstName: firstName,
                lastName: lastName,
                personalId: personalId,
                email: email,
                residence: residence,
                phoneNumber: phoneNumber,
                notes: notes,
                specialityCode: specialityCode,
                courseId: courseId,
                present: present,
                attachments: attachments
            });
        })
        .catch((error) => {
            console.log(error);
        });
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
        const { id, present, comments, interviewResult } = this.state;
        
        axios({
            method: "PATCH",
            url: config.API_URL + candidateId,
            data: {
                id,
                present,
                comments,
                interviewResult
            },
            headers: authHeader()
        })
        .then(response => response.statusText)
        .then(result => console.log(result))
    }

    sendCandidateAttachment = (file) => {
        const dataToSend = new FormData();
        dataToSend.append('file', file);
        dataToSend.append('candidateId', this.state.id);

        axios({
            method: "POST",
            url: config.API_URL + "/candidates/attachment/",
            data: dataToSend,
            headers: authHeader()
        })
        .then(response => response.data)
        .then(result => console.log(result))
        .catch(error => console.log(error));
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

    onSearchChange = (e) => {
        this.setState({
          searchField: e.target.value
        });
    };

    handleInterviewCatScores = (e) => {
        const { value, name } = e.target;
        this.setState(prevState => ({
            interviewResult: {
                ...prevState.interviewResult,
                [name]: value
            }
        }))
    };

    handleTagsCheckbox = (e) => {
        const { id } = e.target;
        this.setState(prevState => ({
            interviewResult: {
                ...prevState.interviewResult,
                tags: [...this.state.interviewResult.tags, id]
            }
        }))
    };

    render() {
        let candidateCode;
        let candidateScores;
        let candidateInformation;
        let candidateTags;
        let candidateAttachments;

        // Kandidaadi õppekavakoodi parsimine
        if (this.state.specialityCode.length === 5) {
            // siin pahandas vs koodiga, st vahetasin == välja === vastu.
            candidateCode = this.state.specialityCode.slice(0, 3);
        } else {
            candidateCode = this.state.specialityCode.slice(0, 2)
        }

        // Tagide edastamine
        let emptySearch;
        const fileteredTags = this.state.tags.filter(tag => {
            const tagName = tag.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            if (tagName) {
              return tagName;
            }
        });

        if (fileteredTags.length < 1) {
            emptySearch = <Spinner animation="border" role="status" size="lg">
                            <span className="visually-hidden">Siltide laadimine</span>
                        </Spinner>
        };

        // Üldiste komponentide seadmine
        candidateScores = <CandidateScores
                            candidateCode={candidateCode}
                            scoresKat1={this.state.scores.cat1}
                            scoresKat2={this.state.scores.cat2}
                            scoresKat3={this.state.scores.cat3}
                            scoresKat4={this.state.scores.cat4}
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
                                tags={fileteredTags}
                                comments={this.state.comments}
                                handleCommentsChange={this.handleCommentsChange}
                                onSearchChange={this.onSearchChange}
                                handleTagsCheckbox={this.handleTagsCheckbox}
                                handleInterviewCatScores={this.handleInterviewCatScores}
                            />

            candidateAttachments = null;
        } else if (candidateCode === 'LO') {

            candidateTags = <LoTags
                                tags={fileteredTags}
                                comments={this.state.comments}
                                handleCommentsChange={this.handleCommentsChange}
                                onSearchChange={this.onSearchChange}
                                handleTagsCheckbox={this.handleTagsCheckbox}
                                handleInterviewCatScores={this.handleInterviewCatScores}
                            />

            candidateAttachments = null;
        } else {
            candidateScores = null;            
            candidateTags = <KtdCandidateTags
                                tags={fileteredTags}
                                comments={this.state.comments}
                                handleCommentsChange={this.handleCommentsChange}
                                onSearchChange={this.onSearchChange}
                                handleTagsCheckbox={this.handleTagsCheckbox}
                                handleInterviewCatScores={this.handleInterviewCatScores}
                          />
            
            candidateAttachments = <KtdCandidateAttachments attachments={this.state.attachments} id={this.state.id} />
        }

        const { minutes, seconds } = this.state;
        let presentButtonClassName = this.state.present ? "present_btn_pressed" : "present_btn";

        if (this.state.id == null) {
            return (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )
        }

        return (
            <div className="text-center">
                <Container>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8} className="candidate-name-card secondary-text">
                            <h1>{this.state.firstName} {this.state.lastName}</h1>            
                        </Col>
                        <Col md="auto" className="timer-button secondary-text"><h4>{minutes}:{seconds}</h4></Col>
                        <Col xs lg="1"><button className={presentButtonClassName} onClick={this.candidatePresent}>Alusta</button></Col>
                    </Row>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} className="secondary-text">
                            <p>{this.state.personalId}</p>
                        </Col>
                        <hr></hr>
                    </Row>
                    <br></br>
                    <Row>{candidateScores}</Row>
                    <Row>{candidateInformation}</Row>
                    <hr></hr>
                    <Row>{candidateAttachments}</Row>
                    <Row>
                        {candidateTags}
                        {emptySearch}
                    </Row>
                    <br></br>
                    <Row>
                        <Col md={9}></Col>
                        <Col md={1}>
                            <Link to="/candidates">
                                <button className="button2">Sulge</button>
                            </Link>
                        </Col>
                        <Col md={1}>
                            <Popup trigger={<button className="button1">Salvesta</button>} modal>
                                {close => (
                                    <div>
                                        <div>
                                            <p>Kas oled kindel, et soovid salvestada ja väljuda?</p>
                                        </div>
                                        <button className="button2" onClick={close}>Sulge</button>
                                        <Link to="/candidates">
                                            <button className="button1" onClick={this.candidateChanges}>Salvesta</button>
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