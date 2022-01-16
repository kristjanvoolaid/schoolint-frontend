import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Select from 'react-select'

function LoTags({ tags, comments, handleCommentsChange, onSearchChange }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>Kommentaar<br></br><textarea class="comments-box text-box" value={comments} onChange={handleCommentsChange} rows="6" cols="20"></textarea></Col>
                    <Col md={2}>
                        Kat 1.1
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                        <br></br>
                        <label>Sildid</label>
                        <input type="text" placeholder="Search" onChange={onSearchChange} className="text-box"></input>
                        {tags.map(tag => (
                            <div>
                                <input type="checkbox" id={tag.name} />
                                <label for={tag.name}>{tag.name}</label>    
                            </div>
                        ))}
                    </Col>
                    <Col md={2}>
                        Kat 1.2
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col md={2}>
                        Kat 1.3
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col md={2}>
                        Kat 1.4
                        <br></br>
                        <select className="text-box">
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoTags
