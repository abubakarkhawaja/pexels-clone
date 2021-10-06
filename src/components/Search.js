import React from 'react';
import { useFetch } from '../useFetch';
import { BASE_SEARCH_URL } from '../config';
import './Table.css';

export default function Search({ match }) {
  const { items } = useFetch({
    url: `${BASE_SEARCH_URL}?query=${match.params.query}&page=1&per_page=${process.env.REACT_APP_PER_PAGE}`,
  });

  return (
    <div className='items'>
      <label>SEARCH</label>
      <table className='table__items'>
        {items.map((img) => {
          return (
            <img
              className='image'
              key={img.id}
              src={img.src.portrait}
              alt={img.id}
            />
          );
        })}
      </table>
    </div>
  );
}
