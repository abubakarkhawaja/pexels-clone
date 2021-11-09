import { useState, useEffect } from 'react';
import { fetchUrl } from './utility';

export const useFetch = ({ url }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const curated = await fetchUrl(url);

    if (curated !== undefined) {
      setItems(curated.photos);
    }
  }
  return { items };
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
