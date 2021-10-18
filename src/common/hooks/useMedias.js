import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotosAction, getVideosAction } from '../../app/actions';
import { IMAGE_CONTENT_TYPE, PER_PAGE } from '../utils/config';

export const useMedias = ({
  url,
  params = undefined,
  contentType = 'photos',
}) => {
  const dispatch = useDispatch();
  const medias = useSelector((state) => state.mediaReducer[contentType]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [createNew, setCreateNew] = useState(true);

  function loadMore() {
    setPage(page + 1);
    setCreateNew(false);
  }

  useEffect(() => {
    const newUrl = url + `${params ?? '?'}page=${page}&per_page=${PER_PAGE}`;
    console.log(createNew);
    contentType === IMAGE_CONTENT_TYPE
      ? dispatch(getPhotosAction(newUrl, createNew))
      : dispatch(getVideosAction(newUrl, createNew));
  }, [page, url, params, contentType]);

  return { medias, loadMore, hasNextPage };
};
