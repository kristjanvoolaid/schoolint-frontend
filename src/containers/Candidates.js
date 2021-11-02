import React, { Component } from "react";
import CandidateCardList from "../components/candidate-card/CandidateCardList";

class Candidates extends Component {
    constructor() {
        super()
        this.state = {
          'candidates': [],
          'error': null 
        }
    }

    componentDidMount() {
        this.fetchCandidates();
    }

    async fetchCandidates() {
      try {
        const response = await fetch('http://127.0.0.1:3001/candidates');
        const candidates = await response.json();
  
        this.setState({
          candidates: candidates.candidates
        }) 
      } catch (error) {
        console.log(error)
        this.setState({
          error: 'There was error while loading candidates'
        })
      }
    }

    render() {
        const { candidates, error } = this.state;

        if (error != null) {
          return <h1 className="text-center">{error}</h1>
        }

        if (candidates.length < 1) {
          return <h1 className="text-center">No candidates to show!</h1>
        }

        return (
          <div className='text-center'>
            <CandidateCardList candidates={this.state.candidates} />
          </div>
        )
    }
}

export default Candidates;