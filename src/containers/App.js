import React, { Component } from "react";
import Importpage from "../components/candidates-import/ImportPage";
import Candidates from "./Candidates";
import Home from "../components/home-page/Home";
import { Route, Routes } from "react-router-dom";
import CandidateCardDetails from "../components/candidate-card/CandidateCardDetails";
import CandidatesListsFetch from "./CandidatesListsFetch";
import AppSidebar from "../components/sidebar/AppSidebar";
import AppUsers from "./AppUsers";
import Login from "../components/login/Login";
import RequireAuth from "../services/RequireAuth";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AppSidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/import" element={
            <RequireAuth redirectTo="/login">
              <Importpage />
            </RequireAuth>
          } />
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
              <CandidatesListsFetch />
            </RequireAuth>
          } />
          <Route exact path="/settings" element={
            <RequireAuth redirectTo="/login">
              <AppUsers />
            </RequireAuth>
          } />
        </Routes>
      </div>
    )
  }
}

export default App;