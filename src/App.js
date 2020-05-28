import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from 'react';
import Routes from './Routes';
import Nav from './Components/Nav';
import { loadListingsIndex } from './redux/actions';
import { connect } from 'react-redux';
import Pages from './Pages';
import { withRouter } from 'react-router-dom';

class App extends Component {

  componentDidMount () {
    this.props.loadListingsIndex();
    this.props.history.push("/listings");
  }
  
  render() {
  return (
    <>
      <Container className="p-3">
        <Jumbotron>
          <h1>QuikCash</h1>
            <Nav />
            <Pages.Home />
            <Routes />
        </Jumbotron>    
      </Container>
    </>
    );
  }
}

export default withRouter(connect(null, { loadListingsIndex })(App));
