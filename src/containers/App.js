import React, { Component } from "react";
import Menu from '../components/menu/Menu';
import Importpage from "../components/students-import/ImportPage";
import Students from "./Students";
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
          <Route exact path="/import" component={Importpage} />
          <Route exact path="/students" component={Students} />
      </div>
    )
  }
}

export default App;