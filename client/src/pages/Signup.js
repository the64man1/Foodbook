import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    // const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      // const mutationResponse = await addUser({
      //   variables: {
      //     email: formState.email,
      //     password: formState.password,
      //     firstName: formState.firstName,
      //     lastName: formState.lastName,
      //   },
      // });
      // const token = mutationResponse.data.addUser.token;
      // Auth.login(token);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    return (
      <div className="container my-1">
        <Link to="/">← Go to Login</Link>

        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group flex-row space-between my-2">
            <label htmlFor="userName">User Name:</label>
            <input
              className="form-control"
              placeholder="User"
              name="userName"
              type="userName"
              id="userName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control"
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>

          <div className="form-group flex-row space-between my-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="form-control"
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group flex-row space-between my-2">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-control"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    );


};

export default Signup;