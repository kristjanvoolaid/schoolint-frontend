import React, { Component } from 'react';
import axios from "axios";
import CandidatesLists from '../components/candidates-lists/CandidatesLists';
import authHeader from "../services/AuthHeader";
import { Spinner, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from "../config";

class CandidatesListsFetch extends Component {
    constructor() {
        super()
        this.state = {
            candidatesLists: []
        };
    }
    
    componentDidMount() {
        axios.get(config.API_URL + '/lists', { headers: authHeader() })
        .then((response) => {
            this.setState({
                candidatesLists: response.data.candidatesLists
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { candidatesLists } = this.state;

        if (candidatesLists.length < 1) {
            return (
                <div className="text-center" style={{ marginTop: 50 }}>
                    <Row>
                        <Col md={{ offset: 0 }}><Link to="/import">Import</Link></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Kandidaatide listide laadimine</span>
                            </Spinner>
                        </Col>
                    </Row>
                </div>
            )
        }
        return (
            <div>
                <CandidatesLists candidatesLists={candidatesLists} />
            </div>
        )
    }
}

export default CandidatesListsFetch;


