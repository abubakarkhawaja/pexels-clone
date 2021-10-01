import React, { useState, useEffect } from 'react';
import Table from './Table';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const curated = await fetch(
      `https://api.pexels.com/v1/curated?page=1&per_page=${process.env.REACT_APP_PER_PAGE}`,
      {
        headers: new Headers({
          Authorization: process.env.REACT_APP_API_KEY,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error component: Home');
        }
      })
      .catch((error) => {
        console.error(error);
      });

    if (curated !== undefined) {
      setItems(curated.photos);
    }
  }
  return <Table items={items} label='Trending' />;
}
