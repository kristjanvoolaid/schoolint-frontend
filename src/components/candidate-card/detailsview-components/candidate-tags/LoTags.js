import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Select from 'react-select'

function LoTags({ tags, comments, handleCommentsChange, onSearchChange, handleSelectChange, handleTagsCheckbox, handleInterviewCatScores }) {
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
                    <Col sm={2}>
                        Kat 1.4
                        <br></br>
                        <select onChange={handleInterviewCatScores} name="interviewCat4">
                            <option value="">VALI</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                <Select
                            name="form-field-name"
                            isMulti
                            className="basic-multi-select"
                            classNamePrefix="select"
                            options={
                                tags.map((tag, i) => ({
                                    id: tags[i].id,
                                    label: tags[i].name,
                                }))
                            }
                            onChange={handleSelectChange}
                        />
                </Row>
            </Container>
        </div>
    )
}

export default LoTags;
