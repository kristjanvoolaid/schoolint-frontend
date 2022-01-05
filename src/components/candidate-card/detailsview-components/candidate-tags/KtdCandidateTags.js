import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function KtdCandidateTags({ comments, handleCommentsChange }) { 
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6}>
                        Sildid
                        <br></br>
                        <input type="text" placeholder="Search"></input>
                    </Col>
                    <Col sm={1}>
                        Kat 1.1
                        <br></br>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={1}>
                        Kat 1.2
                        <br></br>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={1}>
                        Kat 1.3
                        <br></br>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={1}>
                        Kat 1.4
                        <br></br>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={1}>
                        Kat 1.5
                        <br></br>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}></Col>
                    <Col sm={4}>
                        Kommentaar
                        <br></br>
                        <textarea value={comments} onChange={handleCommentsChange} rows="6" cols="70"></textarea>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};