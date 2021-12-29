import React, { Component } from "react";
import Importpage from "../components/candidates-import/ImportPage";
import Candidates from "./Candidates";
import Home from "../components/home-page/Home";
import { Route, Switch } from "react-router-dom";
import CandidateCardDetails from "../components/candidate-card/CandidateCardDetails";
import CandidatesListsFetch from "./CandidatesListsFetch";
import { Container } from 'react-bootstrap';
import AppSidebar from "../components/sidebar/AppSidebar";
import AppHeader from "../components/header/AppHeader";
import HeaderBar from "../components/header/HeaderBar";




class App extends Component {
  
  
  constructor() {
    super()
    this.state = { 
    }
  }

  render() {
    return (
      <div className='App'>
        

        <AppHeader />
        {/* <AppSidebar /> */}
        <HeaderBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/import" component={Importpage} />
          <Route exact path="/candidates" component={Candidates} title="Nimekirjad" />
          <Route exact path="/candidates/:id" component={CandidateCardDetails} />
          <Route exact path="/lists" component={CandidatesListsFetch} title="Töölaud"/>
        </Switch>
      </div>
    )
  }
}

export default App;