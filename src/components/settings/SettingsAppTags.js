import axios from 'axios';
import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Popup from 'reactjs-popup';
import "../candidate-card/CandidatesCard.css";
import config from '../../config';
import authHeader from '../../services/AuthHeader';
import * as AiIcons from 'react-icons/ai';

class SettingsAppTags extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tagNameToUpdate: '',
            tagCourseIdToUpdate: ''
        }
    }

    handleTagNameChange = (e) => {
        this.setState({
            tagNameToUpdate: e.target.value
        })
    };

    handleTagCourseIdChange = (e) => {
        this.setState({
            tagCourseIdToUpdate: e.target.value
        })
    };

    updateTag(name, courseId) {
        try {
            const { id } = this.props;
            const updateTagRequest = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, courseId })
            }

            fetch(`${config.API_URL}/tags/${id}`, updateTagRequest)
            .then(response => response.json())
            .then(data => console.log(data));

            // Refresh page if tag is updated
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    }

    deleteTag(id) {
        axios({
            method: "DELETE",
            url: config.API_URL + `/tags/${id}`,
            headers: authHeader()
        })
        .then(response => response.data)
        .then(result => window.location.reload())
        .catch(error => console.log(error))
    }

    render() {
        const { id, name, specialityCode } = this.props;
        const { tagNameToUpdate, tagCourseIdToUpdate } = this.state;
        return (
            <div>
                <Container className="text-center">
                    <Row className="settings_data">
                        <Col md={3}>{id}</Col>
                        <Col md={3}>{name}</Col>
                        <Col md={3}>{specialityCode}</Col>
                        <Col md={1}>
                            <Popup trigger={<AiIcons.AiTwotoneEdit size={25} className="change_btn" />} modal>
                                {close => (
                                    <div>
                                        <Row className="text-center">
                                            <Col className="settings_title"><h2>Muuda silti</h2></Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col><br></br>Nimi</Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>
                                                <br></br>
                                                <input type="text" placeholder="Nimi" defaultValue={name} onChange={this.handleTagNameChange}></input>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col><br></br>Õppekava</Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>
                                                <select onChange={this.handleTagCourseIdChange}>
                                                    <option value="Vali" disabled hidden>Vali</option>
                                                    <option value="1">RIF</option>
                                                    <option value="2">KTD</option>
                                                    <option value="3">LO</option>
                                                    <option value="4">TE</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>
                                                <br></br>
                                                <Button onClick={close}>Tagasi</Button>
                                                {/* <Button className="change_tag_btn" onClick={() => this.updateTag(tagNameToUpdate, tagCourseIdToUpdate)}>Lisa</Button> */}
                                                <Button className="change_tag_btn" onClick={() => this.updateTag(tagNameToUpdate, tagCourseIdToUpdate)}>Lisa</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                            </Popup>
                        </Col>
                        <Col md={1}>
                                <AiIcons.AiFillDelete size={25} className="delete_btn" onClick={() => this.deleteTag(id)} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SettingsAppTags;
