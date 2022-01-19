import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function KtdCandidateTags({ 
    tags, 
    comment, 
    handleCommentsChange, 
    onSearchChange, 
    handleTagsCheckbox, 
    handleInterviewCatScores, 
    interviewCat1,
    interviewCat2,
    interviewCat3,
    interviewCat4,
    interviewCat5
}) { 
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={2}>
                        Kat 1.1
                        <br></br>
                        <select value={interviewCat1} onChange={handleInterviewCatScores} name="interviewCat1">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.2
                        <br></br>
                        <select value={interviewCat2} onChange={handleInterviewCatScores} name="interviewCat2">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.3
                        <br></br>
                        <select value={interviewCat3} onChange={handleInterviewCatScores} name="interviewCat3">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.4
                        <br></br>
                        <select value={interviewCat4} onChange={handleInterviewCatScores} name="interviewCat4">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                    <Col sm={2}>
                        Kat 1.5
                        <br></br>
                        <select value={interviewCat5} onChange={handleInterviewCatScores} name="interviewCat5">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                <Col sm={6}>
                    <br></br>
                        Sildid
                        <br></br>
                        <input className="text-box" type="text" placeholder="Search" onChange={onSearchChange}></input>
                        {tags.map(tag => (
                            <div>
                                <input type="checkbox" id={tag.id} />
                                <label for={tag.name}>{tag.name}</label>    
                            </div>
                        ))}
                    </Col>
                    <Col sm={5}> <br></br>Kommentaar<br></br>
                        <textarea className="text-box comments-box" value={comment} onChange={handleCommentsChange} rows="6" cols="20"></textarea>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
