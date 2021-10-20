import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_CONTENT_TYPE } from '../config';
import { useMedias } from '../hooks/useMedias';
import Table from './Table';

export default function Home() {
  const { medias, loadMore, hasNextPage } = useMedias({
    url: process.env.REACT_APP_BASE_URL,
    contentType: IMAGE_CONTENT_TYPE,
  });

  return (
    <>
      <div className='tabs'>
        <Link className='underlined-tabs__tab active' to='/images'>
          Photos
        </Link>
        <Link className='underlined-tabs__tab' to='/videos'>
          Videos
        </Link>
      </div>

      <Table
        medias={medias}
        contentType={IMAGE_CONTENT_TYPE}
        label='Trending'
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
