import React, { Component } from "react";
import Importpage from "../components/candidates-import/ImportPage";
import Candidates from "./Candidates";
import { Route, Routes } from "react-router-dom";
import CandidateCardDetails from "../components/candidate-card/CandidateCardDetails";
import CandidatesListsFetch from "./CandidatesListsFetch";
import AppSettings from "./AppSettings";
import Login from "../components/login/Login";
import RequireAuth from "../services/RequireAuth";
import AppHeader from "../components/header/AppHeader";
import RequireAdmin from "../services/RequireAdmin";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<Candidates />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/candidates" element={
            <RequireAuth redirectTo="/login">
              <Candidates />
            </RequireAuth>
          } />
          <Route exact path="/candidates/:id" element={
            <RequireAuth redirectTo="/login">
              <CandidateCardDetails />
            </RequireAuth>
          } />
          <Route exact path="/lists" element={
            <RequireAuth redirectTo="/login">
              <RequireAdmin redirectTo="/candidates">
                <CandidatesListsFetch />
              </RequireAdmin>
            </RequireAuth>
          } />
          <Route exact path="/settings" element={
            <RequireAuth redirectTo="/login">
              <AppSettings />
            </RequireAuth>
          } />
        </Routes>
      </div>
    )
  }
}

export default App;