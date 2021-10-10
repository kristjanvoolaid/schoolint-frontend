import React, { Component } from "react";
import CandidateCardList from "../components/candidate-card/CandidateCardList";

class Candidates extends Component {
    constructor() {
        super()
        this.state = {
          'candidates': [] 
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3001/students')
        .then(response => response.json())
        .then(candidates => this.setState({candidates: candidates.students}));
    }

    render() {
        const { candidates } = this.state;

        if (candidates.length < 1) {
          return <h1 className="tc">No candidates to show!</h1>
        }

        return (
          <div className='tc'>
            <CandidateCardList candidates={this.state.candidates} />
          </div>
        )
    }
}

export default Candidates;