import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMediaAction } from '../redux/action/media';

export const useMedia = ({ url }) => {
  const dispatch = useDispatch();
  const media = useSelector((state) => state.mediaReducer.media);

  useEffect(() => {
    dispatch(getMediaAction(url));
  }, [url]);

  return { media };
};
