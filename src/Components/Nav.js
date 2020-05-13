import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/listings/new">Add Listing</NavLink>
      <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
    </nav>
  );
};

export default Nav;
