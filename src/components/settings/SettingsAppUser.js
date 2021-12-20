import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Popup from 'reactjs-popup';


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
        const updatedUserRequest = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email, password, specialityCode })
        }

        fetch(`http://127.0.0.1:3001/users/${id}`, updatedUserRequest)
        .then(response => response.json())
        .then(data => console.log(data));
    }

    render() {
        const { id, firstName, lastName, email, specialityCode } = this.props;
        const { firstNameToUpdate, lastNameToUpdate, emailToUpdate, passwordToUpdate, specialityCodeToUpdate } = this.state;
        const name = firstName + " " + lastName;
        return (
            <div>
                <Container className="text-center">
                <Row>
                    <Col>{id}</Col>
                    <Col>{name}</Col>
                    <Col>{email}</Col>
                    <Col>{specialityCode}</Col>
                    <Col>
                        <Popup trigger={<button>Muuda</button>} modal>
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
                                    <button>Tagasi</button>
                                    <button onClick={() => this.changeUser(firstNameToUpdate, lastNameToUpdate, emailToUpdate, passwordToUpdate, specialityCodeToUpdate)}>Muuda</button>
                                </Col>
                            </Row>
                        </Popup>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default SettingsAppUser;