import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Popup from 'reactjs-popup';
import axios from "axios";
import authHeader from "../../../../services/AuthHeader";
import config from "../../../../config";
import { Link } from 'react-router-dom';

class KtdCandidateAttachments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            file: null,
            attachmentId: '',
            attachments: props.attachments,
        }
    }

    setFile = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    sendCandidateAttachment = () => {
        const dataToSend = new FormData();
        dataToSend.append('file', this.state.file);
        dataToSend.append('candidateId', this.props.id);

        axios({
            method: "POST",
            url: config.API_URL + "/candidates/attachment/",
            data: dataToSend,
            headers: authHeader()
        })
        .then(response => response.data)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }

    deleteAttachment = (e) => {
        const id = e.target.id;
        const candidateId = this.props.id;

        axios({
            method: "DELETE",
            url: config.API_URL + `/candidates/attachment`,
            data: {
              id,
              candidateId  
            },
            headers: authHeader()
        })
        .then(response => response.data)
        .then(result => window.location.reload())
        .catch(error => console.log(error));
    }

    render() {
        const { attachments } = this.props;
        // const { attachments } = this.state;

        return (
            <div>
                <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={2}>
                        {attachments.length < 1 && 
                            <Popup trigger={<button>Lisa makett +</button>} modal>
                            {close => (
                                <div>
                                    <input type="file" onChange={this.setFile}></input>
                                    <br></br>
                                    <button onClick={close}>Sulge</button>
                                        <button onClick={this.sendCandidateAttachment}>Vali</button>
                                </div>
                            )}
                            </Popup>
                        }
                        {attachments.length > 0 && 
                        
                            attachments.map((attachment, i) => (
                                <p key={attachments[i].id} id={attachments[i].id}>{attachments[i].fileName}<button id={attachments[i].id} onClick={this.deleteAttachment}>X</button></p>
                            ))
                        } 
                    </Col>
                    <Col md={1}></Col>
                    <Col md={2}>
                        Originaalsus <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col md={2}>
                        Kvaliteet<br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col md={2}>
                        Presentatsoon<br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
            <hr></hr>
            </div>
        )
    }
}

export default KtdCandidateAttachments;
