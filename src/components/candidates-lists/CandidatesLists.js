import React, { Component } from 'react';
import axios from 'axios';
import { Button, Col, Container, Row, Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import CandidatesListsItem from './CandidatesListsItem';
import authHeader from '../../services/AuthHeader';
import config from "../../config";
import "./Lists.css";

class CandidatesLists extends Component {
    constructor(props) {
        super(props)

        let date = new Date();

        this.state = {
            file: null,
            templateId: 1,
            year: date.getFullYear(),
            listCode: 1,
            courses: [],
            err: ''
        }
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

    componentDidMount() {
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

    render() {
        const { candidatesLists } = this.props;
        return (
            <div>
                <Container className="text-center">
                <Row>
                    <Col md={{ offset: 11 }}>
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
                                                <Col>
                                                    <div className="error_box_list">
                                                        <span className="error_message">{this.state.err}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        }
                                    </div>
                                )}
                            </Popup>
                    </Col>
                </Row>
                <Row className="lists_header">
                        <Col>Nr</Col>
                        <Col>Aasta</Col>
                        <Col>Õppekava</Col>
                        <Col>Loodud</Col>
                        <Col md={4}>Tegevus</Col>
                </Row>
            </Container>
            {
                candidatesLists.map((listItem, i) => {
                    return (
                        <CandidatesListsItem
                            id={candidatesLists[i].id}
                            listCode={candidatesLists[i].listCode}
                            year={candidatesLists[i].year}
                            created={candidatesLists[i].created}
                            enabled={candidatesLists[i].enabled}
                        />
                    )
                })
            }
            </div>
        )
    }
}

export default CandidatesLists;
