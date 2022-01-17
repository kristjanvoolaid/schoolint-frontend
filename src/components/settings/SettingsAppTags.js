import axios from 'axios';
import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Popup from 'reactjs-popup';
import "../candidate-card/CandidatesCard.css";
import config from '../../config';
import authHeader from '../../services/AuthHeader';

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
                    <Row>
                        <Col md={3}>{id}</Col>
                        <Col md={3}>{name}</Col>
                        <Col md={3}>{specialityCode}</Col>
                        <Col md={1}>
                            <Popup trigger={<button>Muuda</button>} modal>
                                {close => (
                                    <div>
                                        <Row className="text-center">
                                            <Col>Muuda silti</Col>
                                        </Row>
                                        <Row>
                                            <Col md={{ offset: 4 }}>Nimi</Col>
                                        </Row>
                                        <Row>
                                            <Col md={{ offset: 4 }}>
                                                <input type="text" placeholder="Nimi" defaultValue={name} onChange={this.handleTagNameChange}></input>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            <Col>Õppekava</Col>
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
                                        <Row>
                                            <Col md={{ offset: 4 }}>
                                                <Button onClick={close}>Tagasi</Button>
                                                <Button onClick={() => this.updateTag(tagNameToUpdate, tagCourseIdToUpdate)}>Lisa</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                            </Popup>
                        </Col>
                        <Col md={1}>
                                    <button onClick={() => this.deleteTag(id)}>Kustuta</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SettingsAppTags;
