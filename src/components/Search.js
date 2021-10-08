import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_SEARCH_URL, IMAGE_CONTENT_TYPE } from '../config';
import { useMedias } from '../hooks/useMedias';
import Table from './Table';

export default function Search({ location }) {
  const { medias, loadMore, hasNextPage } = useMedias({
    url: BASE_SEARCH_URL,
    params: `${location.search}&`,
    contentType: IMAGE_CONTENT_TYPE,
  });

  return (
    <>
      <div className='tabs'>
        <Link className='underlined-tabs__tab active'>Photos</Link>
        <Link
          className='underlined-tabs__tab'
          to={`/search/videos${location.search}`}
        >
          Videos
        </Link>
      </div>

      <Table
        medias={medias}
        label='Search Results'
        contentType={IMAGE_CONTENT_TYPE}
      />
      {hasNextPage && (
        <button type='button' onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
