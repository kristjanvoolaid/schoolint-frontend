import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Popup from 'reactjs-popup';

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
        const { id } = this.props;
        const updateTagRequest = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, courseId })
        }

        fetch(`http://127.0.0.1:3001/tags/${id}`, updateTagRequest)
        .then(response => response.json())
        .then(data => console.log(data));
    }

    render() {
        const { id, name } = this.props;
        const { tagNameToUpdate, tagCourseIdToUpdate } = this.state;
        return (
            <div>
                <Container className="text-center">
                    <Row>
                    <Col md={3}>{id}</Col>
                    <Col md={6}>{name}</Col>
                    <Col md={3}>
                        <Popup trigger={<button>Muuda</button>} modal>
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
                                    <button>Tagasi</button>
                                    <button onClick={() => this.updateTag(tagNameToUpdate, tagCourseIdToUpdate)}>Lisa</button>
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

export default SettingsAppTags;
