import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, IMAGE_CONTENT_TYPE } from '../config';
import { useMedias } from '../hooks/useMedias';
import Table from './Table';

export default function Home() {
  const { medias, loadMore, hasNextPage } = useMedias({
    url: BASE_URL,
    contentType: IMAGE_CONTENT_TYPE,
  });

  return (
    <>
      <div className='tabs'>
        <Link className='underlined-tabs__tab active' to='/'>
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
      {hasNextPage && (
        <button className='load-more' type='button' onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
