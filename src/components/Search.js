import React from 'react';
import { useFetch } from '../useFetch';
import { BASE_SEARCH_URL } from '../config';
import Table from './Table';

export default function Search({ match }) {
  const { items, loadMore, hasNextPage } = useFetch({
    url: `${BASE_SEARCH_URL}?query=${match.params.query}`,
    params: `query=${match.params.query}&`,
  });

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
