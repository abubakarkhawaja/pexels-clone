import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_CONTENT_TYPE } from '../../common/utils/config';
import { useMedias } from '../../common/hooks/useMedias';
import Table from '../../common/reusableComponents/Table';

export default function Home() {
  console.log(process.env.REACT_APP_BASE_URL);
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
      {hasNextPage && (
        <button className='load-more' type='button' onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
