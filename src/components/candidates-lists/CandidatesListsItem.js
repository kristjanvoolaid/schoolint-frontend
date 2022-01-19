import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './PopUp.css';
import authHeader from "../../services/AuthHeader";
import config from "../../config";
import "./Lists.css";
const FileDownload = require('js-file-download');

class CandidatesListsItem extends Component {
    constructor(props) {
        super(props)

        let date = new Date();

        this.state = {
            file: null,
            listCode: 1,
            year: date.getFullYear(),
            selectedValue: 1,
            enabled: props.enabled,
            err: '',
            load: false,
            listStatusload: false,
            deleteListLoad: false,
            deleteListErr: '',
            exportFile: null,
            exportLoad: false
        };
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0]
        });
    };

    handleListCodeChange = (e) => {
        this.setState({
            listCode: e.target.value
        });
    };

    onClickHandler = (e) => {
        
        const dataToSend = new FormData();
        dataToSend.append('file', this.state.file);
        dataToSend.append('year', this.state.year);
        dataToSend.append('id', this.props.id);

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
                url: config.API_URL + "/results",
                data: dataToSend,
                headers: authHeader()
            })
            .then(response => response.data)
            .then(result => window.location.reload())
            .catch(error => this.setState({ err: 'Faili importimisega tekkis probleem!', load: false }))
        }, 5000);
    }

    listStatusHandler = () => {

        this.setState({
            listStatusload: true
        });

        setTimeout(() => {
            if (this.state.enabled === 1) {
                this.setState({
                    enabled: 0
                })
            } else {
                this.setState({
                    enabled: 1
                })
            }

            axios({
                method: "PATCH",
                url: config.API_URL + `/lists/${this.props.id}`,
                data: {
                    enabled: this.state.enabled 
                },
                headers: authHeader()
            })
            .then(response => response.data)
            .then(result => this.setState({ listStatusload: false }))
            .catch(error => console.log(error));
        }, 3000)
    }

    deleteList = () => {
        const { id } = this.props;

        this.setState({ 
            deleteListErr: '',
            deleteListLoad: true
        });

        setTimeout(() => {
            axios({
                method: "DELETE",
                url: config.API_URL + `/lists/${id}`,
                headers: authHeader()
            })
            .then(response => response.data)
            .then(result => window.location.reload())
            .catch(error => this.setState({ deleteListErr: 'Faili kustutamisega tekkis probleem! Proovi uuesti!', deleteListLoad: false }));
        }, 3000);
    }

    exportList = () => {
        
        this.setState({
            exportLoad: true
        });

        const { id } = this.props;
        setTimeout(() => {
            axios({
                url: config.API_URL + `/lists/export/${id}`,
                method: 'GET',
                responseType: 'blob',
                headers: authHeader()
              })
              .then((response) => {
                  FileDownload(response.data, 'report.xlsx')
                  this.setState({
                      exportLoad: false
                  });
              });
        }, 3000);
    }

    render() {
        console.log(this.state.exportFile);
        let listStatus;
        if (this.state.enabled === 1) {
            listStatus = "Disable";
        } else {
            listStatus = "Enable";
        }
        const { id, listCode, year, created } = this.props;
        const formattedDate = created.slice(0, 10);
        return (
            <div>
                <Container className="text-center">
                    <Row>
                        <Col className="lists_data">{id}</Col>
                        <Col className="lists_data">{year}</Col>
                        <Col className="lists_data">{listCode}</Col>
                        <Col className="lists_data">{formattedDate}</Col>
                        <Col className="lists_data" md={4}>
                            <Popup trigger={<button className="import_btn">Lisa tulemused +</button>} modal>
                                {close => (
                                    <div className="text-center">
                                        <Row className="text-center popUp_title">
                                            <Col><h2>Kandidaatide tulemused</h2></Col>
                                        </Row>
                                        <Row className="text-center popUp_file">
                                            <Col>
                                                <label for="file_input">Vali fail: </label>
                                                <input name="file" type="file" onChange={this.handleFileChange} accept=".xls, .xlsx" className="button3"/>
                                            </Col>
                                        </Row>
                                        <Row className="text-center popUp_buttons">
                                            <Col>
                                                <button className="export_btn r_mrg" onClick={close}>Tagasi</button>
                                                &nbsp;
                                                &nbsp;
                                                <button onClick={this.onClickHandler} className="import_btn l_mrg">Lae üles</button>
                                                {this.state.err &&
                                                    <div className="error_box_list">
                                                        <span className="error_message">{this.state.err}</span>
                                                    </div>
                                                } 
                                            </Col>
                                        </Row>
                                        {this.state.load &&
                                        <Row className="text-center">
                                            <Col>
                                                <Spinner animation="border" role="status" className="results_spinner">
                                                    <span className="visually-hidden">Kandidaatide tulemuste laadimine</span>
                                                </Spinner>
                                            </Col>
                                        </Row>
                                        }
                                    </div>
                                )}
                            </Popup>
                            &nbsp;
                            <button onClick={this.exportList} className="export_btn">
                                Ekspordi
                                {this.state.exportLoad && 
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    >
                                    </Spinner>
                                    }
                            </button>
                            &nbsp;
                            <button onClick={this.listStatusHandler} className="enable_btn">
                                {listStatus}
                                {this.state.listStatusload && 
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    >
                                    </Spinner>}
                            </button>
                            &nbsp;
                            <Popup trigger={<button onClick={this.deleteList} className="enable_btn">Kustuta</button>} modal>
                                {close => (
                                    <Container>
                                        <Row className="text-center delete_list_title">
                                            <Col><h4>Kas olete kindel, et soovite antud listi kustutada?</h4></Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>
                                                <br></br>
                                                <button className="button2" onClick={close}>Tagasi</button>
                                                &nbsp;
                                                <button className="button1" onClick={this.deleteList}>Kustuta</button>
                                                {this.state.deleteListErr &&
                                                    <div className="error_box_list">
                                                        <span className="error_message">{this.state.deleteListErr}</span>
                                                    </div>
                                                }
                                            </Col>
                                        </Row>
                                        {this.state.deleteListLoad && 
                                            <Row className="text-center">
                                                <Col>
                                                    <Spinner animation="border" role="status" className="delete_list_spinner">
                                                        <span className="visually-hidden">Kandidaatide listide kustutamine</span>
                                                    </Spinner>
                                                </Col>
                                            </Row>
                                        }
                                        {/* {this.state.deleteListErr && 
                                            <Row className="text-center">
                                                <Col>
                                                    <div className="error_box_list">
                                                        <span className="error_message">{this.state.deleteListErr}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        } */}
                                    </Container>
                                )}
                            </Popup>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CandidatesListsItem;