import React, { useState, useEffect } from 'react';
import Table from './Table';

export default function Search({ match }) {
  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  let [page, setPage] = useState(1);
  let [perPage, setPerPage] = useState(
    parseInt(process.env.REACT_APP_PER_PAGE)
  );

  useEffect(() => {
    getData();
  }, [page, perPage]);

  async function getData() {
    const searchResponse = await fetch(
      `https://api.pexels.com/v1/search?query=${match.params.query}&page=${page}&per_page=${perPage}`,
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
    if (searchResponse !== undefined) {
      setHasNextPage(searchResponse.next_page);
      if (items.length !== 0) {
        setItems([...items, ...searchResponse.photos]);
        return searchResponse;
      }
      setItems(searchResponse.photos);
    }
  }

  function loadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <Table items={items} label='Search Results' />
      {hasNextPage && (
        <button type='button' onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
