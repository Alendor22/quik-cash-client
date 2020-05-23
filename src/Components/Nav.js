import React from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';
import { NavLink } from 'react-router-dom';

  
  const Nav = () => {
    //const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(userActions.logoutUser());
    };


  // const isLoggedIn = localStorage.token !== "" && localStorage.token !== undefined && localStorage.token !== "undefined" && localStorage.token !== "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.JEdfpl510uWu_3NaqmgTGJdn1j8uZS7V2Omws-GdxRk";

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <NavLink to="/listings">Home</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/listings/new">Post Listing</NavLink>
        <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
    </nav>
  );
}


export default Nav;
