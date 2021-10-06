import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config';
import { useFetch } from '../useFetch';
import Table from './Table';

export default function Home({ activePhotoBar }) {
  const { items, loadMore, hasNextPage } = useFetch({
    url: `${BASE_URL}`,
  });

  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getData();
  }, [activePhotoBar, page, perPage]);

  async function getData() {
    const url = activePhotoBar
      ? `https://api.pexels.com/v1/curated`
      : 'https://api.pexels.com/videos/popular';
    
    
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
