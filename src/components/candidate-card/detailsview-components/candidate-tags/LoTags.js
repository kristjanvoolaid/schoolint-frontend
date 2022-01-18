import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function LoTags({ tags, comments, handleCommentsChange, onSearchChange, handleTagsCheckbox, handleInterviewCatScores }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={2}>
                        Motivatsioon
                        <br></br>
                        <select onChange={handleInterviewCatScores} className="text-box" name="interviewCat1">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <br></br>
                    </Col>
                    <Col md={2}>
                        Väljendusoskus
                        <br></br>
                        <select onChange={handleInterviewCatScores} className="text-box" name="interviewCat2">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                    <Col md={2}>
                        Üldteadmised
                        <br></br>
                        <select onChange={handleInterviewCatScores} className="text-box" name="interviewCat3">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                    <Col md={2}>
                        Boonus
                        <br></br>
                        <select onChange={handleInterviewCatScores} className="text-box" name="interviewCat4">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
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

export default LoTags;
