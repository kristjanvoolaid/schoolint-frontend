import axios from "axios";
import React, { Component } from "react";
import CandidateCardList from "../components/candidate-card/CandidateCardList";
import authHeader from "../services/auth.header";

const API_URL = "http://localhost:3001";

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

    fetchCandidates() {
      axios.get(API_URL + '/candidates', { headers: authHeader() })
      .then((response) => {
          this.setState({
            candidates: response.data.candidates
          })
      })
      .catch((error) => {
          console.log(error);
      });
    }

    render() {
        const { candidates, error } = this.state;

        if (error != null) {
          return <h1 className="text-center">{error}</h1>
        }

        if (candidates.length < 1) {
          return <h1 className="text-center">Kandidaatide laadimine.. Palun oodake!</h1>
        }

        return (
          <div className='text-center'>
            <CandidateCardList candidates={this.state.candidates} />
          </div>
        )
    }
}

export default Candidates;