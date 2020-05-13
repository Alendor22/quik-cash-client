import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import Nav from './Components/Nav'
import CreateListing from './Components/CreateListing'

function App() {
  return (
    <>
    <h1>QuikCash</h1>
      <Router >
        <Nav />
        
        <Routes />
      </ Router >
    </>
  );
}

export default App;
