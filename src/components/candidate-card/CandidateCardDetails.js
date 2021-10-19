import React, { Component } from 'react';

class CandidateCardDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            personalId: null,
            phoneNumber: null,
            residence: '',
            scores: {
                kat1: null,
                kat2: null,
                kat3: null,
                kat4: null,
            },
            studies: {
                0: '',
                0: '',
                0: ''
            }
        }
    }

    componentDidMount() {
        this.fetchCandidate();
    }

    async fetchCandidate() {
        const { id } = this.props.location;
        const endpoint = window.location.pathname;
        try {
            const response = await fetch(`http://127.0.0.1:3001${endpoint}`);
            const candidate = await response.json();

            const { 
                id, 
                firstName, 
                lastName,
                email,
                personalId,
                phoneNumber,
                residence,
                scores,
                studies
            } = candidate.candidate;
            
            this.setState({
                id: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                personalId: personalId,
                phoneNumber: phoneNumber,
                residence: residence,
                scores: scores,
                studies: studies
            });

        } catch (error) {
            console.log(error);
        }
    }

    render() {

        if (this.state.id == null) {
            return (
                <h1 className="tc">Loading..</h1>
            )
        }

        if (this.state.studies.length > 1) {
            this.setState({
                studies: 'No studies'
            });
        }

        return (
            <div className="tc">
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>{this.state.email}</h2>
                <h2>{this.state.personalId}</h2>
                <h2>{this.state.residence}</h2>
                <h2>Scores</h2>
                <h4>Kat1: {this.state.scores.kat1} &nbsp;    
                    Kat2: {this.state.scores.kat2} &nbsp;   
                    Kat3: {this.state.scores.kat3} &nbsp;    
                    Kat4: {this.state.scores.kat4}</h4>
                <h2>Studies</h2>
                {/* <h4>{this.state.studies}</h4> */}
            </div>
        )
    }
}

export default CandidateCardDetails;
