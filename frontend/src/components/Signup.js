import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signupUserAction } from '../actions/userActions';
import './Login.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('Authentication Error');
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (user.isAuthenticated) {
      setError('');
      history.replace({
        pathname: '/',
      });
    }
  }, [user]);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(signupUserAction({ name, username, email, password, password2 }));
    setIsLoading(false);
  };

  return (
    <div className='login-page'>
      <label>Signup</label>
      <form className='login-form' onSubmit={submitHandler}>
        <input
          id='name'
          className='input'
          placeholder='Name'
          required='required'
          type='name'
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          id='username'
          className='input'
          placeholder='Username'
          required='required'
          type='text'
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          id='email'
          className='input'
          placeholder='Email Address'
          required='required'
          type='email'
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          id='password'
          className='input'
          placeholder='Enter Password'
          required='required'
          type='password'
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          id='password2'
          className='input'
          placeholder='Confirm Password'
          required='required'
          type='password'
          value={password2}
          onChange={(event) => {
            setPassword2(event.target.value);
          }}
        />
        <button id='login-button' type='submit'>
          {isLoading ? 'loading...' : 'Login'}
        </button>
      </form>
      {user?.error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
