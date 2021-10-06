import React, { useState, useEffect } from 'react';
import Table from './Table';

export default function Home() {
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
    const curated = await fetch(
      `https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`,
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
      setHasNextPage(curated.next_page);
      if (items.length !== 0) {
        setItems([...items, ...curated.photos]);
        return curated;
      }
      setItems(curated.photos);
    }
  }

  function loadMore() {
    setPage(page + 1);
  }
  return (
    <>
      <Table items={items} label='Trending' />
      {hasNextPage && (
        <button type='button' onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
