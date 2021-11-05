import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileMediasAction } from '../actions/actions';

export const useProfileMedias = ({ mediaIds, contentType }) => {
  const dispatch = useDispatch();
  const medias = useSelector((state) => state.media.profileMedias[contentType]);

  useEffect(() => {
    if (mediaIds) dispatch(getProfileMediasAction(mediaIds, contentType));
  }, []);

  return medias;
};
