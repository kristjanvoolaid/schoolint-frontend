import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import config from "../../config";
import authHeader from "../../services/AuthHeader";

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
                <Row>
                    <Col md={1}>{id}</Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{email}</Col>
                    <Col md={3}>{specialityCode}</Col>
                    <Col md={1}>
                        <Popup trigger={<button>Muuda</button>} modal>
                            {close => (
                                <div>
                                    <Row className="text-center">
                                        <Col>Muuda kasutajat</Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4 }}>Eesnimi</Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4 }}><input type="text" placeholder="Nimi" defaultValue={firstName} onChange={this.handleUserFirstNameChange}></input></Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4 }}>Perekonnanimi</Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4 }}><input type="text" placeholder="Nimi" defaultValue={lastName} onChange={this.handleUserLastNameChange}></input></Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4 }}>Email</Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4 }}><input type="text" placeholder="Email" defaultValue={email} onChange={this.handleUserEmailChange}></input></Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4 }}>Parool</Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4 }}><input type="password" placeholder="Parool" onChange={this.handleUserPasswordChange}></input></Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col>Õppekava</Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col>
                                            <select defaultValue={specialityCode} onChange={this.handleUserSpecialityCodeChange}>
                                                <option value="Vali" disabled hidden>Vali</option>
                                                <option value="RIF">RIF</option>
                                                <option value="KTD">KTD</option>
                                                <option value="LO">LO</option>
                                                <option value="TE">TE</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4 }}>
                                            <button onClick={close}>Tagasi</button>
                                            <button onClick={() => this.changeUser(firstNameToUpdate, lastNameToUpdate, emailToUpdate, passwordToUpdate, specialityCodeToUpdate)}>Muuda</button>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </Popup>
                    </Col>
                    <Col md={1}>
                                    <button onClick={() => this.deleteUser(id)}>Kustuta</button>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default SettingsAppUser;