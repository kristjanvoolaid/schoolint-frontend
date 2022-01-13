import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function LoTags({ tags, comments, handleCommentsChange, onSearchChange }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={4}>Kommentaar<br></br><textarea value={comments} onChange={handleCommentsChange} rows="6" cols="20"></textarea></Col>
                    <Col sm={2}>
                        Kat 1.1
                        <br></br>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                        <br></br>
                        <label>Sildid</label>
                        <input type="text" placeholder="Search" onChange={onSearchChange}></input>
                        {tags.map(tag => (
                            <div>
                                <input type="checkbox" id={tag.name} />
                                <label for={tag.name}>{tag.name}</label>    
                            </div>
                        ))}
                    </Col>
                    <Col sm={2}>
                        Kat 1.2
                        <br></br>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.3
                        <br></br>
                        <select>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                            <option value="test">Test</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.4
                        <br></br>
                        <select>
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
