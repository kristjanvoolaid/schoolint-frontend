import React, { Component } from "react";
import Importpage from "../components/candidates-import/ImportPage";
import Candidates from "./Candidates";
import Home from "../components/home-page/Home";
import { Route, Switch } from "react-router-dom";
import CandidateCardDetails from "../components/candidate-card/CandidateCardDetails";
import CandidatesListsFetch from "./CandidatesListsFetch";
import AppSidebar from "../components/sidebar/AppSidebar";

class App extends Component {
  constructor() {
    super()
    this.state = { 
    }
  }

  render() {
    return (
      <div className='App'>
        <AppSidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/import" component={Importpage} />
          <Route exact path="/candidates" component={Candidates} />
          <Route exact path="/candidates/:id" component={CandidateCardDetails} />
          <Route exact path="/lists" component={CandidatesListsFetch} />
        </Switch>
      </div>
    )
  }
}

export default App;