import React, { useState, useEffect } from 'react';
import { useFetch } from '../useFetch';
import { BASE_SEARCH_URL } from '../config';
import Table from './Table';

export default function Search({ match }) {
 const { items } = useFetch({
    url: `${BASE_SEARCH_URL}?query=${match.params.query}&page=1&per_page=${process.env.REACT_APP_PER_PAGE}`,
  });
  const [hasNextPage, setHasNextPage] = useState(false);
  let [page, setPage] = useState(1);
  let [perPage, setPerPage] = useState(
    parseInt(process.env.REACT_APP_PER_PAGE)
  );
  
//   if (searchResponse !== undefined) {
//       setHasNextPage(searchResponse.next_page);
//       if (items.length !== 0) {
//         setItems([...items, ...searchResponse.photos]);
//         return searchResponse;
//       }
//       setItems(searchResponse.photos);
//    }

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
