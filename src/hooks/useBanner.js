import { useState, useEffect } from 'react';
import { fetchUrl } from '../utility';

export const useBanner = ({ url }) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    (async function getData() {
      const fetchData = await fetchUrl(url);

      if (fetchData !== undefined) {
        const random_image =
          fetchData.photos[Math.floor(Math.random() * fetchData.photos.length)];
        setImage(random_image.src);
      }
    })();
  }, [url]);

  return { image };
};
