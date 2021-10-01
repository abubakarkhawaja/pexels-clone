import React from 'react';
import { useHistory } from 'react-router';
import './Form.css';

function Form() {
  const input = React.createRef();
  const history = useHistory();

  function SubmitHandler(event) {
    event.preventDefault();
    const query = input.current.value;
    input.current.value = '';
    history.push({
      pathname: `/search?query=${query}`,
    });
  }

  return (
    <form className='form' onSubmit={SubmitHandler}>
      <div className='search-bar__container'>
        <input
          id='search'
          placeholder='Search for free photos and videos'
          required='required'
          type='text'
          ref={input}
        />
        <button id='search-action' title='Search' type='submit'>
          <i className='search-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
            </svg>
          </i>
        </button>
      </div>
    </form>
  );
}

export default Form;
