import React, { Component } from 'react';
import axios from "axios";
import CandidatesLists from '../components/candidates-lists/CandidatesLists';
import authHeader from "../services/AuthHeader";
import { Spinner, Row, Col, Button, Container } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import config from "../config";
import "./CandidatesListsFetch.css";

class CandidatesListsFetch extends Component {
    constructor() {
        super()

        let date = new Date();

        this.state = {
            candidatesLists: [],
            courses: [],
            year: date.getFullYear(),
            err: '',
            load: false,
            firstLoadErr: '',
            listload: false,
        };
    }
    
    componentDidMount() {
        this.fetchCoursesLists();
        this.fetchCourses();
    }

    fetchCoursesLists() {
        this.setState({
            listload: true
        });

        axios.get(config.API_URL + '/lists', { headers: authHeader() })
        .then((response) => {
            this.setState({
                candidatesLists: response.data.candidatesLists,
                listload: false
            })
        })
        .catch((error) => {
            this.setState({
                firstLoadErr: 'Listide laadimisel tekkis viga! Palun värskenda veebilehitseja akent.'
            })
        });
    }

    fetchCourses() {
        axios({
            method: "GET",
            url: config.API_URL + "/courses",
            headers: authHeader()
        })
        .then(response => {
            this.setState({
                courses: response.data.courses
            })
        })
        .catch(error => console.log(error));
    }

    listDataToBackend = () => {

        const dataToSend = new FormData();
        dataToSend.append('file', this.state.file);
        dataToSend.append('templateId', this.state.templateId);
        dataToSend.append('year', this.state.year);
        dataToSend.append('courseId', this.state.listCode);

        if (this.state.file == null) {
            this.setState({
                err: 'Faili ei ole valitud!'
            })

            return (
                <div></div>
            )
        }

        this.setState({
            err: '',
            load: true
        });

        setTimeout(() => {
            axios({
                method: "POST",
                url: `${config.API_URL}/lists`,
                data: dataToSend,
                headers: authHeader()
            })
            .then(response => response.data)
            .then(result => window.location.reload())
            .catch(error => this.setState({ err: 'Faili importimisega tekkis probleem!', load: false }))
        }, 5000);
    }

    handleListCodeChange = (e) => {
        this.setState({
            listCode: e.target.value
        });
    };

    handleSelectedYear = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    onChangeHandler = (e) => {
        this.setState({
            file: e.target.files[0]
        });
    }

    render() {
        const { candidatesLists, courses } = this.state;

        if (this.state.firstLoadErr) {
            return (
                <Container className="text-center">
                    <Row className="text-center">
                        <Col>
                            <div className="firstload_error">
                                <span className="error_message">{this.state.firstLoadErr}</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }

        if (candidatesLists.length < 1) {
            return (
                <div className="text-center" style={{ marginTop: 50 }}>
                    {this.state.listload ?  
                        <Spinner animation="border" role="status" className="loading_spinner">
                            <span className="visually-hidden">Kandidaatide listide laadimine</span>
                        </Spinner>
                    
                        :

                        <Row>
                        <Col md={{ offset: 0 }}>
                        <Popup trigger={<button className="list_import_btn">Import</button>} modal>
                                {close => (
                                    <div className="text-center">
                                        <Row className="text-center">
                                            <Col className="list_import_title"><h2>Uus nimekiri</h2></Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col><br></br>Õppekava</Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>
                                                <select value={this.state.listCode} onChange={this.handleListCodeChange}>
                                                    <option value="">Vali õppekava</option>
                                                    {this.state.courses.map(course => (
                                                        <option value={course.id}>{course.name}</option>
                                                    ))}
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col><br></br>Aasta</Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>        
                                                <input name="year" type="number" defaultValue={this.state.year} onChange={this.handleSelectedYear} min="2021" max="2050"></input>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>
                                                <br></br>        
                                                <input name="file" type="file" onChange={this.onChangeHandler} accept=".xls, .xlsx"/>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>
                                                <br></br>
                                                <Button onClick={close} className="close_upload_btn">Tagasi</Button>
                                                <Button type="button" className="upload_btn" onClick={this.listDataToBackend}>Import</Button>
                                            </Col>
                                        </Row>
                                        {this.state.err &&
                                            <Row className="text-center">
                                                <Col className="error_box_list">
                                                    <span className="error_message">{this.state.err}</span>
                                                </Col>
                                            </Row>
                                        }
                                        {this.state.load &&
                                            <Row className="text-center">
                                                <Col>
                                                    <Spinner animation="border" role="status" className="loading_spinner">
                                                        <span className="visually-hidden">Kandidaatide listide laadimine</span>
                                                    </Spinner>
                                                </Col>
                                            </Row>
                                        }
                                    </div>
                                )}
                            </Popup>
                        </Col>
                    </Row>
                    }
                </div>
            )
        }
        return (
            <div>
                <CandidatesLists candidatesLists={candidatesLists} />
            </div>
        )
    }
}

export default CandidatesListsFetch;


