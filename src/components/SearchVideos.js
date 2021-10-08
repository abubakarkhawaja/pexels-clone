import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_VIDEO_SEARCH_URL, VIDEO_CONTENT_TYPE } from '../config';
import { useMedias } from '../hooks/useMedias';
import Table from './Table';

export default function SearchVideos({ location }) {
  const { medias, loadMore, hasNextPage } = useMedias({
    url: BASE_VIDEO_SEARCH_URL,
    params: `${location.search}&`,
    contentType: VIDEO_CONTENT_TYPE,
  });

  return (
    <>
      <div className='tabs'>
        <Link className='underlined-tabs__tab' to={`/search${location.search}`}>
          Photos
        </Link>
        <Link className='underlined-tabs__tab active'>Videos</Link>
      </div>

      <Table
        medias={medias}
        label='Search Results'
        contentType={VIDEO_CONTENT_TYPE}
      />
      {hasNextPage && (
        <button type='button' onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
