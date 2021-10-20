import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMediaAction } from '../actions/actions';

export const useMedia = ({ url }) => {
  const dispatch = useDispatch();
  const media = useSelector((state) => state.mediaReducer.media);

  useEffect(() => {
    dispatch(getMediaAction(url));
  }, [url]);

  return { media };
};
