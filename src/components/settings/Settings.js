import React, { Component } from 'react';
import { Col, Container, Row, Tab, Tabs, Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import SettingsAppTags from './SettingsAppTags';
import SettingsAppUser from './SettingsAppUser';
import "./Settings.css";
import "../candidate-card/CandidatesCard.css";

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
                                <Popup trigger={<Button className="sett_primary">Lisa +</Button>} modal>
                                    {close => (
                                        <div>
                                            <Row className="text-center">
                                                <Col className="settings_title"><h2>Uus kasutaja</h2></Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col><br></br>Eesnimi</Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col><input className="text-box" type="text" placeholder="Nimi" onChange={this.handleUserFirstName}></input></Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col>Perekonnanimi</Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col><input className="text-box" type="text" placeholder="Nimi" onChange={this.handleUserLastName}></input></Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col>Email</Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col><input className="text-box" type="text" placeholder="Email" onChange={this.handleUserEmail}></input></Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col>Parool</Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col><input className="text-box" type="password" placeholder="Parool" onChange={this.handleUserPassword}></input></Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col><br></br>Õppekava</Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col>
                                                    <select className="text-box" defaultValue={this.state.specialityCode} onChange={this.handleUserCourseId}>
                                                        <option value="Vali" disabled hidden>Vali</option>
                                                        <option value="1">RIF</option>
                                                        <option value="2">LO</option>
                                                        <option value="3">KTD</option>
                                                    </select>
                                                </Col>
                                            </Row>
                                            <Row className="text-center">
                                                <Col>
                                                    <br></br>
                                                    <Button className="sett_secondary" onClick={close}>Tagasi</Button>
                                                    <Button className="sett_primary" onClick={() => createUser(firstName, lastName, email, password, specialityCode)}>Lisa</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    )}
                                </Popup>
                            </Col>
                        </Row>
                        <Row className="settings_header">
                            <Col md={1}>ID</Col>
                            <Col md={3}>Nimi</Col>
                            <Col md={3}>Email</Col>
                            <Col md={3}>Õppekava</Col>
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
                                        <Popup trigger={<Button className="sett_primary">Lisa +</Button>} modal nested>
                                            {close => (
                                                <div>
                                                    <Row className="text-center">
                                                        <Col className="settings_title"><h2>Uus silt</h2></Col>
                                                    </Row>
                                                    <Row className="text-center">
                                                        <Col><br></br>Nimi</Col>
                                                    </Row>                                        
                                                    <Row className="text-center">
                                                        <Col>
                                                            <input className="text-box" type="text" placeholder="Nimi" onChange={this.handleTagName}></input>
                                                        </Col>
                                                    </Row>
                                                    <Row className="text-center">
                                                        <Col><br></br>Õppekava</Col>
                                                    </Row>
                                                    <Row className="text-center">
                                                        <Col>
                                                            <select className="text-box" defaultValue={tagCourseId} onChange={this.handleTagCourseId}>
                                                                <option value="Vali" disabled hidden>Vali</option>
                                                                <option value="1">RIF</option>
                                                                <option value="2">LO</option>
                                                                <option value="3">KTD</option>
                                                            </select>                                       
                                                        </Col>
                                                    </Row>
                                                    <Row className="text-center">
                                                        <Col>
                                                            <br></br>
                                                            <Button className="sett_secondary" onClick={close}>Tagasi</Button>
                                                            <Button className="sett_primary" onClick={() => createTag(tagName, tagCourseId)}>Lisa</Button>
                                                        </Col>
                                                    </Row>
                                                </div>     
                                            )}
                                        </Popup>
                                    </Col>
                                </Row>
                                <Row className="settings_header">
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