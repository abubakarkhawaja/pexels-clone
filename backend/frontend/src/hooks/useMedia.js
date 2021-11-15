import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMediaAction } from '../actions/mediaActions';

export const useMedia = ({ url }) => {
  const dispatch = useDispatch();
  const media = useSelector((state) => state.media.media);

  useEffect(() => {
    dispatch(getMediaAction(url));
  }, [url]);

  return { media };
};
