import React, { useState } from "react";
import Footer from "../layout/Footer";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("logged in");
  };

  return (
    <>
      <div className='form-container'>
        <h1>
          Account <span className='text-success'>Login</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <input
            type='submit'
            value='Login'
            className='btn btn-block btn-success'
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
