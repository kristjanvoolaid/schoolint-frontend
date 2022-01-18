import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select';

function RifTags({ tags, comments, handleCommentsChange, onSearchChange, handleTagsCheckbox, handleInterviewCatScores  }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={4}>Kommentaar<br></br><textarea value={comments} onChange={handleCommentsChange} rows="6" cols="20"></textarea></Col>
                    <Col sm={2}>
                        Kat 1.1
                        <br></br>
                        <select onChange={handleInterviewCatScores} name="interviewCat1">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <br></br>
                        <label>Sildid</label>
                        <input type="text" placeholder="Search" onChange={onSearchChange}></input>
                        <Select
                            name="form-field-name"
                            isMulti
                            className="basic-multi-select"
                            classNamePrefix="select"
                            options={
                                tags.map((tag, i) => ({
                                    value: tags[i].name,
                                    label: tags[i].name,
                                }))
                            }
                        />

                        {tags.map((tag, i) => (
                            <div>
                                <input key={tags[i].id} type="checkbox" id={tags[i].id} name={tags[i].name} onChange={handleTagsCheckbox}/>
                                <label htmlFor={tags[i].name}>{tags[i].name}</label>
                            </div>
                        ))}
                    </Col>
                    <Col sm={2}>
                        Kat 1.2
                        <br></br>
                        <select onChange={handleInterviewCatScores} name="interviewCat2">
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
                        <select onChange={handleInterviewCatScores} name="interviewCat3">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RifTags;
