import React, { Component } from 'react'
import { Col, Container, Row, Form, FormControl } from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';
import CandidateCard from './CandidateCard';
import './CandidatesCard.css';

export class CandidateCardList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { candidates } = this.props;
        return (
            <div>
                <div className="page-name">
                  <Container> <p>{Component}</p></Container>
                </div>
    
                <Container>
                        <Form className="d-flex" onChange={this.props.onSearchChange}>
                            <BsIcons.BsSearch />
                            <FormControl
                                type="search"
                                placeholder="Nimi või isikukood"
                                className="mx-2"
                                aria-label="Search"/>
                          </Form>
                    <Row className="candidates-list-header">
    
                        <Col>#</Col>
                        <Col>Name</Col>
                        <Col>Score</Col>
                        <Col>Email</Col>
                        <Col>PersonalID</Col>
                        <Col>Algus</Col>
    
                    </Row>    
                </Container> 
                {
                  candidates.map((candidate, i) => {
                        return (
                            <CandidateCard 
                                key={candidates[i].id}
                                id={candidates[i].id}
                                name={candidates[i].firstName + " " + candidates[i].lastName}
                                score={candidates[i].finalScore}
                                email={candidates[i].email}
                                personalId={candidates[i].personalId}
                                present={candidates[i].present}
                                time={candidates[i].time}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default CandidateCardList;
