import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import SettingsAppUser from './SettingsAppUser';

class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            specialityCode: ''
        }
    }

    handleUserFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    };

    handleUserLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    };

    handleUserEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handleUserPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleUserSpecialityCode = (e) => {
        this.setState({
            specialityCode: e.target.value
        })
    };

    render() {
        const { users, createUser } = this.props;
        const { firstName, lastName, email, password, specialityCode } = this.state;
        return (
            <div>
                <Container className="text-center">
                <Row>
                    <Col>Kasutajad</Col>
                </Row>
                <Row>
                    <Col md={{ offset: 9 }}>
                        <Popup trigger={<button>Lisa uus +</button>} modal>
                            <Row className="text-center">
                                <Col>Uus kasutaja</Col>
                            </Row>
                            <Row>
                                <Col md={{ offset: 4 }}>Eesnimi</Col>
                            </Row>
                            <Row>
                                <Col md={{ offset: 4 }}><input type="text" placeholder="Nimi" onChange={this.handleUserFirstName}></input></Col>
                            </Row>
                            <Row>
                                <Col md={{ offset: 4 }}>Perekonnanimi</Col>
                            </Row>
                            <Row>
                                <Col md={{ offset: 4 }}><input type="text" placeholder="Nimi" onChange={this.handleUserLastName}></input></Col>
                            </Row>
                            <Row>
                                <Col md={{ offset: 4 }}>Email</Col>
                            </Row>
                            <Row>
                                <Col md={{ offset: 4 }}><input type="text" placeholder="Email" onChange={this.handleUserEmail}></input></Col>
                            </Row>
                            <Row>
                                <Col md={{ offset: 4 }}>Parool</Col>
                            </Row>
                            <Row>
                                <Col md={{ offset: 4 }}><input type="password" placeholder="Parool" onChange={this.handleUserPassword}></input></Col>
                            </Row>
                            <Row className="text-center">
                                <Col>Õppekava</Col>
                            </Row>
                            <Row className="text-center">
                                <Col>
                                    <select onChange={this.handleUserSpecialityCode}>
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
                                    <button onClick={() => createUser(firstName, lastName, email, password, specialityCode)}>Lisa</button>
                                </Col>
                            </Row>
                        </Popup>
                    </Col>
                </Row>
                <Row>
                    <Col>Nr</Col>
                    <Col>Nimi</Col>
                    <Col>Email</Col>
                    <Col>Õppekava</Col>
                    <Col></Col>
                </Row>
                {
                    users.map((user, i) => {
                        return (
                            <SettingsAppUser
                                key={users[i].id}
                                id={users[i].id}
                                firstName={users[i].firstName}
                                lastName={users[i].lastName}
                                email={users[i].email}
                                specialityCode={users[i].specialityCode}
                            />
                        )
                    })
                }
            </Container>
            </div>
        )
    }
}

export default Settings;