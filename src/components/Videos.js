import React from 'react';
import { Link } from 'react-router-dom';
import { VIDEO_CONTENT_TYPE } from '../config';
import { useMedias } from '../hooks/useMedias';
import Table from './Table';

export default function Videos() {
  const { medias, loadMore, hasNextPage } = useMedias({
    url: process.env.REACT_APP_BASE_VIDEOS_URL,
    contentType: VIDEO_CONTENT_TYPE,
  });

  return (
    <>
      <div className='tabs'>
        <Link className='underlined-tabs__tab' to='/'>
          Photos
        </Link>
        <Link className='underlined-tabs__tab active' to='/videos'>
          Videos
        </Link>
      </div>

      <Table medias={medias} contentType={VIDEO_CONTENT_TYPE} label='Popular' />

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
