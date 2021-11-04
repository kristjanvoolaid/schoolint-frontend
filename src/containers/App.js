import React, { Component } from "react";
import Menu from '../components/menu/Menu';
import Importpage from "../components/candidates-import/ImportPage";
import Candidates from "./Candidates";
import Home from "../components/home-page/Home";
import { Route, Link } from "react-router-dom";
import CandidateCardDetails from "../components/candidate-card/CandidateCardDetails";
import CandidatesLists from "../components/candidates-lists/CandidatesLists";
import AppSidebar from "../components/sidebar/AppSidebar";
import { Container } from "react-bootstrap";

class App extends Component {
  constructor() {
    super()
    this.state = { 
    }
  }

  render() {
    return (
      <div className='App'>
        <Menu />
          <Route exact path="/" component={Home} />
          <Route exact path="/import" component={Importpage} />
          <Route exact path="/candidates" component={Candidates} />
          <Route exact path="/candidates/:id" component={CandidateCardDetails} />
          <Route exact path="/lists" component={CandidatesLists} />


          <Container>
            <AppSidebar />
          </Container>
      </div>
    )
  }
}

export default App;