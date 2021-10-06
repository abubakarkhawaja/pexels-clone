import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';

export default function Home({ activePhotoBar }) {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  let [page, setPage] = useState(1);
  let [perPage, setPerPage] = useState(
    parseInt(process.env.REACT_APP_PER_PAGE)
  );

  useEffect(() => {
    getData();
  }, [activePhotoBar, page, perPage]);

  async function getData() {
    const url = activePhotoBar
      ? `https://api.pexels.com/v1/curated`
      : 'https://api.pexels.com/videos/popular';

    const curated = await fetch(url + `?page=${page}&per_page=${perPage}`, {
      headers: new Headers({
        Authorization: process.env.REACT_APP_API_KEY,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error component: Home');
        }
      })
      .catch((error) => {
        console.error(error);
      });

    if (curated !== undefined) {
      setHasNextPage(curated.next_page);
      if (activePhotoBar) {
        setVideos([]);
        if (photos.length !== 0) {
          setPhotos([...photos, ...curated.photos]);
          return curated;
        }
        setPhotos(curated.photos);
      } else {
        setPhotos([]);
        if (videos.length !== 0) {
          setVideos([...videos, ...curated.videos]);
          return curated;
        }
        setVideos(curated.videos);
      }
    }
  }

  function loadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <div className='tabs'>
        <Link
          className={`underlined-tabs__tab ${activePhotoBar && 'active'}`}
          to='/'
          onClick={() => {
            setPage(1);
          }}
        >
          Photos
        </Link>
        <Link
          className={`underlined-tabs__tab ${!activePhotoBar && 'active'}`}
          to='/videos/'
          onClick={() => {
            setPage(1);
          }}
        >
          Videos
        </Link>
      </div>
      <Table
        items={activePhotoBar ? photos : videos}
        activePhotoBar={activePhotoBar}
        label='Trending'
      />
      {hasNextPage && (
        <button type='button' onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
}
