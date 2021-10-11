import React, { Component } from "react";
import Menu from '../components/menu/Menu';
import Importpage from "../components/candidates-import/ImportPage";
import Candidates from "./Candidates";
import Home from "../components/home-page/Home";
import { Route, Link } from "react-router-dom";

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
          <Route exact path="/home" component={Home} />
          <Route exact path="/import" component={Importpage} />
          <Route exact path="/candidates" component={Candidates} />
      </div>
    )
  }
}

export default App;