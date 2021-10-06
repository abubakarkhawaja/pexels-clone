import React from 'react';
import './Table.css';
import { BASE_IMAGE_URL } from '../config';
import { useFetch } from '../useFetch';

export default function Table() {
  const { items } = useFetch({
    url: `${BASE_IMAGE_URL}?page=1&per_page=${process.env.REACT_APP_PER_PAGE}`,
  });

  return (
    <div className='items'>
      <label>Trending</label>
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
