import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function KtdCandidateTags({ tags, comments, handleCommentsChange, onSearchChange }) { 
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={2}>
                        Kat 1.1
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.2
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.3
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.4
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.5
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                <Col sm={6}>
                    <br></br>
                        Sildid
                        <br></br>
                        <input type="text" placeholder="Search" onChange={onSearchChange}></input>
                        {tags.map(tag => (
                            <div>
                                <input type="checkbox" id={tag.name} />
                                <label for={tag.name}>{tag.name}</label>    
                            </div>
                        ))}
                    </Col>
                    <Col sm={5}> <br></br>Kommentaar<br></br>
                        <textarea className="text-box comments-box" value={comments} onChange={handleCommentsChange} rows="6" cols="20"></textarea>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
