import React, { useState, useEffect } from 'react';
import './Table.css';

export default function Table() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  });

  async function getData() {
    const curated = await fetch(
      `https://api.pexels.com/v1/curated?page=1&per_page=${process.env.REACT_APP_PER_PAGE}`,
      {
        headers: new Headers({
          Authorization: process.env.REACT_APP_API_KEY,
        }),
      }
    ).then((response) => {
      console.log('Response:', response.ok);
      if (response.ok) {
        return response.json();
      }
    });

    if (curated !== undefined) {
      setItems(curated.photos);
    }
  }

  return (
    <div className='items'>
      <label>Trending</label>
      <table className='table__items'>
        {items.map((img) => {
          return (
            <img
              className='image'
              key={`${img.id}`}
              src={`${img.src.portrait}`}
              alt={`${img.id}`}
            />
          );
        })}
      </table>
    </div>
  );
}
