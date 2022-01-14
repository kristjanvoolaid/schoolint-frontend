import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Popup from 'reactjs-popup';
import "../candidate-card/CandidatesCard.css";

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

            fetch(`http://127.0.0.1:3001/tags/${id}`, updateTagRequest)
            .then(response => response.json())
            .then(data => console.log(data));

            // Refresh page if tag is updated
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
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
                        <Col md={3}>
                            <Popup trigger={<Button>Muuda</Button>} modal>
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
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SettingsAppTags;
