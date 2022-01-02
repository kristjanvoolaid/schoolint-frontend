import React, { Component } from 'react';
import axios from "axios";
import CandidatesLists from '../components/candidates-lists/CandidatesLists';
import authHeader from "../services/auth.header";

const API_URL = "http://localhost:3001";

class CandidatesListsFetch extends Component {
    constructor() {
        super()
        this.state = {
            candidatesLists: []
        };
    }
    
    componentDidMount() {
        axios.get(API_URL + '/lists', { headers: authHeader() })
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
            return <h1>No list to show!</h1>
        }
        return (
            <div>
                <CandidatesLists candidatesLists={candidatesLists} />
            </div>
        )
    }
}

export default CandidatesListsFetch;


