import axios from "axios";
import React, { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import CandidateCardList from "../components/candidate-card/CandidateCardList";
import authHeader from "../services/AuthHeader";
import config from "../config";

class Candidates extends Component {
    constructor() {
        super()
        this.state = {
          candidates: [],
          error: null,
          searchField: '',
          candidatesLoad: false,
          err: '' 
        }
    }

    componentDidMount() {
        this.fetchCandidates();
    }

    fetchCandidates = () => {
      this.setState({ 
        err: '',
        candidatesLoad: true
      });

      setTimeout(() => {
        axios.get(config.API_URL + '/candidates', { headers: authHeader() })
        .then((response) => {
          this.setState({
            candidates: response.data.candidates
          })
        })
        .catch((error) => {
          this.setState({
            err: 'Kandidaatide laadimisel tekkis probleem! Palun värskendage veebilehitseja akent.',
            candidatesLoad: false
          })
        });
      }, 2000);
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
              {this.state.err && 
                <Row className="text-center">
                  <Col className="error_box_list">
                    <span className="error_message">{this.state.err}</span>
                  </Col>
              </Row>
              }
              {this.state.candidatesLoad && 
                <Row className="text-center">
                  <Col>
                    <Spinner animation="border" role="status" size="lg">
                      <span className="visually-hidden">Kandidaatide laadimine</span>
                    </Spinner>
                  </Col>
                </Row>
              }
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