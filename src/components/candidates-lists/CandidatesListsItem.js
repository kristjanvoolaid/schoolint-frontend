import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './PopUp.css';

class CandidatesListsItem extends Component {
    constructor(props) {
        super(props)

        let date = new Date();

        this.state = {
            file: null,
            listCode: 'RIF',
            year: date.getFullYear(),
            selectedValue: 2
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

    listDataToBackend = () => {

        const dataToSend = new FormData();
        dataToSend.append('file', this.state.file);
        dataToSend.append('templateValue', this.state.selectedValue);
        dataToSend.append('year', this.state.year);
        dataToSend.append('listCode', this.state.listCode);

        try {
            axios({
                method: "POST",
                url: "http://localhost:3001/upload",
                data: dataToSend
            })
            .then(response => response.statusText)
            .then(result => console.log(result));

            this.setState({
                file: null
            });
        } catch (error) {
            console.log(error);
        }

        if (this.state.file == null) {
            return alert('No file selected!');
        }

        return alert('File sent');
    }

    render() {
        const { id, listCode, year } = this.props;
        return (
            <div>
                <Container className="text-center">
                    <Row>
                        <Col>{id}</Col>
                        <Col>{year}</Col>
                        <Col>{listCode}</Col>
                        <Col>
                        <Popup trigger={<button>Import</button>} modal>
                                {/* <div> */}
                                    <Row className="text-center popUp_title">
                                        <Col><h2>Uus nimekiri</h2></Col>
                                    </Row>
                                    <Row className="text-center popUp_listInfo">
                                        <Col>Õppekava</Col>
                                        <Col>Aasta</Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col>
                                            <select value={this.state.listCode} onChange={this.handleListCodeChange}>
                                                <option>KTD</option>
                                                <option>RIF</option>
                                                <option>LO</option>
                                                <option>TE</option>
                                            </select>
                                        </Col>
                                        <Col><input defaultValue={this.state.year} type="number"></input></Col>
                                    </Row>
                                    <Row className="text-center popUp_file">
                                        <Col>
                                            <label for="file_input">Vali fail: </label>
                                            <input name="file" type="file" onChange={this.handleFileChange} accept=".xls, .xlsx"/>
                                        </Col>
                                    </Row>
                                    <Row className="text-center popUp_buttons">
                                        <Col>
                                            <button>Tagasi</button>
                                            <Link to="/lists">
                                                <button onClick={this.listDataToBackend}>Lae üles</button>
                                            </Link> 
                                        </Col>
                                    </Row>
                                {/* </div> */}
                            </Popup>
                            <button>Export</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CandidatesListsItem;