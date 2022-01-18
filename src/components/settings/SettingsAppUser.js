import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import config from "../../config";
import authHeader from "../../services/AuthHeader";
import "../candidate-card/CandidatesCard.css";
import * as AiIcons from 'react-icons/ai';

class SettingsAppUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstNameToUpdate: '',
            lastNameToUpdate: '',
            emailToUpdate: '',
            passwordToUpdate: '',
            specialityCodeToUpdate: ''
        }
    }

    handleUserFirstNameChange = (e) => {
        this.setState({
            firstNameToUpdate: e.target.value
        })
    };

    handleUserLastNameChange = (e) => {
        this.setState({
            lastNameToUpdate: e.target.value
        })
    };

    handleUserEmailChange = (e) => {
        this.setState({
            emailToUpdate: e.target.value
        })
    };

    handleUserPasswordChange = (e) => {
        this.setState({
            passwordToUpdate: e.target.value
        })
    };

    handleUserSpecialityCodeChange = (e) => {
        this.setState({
            specialityCodeToUpdate: e.target.value
        })
    };

    changeUser(firstName, lastName, email, password, specialityCode) {
        const { id } = this.props;
        axios({
            method: 'PATCH',
            url: config.API_URL + `/users/${id}`,
            data: {
                firstName,
                lastName,
                email,
                password,
                specialityCode
            },
            headers: authHeader()
        })
        .then(response => 
            response.status, 
            window.location.reload(false))
        .catch(error => console.log(error));
    }

    deleteUser(id) {
        axios({
            method: "DELETE",
            url: config.API_URL + `/users/${id}`,
            headers: authHeader()
        })
        .then(response => response.data)
        .then(result => window.location.reload())
        .catch(error => console.log(error))
    }

    render() {
        const { id, firstName, lastName, email, specialityCode } = this.props;
        const { firstNameToUpdate, lastNameToUpdate, emailToUpdate, passwordToUpdate, specialityCodeToUpdate } = this.state;
        const name = firstName + " " + lastName;
        return (
            <div>
                <Container className="text-center">
                <Row className="settings_data">
                    <Col md={1}>{id}</Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{email}</Col>
                    <Col md={3}>{specialityCode}</Col>
                    <Col md={1}>
                        <Popup trigger={<AiIcons.AiTwotoneEdit size={25} className="change_btn" />} modal>
                            {close => (
                                <div>               
                                    <Row className="text-center">
                                        <Col className="settings_title"><h2>Muuda kasutajat</h2></Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col><br></br>Eesnimi</Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col><input className="text-box" type="text" placeholder="Nimi" defaultValue={firstName} onChange={this.handleUserFirstNameChange}></input></Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col>Perekonnanimi</Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col><input className="text-box" type="text" placeholder="Nimi" defaultValue={lastName} onChange={this.handleUserLastNameChange}></input></Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col>Email</Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col><input className="text-box" type="text" placeholder="Email" defaultValue={email} onChange={this.handleUserEmailChange}></input></Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col>Parool</Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col><input className="text-box" type="password" placeholder="Parool" onChange={this.handleUserPasswordChange}></input></Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col><br></br>Õppekava</Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col>
                                            <select className="text-box" defaultValue={specialityCode} onChange={this.handleUserSpecialityCodeChange}>
                                                <option value="Vali" disabled hidden>Vali</option>
                                                <option value="RIF">RIF</option>
                                                <option value="KTD">KTD</option>
                                                <option value="LO">LO</option>
                                                <option value="TE">TE</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col>
                                            <br></br>
                                            <Button onClick={close} className="sett_secondary">Tagasi</Button>
                                            <Button className="sett_primary" onClick={() => this.changeUser(firstNameToUpdate, lastNameToUpdate, emailToUpdate, passwordToUpdate, specialityCodeToUpdate)}>Muuda</Button>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </Popup>
                    </Col>
                    <Col md={1}>
                                    <AiIcons.AiFillDelete size={25} className="delete_btn" onClick={() => this.deleteUser(id)} />
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default SettingsAppUser;