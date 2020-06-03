import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [signupForm, setSignupForm] = useState({
    username: '',
    location: '',
    bio: '',
    password: ''
  });

  // Controlled form functions
  const handleChange = e =>
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUserToDB(signupForm));
    history.push('/listings');
  };

  // Destructuring keys from our local state to use in the form
  const { username, location, bio, password } = signupForm;

  // Component code
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Signup Page</h1>
        <Form.Group controlId="user-signup">
          <Form.Label>Please Select a Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
            />
        </Form.Group>
        <Form.Group controlId="user-location">
          <Form.Label>Please enter your location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
              placeholder="State\Territory"
            />
        </Form.Group>
        <Form.Group controlId="bio">
          <Form.Label>Short-Bio</Form.Label>
            <Form.Control as="textarea" rows="3" 
              name="bio" 
              value={bio}
              onChange={handleChange}
              placeholder="Bio"
            />
        </Form.Group>
        <Form.Group controlId="signUpPwField">
          <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Account
        </Button>
    </Form>
  );
};

export default Signup;