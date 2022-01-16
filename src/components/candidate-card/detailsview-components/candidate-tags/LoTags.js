import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Select from 'react-select'

function LoTags({ tags, comments, handleCommentsChange, onSearchChange }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={2}>
                        Motivatsioon
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                        <br></br>
                    </Col>
                    <Col md={2}>
                        Väljendusoskus
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col md={2}>
                        Üldteadmised
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col md={2}>
                        Boonus
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                <Col md={2}></Col>
                <Col md={4}><br></br>Kommentaar<br></br><textarea class="comments-box text-box" value={comments} onChange={handleCommentsChange} rows="6" cols="20"></textarea></Col>
                <Col md={4}>
                <br></br>
                <label>Sildid</label><br></br>
                        <input type="text" placeholder="Search" onChange={onSearchChange} className="text-box"></input>
                        {tags.map(tag => (
                            <div>
                                <input type="checkbox" id={tag.name} />
                                <label for={tag.name}>{tag.name}</label>    
                            </div>
                        ))}
                </Col>
                <Col md={2}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoTags
