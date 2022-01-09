import React, { Component } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import SettingsAppTags from './SettingsAppTags';
import SettingsAppUser from './SettingsAppUser';
import AuthRoleService from "../../services/AuthRole";

class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            specialityCode: 1,
            tagName: '',
            tagCourseId: 1,
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

    handleTagName = (e) => {
        this.setState({
            tagName: e.target.value
        })
    };

    handleTagCourseId = (e) => {
        this.setState({
            tagCourseId: e.target.value
        })
    };

    render() {
        const { users, createUser, tags, createTag } = this.props;
        const { firstName, lastName, email, password, specialityCode, tagName, tagCourseId } = this.state;
        return (
            <div>
                <Tabs fill defaultActiveKey="kasutajad">
                    <Tab eventKey="kasutajad" title="Kasutajad">
                    <Container className="text-center">
                        <Row>
                            <Col md={{ offset: 9 }}>
                                <Popup trigger={<button>Lisa uus +</button>} modal>
                                    {close => (
                                        <div>
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
                                                    <select defaultValue={this.state.specialityCode} onChange={this.handleUserCourseId}>
                                                        <option value="Vali" disabled hidden>Vali</option>
                                                        <option value="1">RIF</option>
                                                        <option value="2">LO</option>
                                                        <option value="3">KTD</option>
                                                    </select>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={{ offset: 4 }}>
                                                    <button onClick={close}>Tagasi</button>
                                                    <button onClick={() => createUser(firstName, lastName, email, password, specialityCode)}>Lisa</button>
                                                </Col>
                                            </Row>
                                        </div>
                                    )}
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
                    </Tab>
                        <Tab eventKey="sildid" title="Sildid">
                            <Container className="text-center">
                                <Row>
                                    <Col md={{ offset: 9 }}>
                                        <Popup trigger={<button>Lisa +</button>} modal nested>
                                            {close => (
                                                <div>
                                                    <Row className="text-center">
                                                        <Col>Uus silt</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={{ offset: 4 }}>Nimi</Col>
                                                    </Row>                                        
                                                    <Row>
                                                        <Col md={{ offset: 4 }}><input type="text" placeholder="Nimi" onChange={this.handleTagName}></input></Col>
                                                    </Row>
                                                    <Row className="text-center">
                                                        <Col>Õppekava</Col>
                                                    </Row>
                                                    <Row className="text-center">
                                                        <Col>
                                                            <select defaultValue={tagCourseId} onChange={this.handleTagCourseId}>
                                                                <option value="Vali" disabled hidden>Vali</option>
                                                                <option value="1">RIF</option>
                                                                <option value="2">LO</option>
                                                                <option value="3">KTD</option>
                                                            </select>                                       
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={{ offset: 4 }}>
                                                            <button onClick={close}>Tagasi</button>
                                                            <button onClick={() => createTag(tagName, tagCourseId)}>Lisa</button>
                                                        </Col>
                                                    </Row>
                                                </div>     
                                            )}
                                        </Popup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>Nr</Col>
                                    <Col md={3}>Nimi</Col>
                                    <Col md={3}>Õppekava</Col>
                                    <Col></Col>
                                </Row>
                                {
                                tags.map((tag, i) => {
                                    return (
                                        <SettingsAppTags
                                            key={tags[i].id}
                                            id={tags[i].id}
                                            name={tags[i].name}
                                            specialityCode={tags[i].specialityCode}
                                        />
                                    )
                                })
                                }
                            </Container>
                        </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Settings;