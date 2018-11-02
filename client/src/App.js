import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import asyncComponent from "./components/utilities/AsyncComponent";
// import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/utilities/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/utilities/UnauthenticatedRoute";

// const AsyncHome = asyncComponent(() => import("./containers/Home"));
// const AsyncLogin = asyncComponent(() => import("./containers/Login"));
// const AsyncNotes = asyncComponent(() => import("./containers/Notes"));
// const AsyncSignup = asyncComponent(() => import("./containers/Signup"));
// const AsyncNewNote = asyncComponent(() => import("./containers/NewNote"));
// const AsyncNotFound = asyncComponent(() => import("./containers/NotFound"));

export default ({ childProps }) =>
  <Switch>
    {/*<Route*/}
      {/*path="/"*/}
      {/*exact*/}
      {/*component={AsyncHome}*/}
      {/*props={childProps}*/}
    {/*/>*/}
    {/*<UnauthenticatedRoute*/}
      {/*path="/login"*/}
      {/*exact*/}
      {/*component={AsyncLogin}*/}
      {/*props={childProps}*/}
    {/*/>*/}
    {/*<UnauthenticatedRoute*/}
      {/*path="/signup"*/}
      {/*exact*/}
      {/*component={AsyncSignup}*/}
      {/*props={childProps}*/}
    {/*/>*/}
    {/*<AuthenticatedRoute*/}
      {/*path="/notes/new"*/}
      {/*exact*/}
      {/*component={AsyncNewNote}*/}
      {/*props={childProps}*/}
    {/*/>*/}
    {/*<AuthenticatedRoute*/}
      {/*path="/notes/:id"*/}
      {/*exact*/}
      {/*component={AsyncNotes}*/}
      {/*props={childProps}*/}
    {/*/>*/}
    {/* Finally, catch all unmatched routes */}
    {/*<Route component={AsyncNotFound} />*/}
  </Switch>
;

import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
