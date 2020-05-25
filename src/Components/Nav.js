import React from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';
import { NavLink } from 'react-router-dom';

  
  const Nav = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(userActions.logoutUser());
    };
    
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
