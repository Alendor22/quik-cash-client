import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from 'react';
import Routes from './Routes';
import Nav from './Components/Nav';
import { loadListingsIndex, persistUser } from './redux/actions';
import { connect } from 'react-redux';
import Pages from './Pages';
import { withRouter } from 'react-router-dom';
import './index.css';



class App extends Component {

  componentDidMount () {
    this.props.loadListingsIndex();
    if(!this.props.user.username && localStorage.getItem('token')) {
      this.props.persistUser();
    }
    this.props.history.push("/listings");
  }
  
  render() {
  return (
    <>
      <Container className="p-3">
        <Jumbotron>
          <h1>QuikCash - A Listing and Buying Site</h1>
            <h6>Created by: Adeja</h6>
              <Nav />
              <Pages.Home />
            <Routes />
        </Jumbotron>    
      </Container>
    </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, { loadListingsIndex, persistUser })(App));
