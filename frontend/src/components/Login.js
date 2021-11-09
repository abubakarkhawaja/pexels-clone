import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUserAction } from '../actions/userActions';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    dispatch(loginUserAction(email, password));
    setIsLoading(false);
  };

  return (
    <div className='login-page'>
      <label>Login</label>
      <form className='login-form' onSubmit={submitHandler}>
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
        <button id='login-button' type='submit'>
          {isLoading ? 'loading...' : 'Login'}
        </button>
      </form>
      {user?.error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
