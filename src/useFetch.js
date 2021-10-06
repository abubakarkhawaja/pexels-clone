import { useState, useEffect } from 'react';
import { fetchUrl } from './utility';

export const useFetch = ({ url, params = '' }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  function loadMore() {
    setPage(page + 1);
  }

  useEffect(() => {
    getData();
  }, [page]);

  async function getData() {
    const curated = await fetchUrl(
      url + `?${params}page=${page}&per_page=${process.env.REACT_APP_PER_PAGE}`
    );

    if (curated !== undefined) {
      setHasNextPage(curated.next_page);
      if (items.length !== 0) {
        setItems([...items, ...curated.photos]);
        return curated;
      }
      setItems(curated.photos);
    }
  }

  return { items, loadMore, hasNextPage };
};

export const useFetchBanner = ({ url }) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const fetchData = await fetchUrl(url);

    if (fetchData !== undefined) {
      const random_image =
        fetchData.photos[Math.floor(Math.random() * fetchData.photos.length)];
      setImage(random_image.src);
    }
  }
  return { image };
};

export const useFetchPhoto = ({ url }) => {
  const [photo, setPhoto] = useState({ src: '' });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetchUrl(url);

    if (response !== undefined) {
      setPhoto(response);
      return response;
    }
  }
  return { photo };
};
