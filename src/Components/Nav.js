import React from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';



  const Nav = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(userActions.logoutUser());
    };
    
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/listings">Quik-Cash</Navbar.Brand>
        <NavLink to="/listings/new">Post Listing</NavLink> 
          <NavDropdown title="User-Portal" id="collapsible-nav-dropdown" active>
            <LinkContainer to="/login">
              <NavDropdown.Item active>Login</NavDropdown.Item>
            </LinkContainer>
              <NavDropdown.Divider />
            <LinkContainer to="/">
              <NavDropdown.Item active onClick={handleLogout}>Logout</NavDropdown.Item>
            </LinkContainer>
              <NavDropdown.Divider />
            <LinkContainer to="/signup">
              <NavDropdown.Item active>Signup</NavDropdown.Item>
            </LinkContainer>
        </NavDropdown>     
    </Navbar>
  );
}


export default Nav;
