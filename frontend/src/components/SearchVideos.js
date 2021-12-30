import React from 'react';
import { Link } from 'react-router-dom';
import { VIDEO_CONTENT_TYPE } from '../config';
import { useMedias } from '../hooks/useMedias';
import Table from './Table';

export default function SearchVideos({ location }) {
  const { medias, loadMore, hasNextPage } = useMedias({
    url: process.env.REACT_APP_BASE_VIDEO_SEARCH_URL,
    params: `${location.search}&`,
    contentType: VIDEO_CONTENT_TYPE,
  });

  return (
    <>
      <div className='tabs'>
        <Link
          className='underlined-tabs__tab'
          to={`/search/images${location.search}`}
        >
          Photos
        </Link>
        <Link className='underlined-tabs__tab active'>Videos</Link>
      </div>

      <Table
        medias={medias}
        label='Search Results'
        contentType={VIDEO_CONTENT_TYPE}
      />
      {medias.length !== 0 ? (
        <button type='button' onClick={loadMore}>
          Load More
        </button>
      ) : (
        <div> No record found! </div>
      )}
    </>
  );
}
