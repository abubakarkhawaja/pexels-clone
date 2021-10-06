import React from 'react';
import { BASE_URL } from '../config';
import { useFetch } from '../useFetch';
import Table from './Table';

export default function Home() {
  const { items, loadMore, hasNextPage } = useFetch({
    url: `${BASE_URL}`,
  });

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
