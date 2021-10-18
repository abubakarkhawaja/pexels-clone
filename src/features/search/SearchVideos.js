import React from 'react';
import { Link } from 'react-router-dom';
import { VIDEO_CONTENT_TYPE } from '../../common/utils/config';
import { useMedias } from '../../common/hooks/useMedias';
import Table from '../../common/reusableComponents/Table';

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
      {hasNextPage && (
        <button type='button' onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
