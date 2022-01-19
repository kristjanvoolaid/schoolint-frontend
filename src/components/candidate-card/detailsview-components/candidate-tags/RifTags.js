import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function RifTags({ tags, handleCommentsChange, onSearchChange, handleTagsCheckbox, handleInterviewCatScores, comment, interviewCat1, interviewCat2, interviewCat3  }) {
    return (
        <div>
            <Container>
                <Row>
                <Col sm={3}></Col>
                    <Col sm={2}>
                        Isiksus
                        <br></br>
                        <select className="text-box" value={interviewCat1} onChange={handleInterviewCatScores} name="interviewCat1">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <br></br>
                    </Col>
                    <Col sm={2}>
                        Teadmised
                        <br></br>
                        <select className="text-box" value={interviewCat2}  onChange={handleInterviewCatScores} name="interviewCat2">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Motivatsioon
                        <br></br>
                        <select className="text-box" value={interviewCat3} onChange={handleInterviewCatScores} name="interviewCat3">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
                <Row>
                <Col md={2}></Col>
                <Col md={4}><br></br>Kommentaar<br></br><textarea class="comments-box text-box" value={comment} onChange={handleCommentsChange} rows="6" cols="20"></textarea></Col>
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

export default RifTags;
