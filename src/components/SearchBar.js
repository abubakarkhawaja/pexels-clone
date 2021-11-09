import React from 'react';
import { useHistory } from 'react-router';
import { SEARCH_SVG } from '../assets/logo';
import './SearchBar.css';

function SearchBar() {
  const input = React.createRef();
  const history = useHistory();

  function SubmitHandler(event) {
    event.preventDefault();
    const query = input.current.value;
    input.current.value = '';
    history.replace({
      pathname: '/search/images',
      search: `?query=${query}`,
    });
  }

  return (
    <form className='form' onSubmit={SubmitHandler}>
      <div className='search-bar__container'>
        <input
          id='search'
          placeholder='Search'
          required='required'
          type='text'
          ref={input}
        />
        <button id='search-action' title='Search' type='submit'>
          <i className='search-icon'> {SEARCH_SVG} </i>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
