import React from "react";
import Menu from "./Menu";
import Importpage from "./ImportPage";
import Students from "./Students";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Route exact path="/import" component={Importpage} />
      <Route exact path="/students" component={Students} />
    </div>
  )
}

export default App;