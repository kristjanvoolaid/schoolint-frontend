import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Popup from 'reactjs-popup';

function KtdCandidateAttachments() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={2}>
                        <Popup trigger={<button className="button1">Lisa makett +</button>} modal>
                            {close => (
                                <div>
                                    <input type="file"></input>
                                    <br></br>
                                    <button onClick={close}>Sulge</button>
                                    <button>Vali</button>
                                </div>
                            )}
                        </Popup>
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

export default KtdCandidateAttachments;
