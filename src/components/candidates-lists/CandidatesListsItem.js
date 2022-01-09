import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './PopUp.css';
import authHeader from "../../services/AuthHeader";

class CandidatesListsItem extends Component {
    constructor(props) {
        super(props)

        let date = new Date();

        this.state = {
            file: null,
            listCode: 1,
            year: date.getFullYear(),
            selectedValue: 1
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
        
        // TODO: Make proper alerting box or sign that no file is selected. Current solution is for testing
        if (this.state.file == null) {
            return alert('No file selected!');
        }

        const dataToSend = new FormData();
        dataToSend.append('file', this.state.file);
        dataToSend.append('year', this.state.year);

        // Listi id kaasa

        try {
            // Sending file to backend
            axios({
                method: "POST",
                url: "http://localhost:3001/results",
                data: dataToSend,
                headers: authHeader()
            })
            .then(response => response.statusText)
            .then(result => console.log(result));

            alert('File sent!')
            this.setState({
                file: null
            });
        } catch (error) {
            console.log(error)
            return alert('Failed to send file')   
        }
    }

    render() {
        const { id, listCode, year, created } = this.props;
        const formattedDate = created.slice(0, 10);
        return (
            <div>
                <Container className="text-center">
                    <Row>
                        <Col>{id}</Col>
                        <Col>{year}</Col>
                        <Col>{listCode}</Col>
                        <Col>{formattedDate}</Col>
                        <Col>
                            <Popup trigger={<button className="button1">Import</button>} modal>
                                {close => (
                                    <div>
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
                                                <button className="button2" onClick={close}>Tagasi</button>
                                                &nbsp;
                                                &nbsp;
                                                &nbsp;
                                                <Link to="/lists">
                                                    <button onClick={this.onClickHandler} className="button1">Lae üles</button>
                                                </Link> 
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                            </Popup>
                            &nbsp;
                            &nbsp;
                            <button className="button2">Export</button>
                            <p></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CandidatesListsItem;