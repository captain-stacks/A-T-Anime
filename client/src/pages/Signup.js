import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className=''>
      <div className="">
        <div className="card bkg-color2">
          <h4 className="card-header">Register</h4>
          <div className="card-body login-signup">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input form-input-cause-i-said-so"
                placeholder="User Name"
                name="username"
                type="username"
                id="register-username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input form-input-cause-i-said-so"
                placeholder="Email"
                name="email"
                type="email"
                id="register-email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input form-input-cause-i-said-so"
                placeholder="Password"
                name="password"
                type="password"
                id="register-password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Create Account
              </button>
            </form>
            <p className='pLogin-Signup'>
              By creating an account you're agreeing to the Terms and Conditions, and you confirm that you are at least 16 years or older
            </p>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
