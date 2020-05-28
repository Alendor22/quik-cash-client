import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const LoginPage = props => {
  // initializing dispatch
  const dispatch = useDispatch();
  // Setting up local state using the useState hook
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  // controlled form functions
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(loginForm));
    props.history.push('/listings/new');
  };

  const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  // Destructuring keys from our local state to use in the form
  const { username, password } = loginForm;

  // Component code
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <Form.Group controlId="logInForm">
          <Form.Label>Username</Form.Label>
            <Form.Control 
            type="text" 
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group controlId="logInwField">
          <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div> 

  );

};



export default LoginPage;
