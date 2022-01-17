import React, { Component } from 'react';
import axios from "axios";
import CandidatesLists from '../components/candidates-lists/CandidatesLists';
import authHeader from "../services/AuthHeader";
import { Spinner, Row, Col } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import config from "../config";

class CandidatesListsFetch extends Component {
    constructor() {
        super()
        this.state = {
            candidatesLists: [],
            courses: []
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

        try {

            if (this.state.file == null) {
                return alert('No file selected!');
            }

            axios({
                method: "POST",
                url: `${config.API_URL}/lists`,
                data: dataToSend,
                headers: authHeader()
            })
            .then(response => response.data)
            .then(result => window.location.reload());

            this.setState({
                file: null
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { candidatesLists, courses } = this.state;

        if (candidatesLists.length < 1) {
            return (
                <div className="text-center" style={{ marginTop: 50 }}>
                    <Row>
                        <Col md={{ offset: 0 }}>
                        <Popup trigger={<button className="button1">Import</button>} modal>
                            {close => (
                                <div className="text-center">
                                    <h1>Uus nimekiri</h1>
                                    <select value={this.state.listCode} onChange={this.handleListCodeChange}>
                                        <option value="">Vali õppekava</option>
                                        {this.state.courses.map(course => (
                                            <option value={course.id}>{course.name}</option>
                                        ))}
                                        </select>
                                    <input name="year" type="number" defaultValue={this.state.year} onChange={this.handleSelectedYear} min="2021" max="2050"></input>
                                    <input name="file" type="file" onChange={this.onChangeHandler} accept=".xls, .xlsx"/>
                                    <button type="button" onClick={this.listDataToBackend}>Upload</button>
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


