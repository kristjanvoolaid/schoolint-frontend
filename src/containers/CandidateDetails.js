import React, { Component } from 'react';
import CandidateCardDetails from '../components/candidate-card/CandidateCardDetails';

class CandidateDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'candidate': {},
            'error': null
        }
    }

    componentDidMount() {
        this.fetchCandidate();
        console.log("Mounted")
    }

    async fetchCandidate() {
        const { id } = this.props;
        console.log("Id on" + this.props.id);
        try {
            const response = await fetch(`http://127.0.0.1:3001/candidates/${id}`);
            const candidate = await response.json();
    
            this.setState({
                'candidate': candidate.candidate
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <CandidateCardDetails candidate={this.state.candidate} />
            </div>
        )
    }
}

export default CandidateDetails;