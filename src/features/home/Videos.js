import React from 'react';
import { Link } from 'react-router-dom';
import { VIDEO_CONTENT_TYPE } from '../../common/utils/config';
import { useMedias } from '../../common/hooks/useMedias';
import Table from '../../common/reusableComponents/Table';

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
      {hasNextPage && (
        <button className='load-more' type='button' onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
