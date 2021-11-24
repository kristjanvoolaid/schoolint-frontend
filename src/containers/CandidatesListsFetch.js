import React, { Component } from 'react'
import CandidatesLists from '../components/candidates-lists/CandidatesLists';

class CandidatesListsFetch extends Component {
    constructor() {
        super()
        this.state = {
            candidatesLists: []
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/lists')
        .then(response => response.json())
        .then(lists => this.setState({candidatesLists: lists.candidatesLists}))
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


