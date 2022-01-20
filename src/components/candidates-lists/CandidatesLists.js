import React, { Component } from 'react';
import axios from 'axios';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
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
            err: '',
            load: false
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
                <Container className="text-center mt-5">
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
                                                <select className="text-box" value={this.state.listCode} onChange={this.handleListCodeChange}>
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
                                                <input name="year" type="number" className="text-box" defaultValue={this.state.year} onChange={this.handleSelectedYear} min="2021" max="2050"></input>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>
                                                <br></br>        
                                                <input className="text-box" name="file" type="file" onChange={this.onChangeHandler} accept=".xls, .xlsx"/>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>
                                                <br></br>
                                                <Button onClick={close} className="export_btn r_mrg">Tagasi</Button>
                                                <Button className="import_btn l_mrg" onClick={this.listDataToBackend}>Import</Button>
                                                {this.state.err &&
                                                    <div className="error_box_list">
                                                        <span className="error_message">{this.state.err}</span>
                                                    </div>
                                                }
                                            </Col>
                                        </Row>
                                        {this.state.load && 
                                            <Spinner animation="border" role="status" className="loading_spinner">
                                                <span className="visually-hidden">Kandidaatide listide laadimine</span>
                                            </Spinner>
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
