import { useState, useEffect } from 'react';
import { fetchUrl } from '../utility';

export const useMedia = ({ url }) => {
  const [media, setMedia] = useState();

  useEffect(() => {
    (async function getData() {
      const response = await fetchUrl(url);

      if (response !== undefined) {
        setMedia(response);
        return response;
      }
    })();
  }, [url]);

  return { media };
};
