import React, { Component } from 'react';

class CandidateCardDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            candidate: null,
            íd: null
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.location.id
        });

        this.fetchCandidate();
    }

    async fetchCandidate() {
        const { id } = this.props.location;
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
                <h1>hello</h1>
            </div>
        )
    }
}

export default CandidateCardDetails;
