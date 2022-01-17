import React, { Component } from 'react';
import axios from "axios";
import CandidatesLists from '../components/candidates-lists/CandidatesLists';
import authHeader from "../services/AuthHeader";
import { Spinner, Row, Col, Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import config from "../config";

class CandidatesListsFetch extends Component {
    constructor() {
        super()

        let date = new Date();

        this.state = {
            candidatesLists: [],
            courses: [],
            year: date.getFullYear(),
            err: ''
        };
    }
    
    componentDidMount() {
        this.fetchCoursesLists();
        this.fetchCourses();
    }

    fetchCoursesLists() {
        axios.get(config.API_URL + '/lists', { headers: authHeader() })
        .then((response) => {
            this.setState({
                candidatesLists: response.data.candidatesLists
            })
        })
        .catch((error) => {
            console.log(error);
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

        axios({
            method: "POST",
            url: `${config.API_URL}/lists`,
            data: dataToSend,
            headers: authHeader()
        })
        .then(response => response.data)
        .then(result => window.location.reload())
        .catch(error => this.setState({ err: 'Faili importimisega tekkis probleem!' }))
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

        if (candidatesLists.length < 1) {
            return (
                <div className="text-center" style={{ marginTop: 50 }}>
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
                                                <Col className="error_box">
                                                    <span className="error_message">{this.state.err}</span>
                                                </Col>
                                            </Row>
                                        }
                                    </div>
                                )}
                            </Popup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Kandidaatide listide laadimine</span>
                            </Spinner>
                        </Col>
                    </Row>
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


