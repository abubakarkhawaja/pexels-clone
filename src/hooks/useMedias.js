import { useState, useEffect } from 'react';
import { fetchUrl } from '../utility';

export const useMedias = ({
  url,
  params = undefined,
  contentType = 'photos',
}) => {
  const [medias, setMedias] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  function loadMore() {
    setPage(page + 1);
  }

  useEffect(() => {
    (async function getData() {
      const response = await fetchUrl(
        url +
          `${params ?? '?'}page=${page}&per_page=${
            process.env.REACT_APP_PER_PAGE
          }`
      );

      if (response !== undefined) {
        setHasNextPage(response.next_page);

        if (medias.length !== 0) {
          setMedias([...medias, ...response[contentType]]);
          return response;
        }
        setMedias(response[contentType]);
      }
    })();
  }, [page, contentType, url, params]);

  return { medias, loadMore, hasNextPage };
};
