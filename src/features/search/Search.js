import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_CONTENT_TYPE } from '../../common/utils/config';
import { useMedias } from '../../common/hooks/useMedias';
import Table from '../../common/reusableComponents/Table';

export default function Search({ location }) {
  const { medias, loadMore, hasNextPage } = useMedias({
    url: process.env.REACT_APP_BASE_SEARCH_URL,
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
