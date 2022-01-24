import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const SigningUp = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = creds;
    if (password === cpassword) {
      try {
        const response = await fetch(
          'http://localhost:5000/api/auth/createuser',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          }
        );
        const json = await response.json();
        console.log(json);
        if (json.success) {
          // save the auth token and redirect
          localStorage.setItem('token', json.authToken);
          navigate('/');
          props.showAlert('Account Created Successfully ', 'success');
        } else {
          props.showAlert('Invalid Details', 'danger');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Please Enter Correct Password ');
    }
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  return (
    <div className='container mt-2'>
      <h2 className='my-2'>Create an account to use iNoteBook</h2>
      <form onSubmit={SigningUp}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Enter Name
          </label>
          <input
            type='text'
            className='form-control'
            value={creds.name}
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
            value={creds.email}
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
            value={creds.password}
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
            value={creds.cpassword}
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
