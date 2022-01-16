import axios from "axios";
import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import CandidateCardList from "../components/candidate-card/CandidateCardList";
import authHeader from "../services/AuthHeader";

const API_URL = "http://localhost:3001";

class Candidates extends Component {
    constructor() {
        super()
        this.state = {
          'candidates': [],
          'error': null,
          searchField: '' 
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

    onSearchChange = (e) => {
      this.setState({
        searchField: e.target.value
      });
    };

    render() {
        const { candidates, error } = this.state;
        let emptySearch;
        const fileteredCandidates = candidates.filter(candidates => {
          const firstNameFilter = candidates.firstName.toLowerCase().includes(this.state.searchField.toLowerCase());
          const lastNameFilter = candidates.lastName.toLowerCase().includes(this.state.searchField.toLowerCase());
          // const personalIdFilter = candidates.personalId.includes(this.state.searchField);

          // if (firstNameFilter) {
          //   return firstNameFilter;
          // } else if (lastNameFilter) {
          //   return lastNameFilter;
          // } else {
          //   return personalIdFilter;
          // }

          if (firstNameFilter) {
            return firstNameFilter;
          } else if (lastNameFilter) {
            return lastNameFilter;
          } 
          
        });

        if (error != null) {
          return <h1 className="text-center">{error}</h1>
        }

        if (candidates.length < 1) {
          return (
            <div className="text-center" style={{ marginTop: 50 }}>
              <Spinner animation="border" role="status" size="lg">
                  <span className="visually-hidden">Kandidaatie laadimine</span>
              </Spinner>
            </div>
          )
        }

        if (fileteredCandidates.length < 1) {
          emptySearch = "Selliste parameetritega kandidaati ei leitud!";
        };

        return (
          <div className='text-center'>
            <CandidateCardList candidates={fileteredCandidates} onSearchChange={this.onSearchChange}/>
            {emptySearch}
          </div>
        )
    }
}

export default Candidates;