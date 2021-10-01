import React, { useState, useEffect } from 'react';
import Table from './Table';

export default function Search({ match }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  });

  async function getData() {
    const searchResponse = await fetch(
      `https://api.pexels.com/v1/search?query=${match.params.query}&page=1&per_page=${process.env.REACT_APP_PER_PAGE}`,
      {
        headers: new Headers({
          Authorization: process.env.REACT_APP_API_KEY,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
    if (searchResponse !== undefined) setItems(searchResponse.photos);
  }

  return <Table items={items} label='Search Results' />;
}
