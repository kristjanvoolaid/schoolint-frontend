import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Popup from 'reactjs-popup';

function KtdCandidateAttachments() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={{ span: 1, offset: 6 }}>Kat 1.1</Col>
                    <Col sm={1}>Kat 1.2</Col>
                    <Col sm={1}>Kat 1.3</Col>
                </Row>
                <Row>
                    <Col sm={{ span: 2, offset: 4 }}>
                        <Popup trigger={<button>Lisa makett +</button>} modal>
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
                    <Col sm={1}>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={1}>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={1}>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
        </div>
    )
}

export default KtdCandidateAttachments;
