import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const SigningUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = creds;
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(creds),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={SigningUp}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Enter Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            required
            onChange={onChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            required
            onChange={onChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            minLength={5}
            required
            onChange={onChange}
            name='password'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='cpassword' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            className='form-control'
            id='cpassword'
            minLength={5}
            required
            onChange={onChange}
            name='cpassword'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
