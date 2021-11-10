import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileMediasRecordAction } from '../actions/mediaActions';

export const useProfileMedias = ({ token, contentType }) => {
  const dispatch = useDispatch();
  const medias = useSelector((state) => state.media.profileMedias[contentType]);

  useEffect(() => {
    if (medias) dispatch(getProfileMediasRecordAction(token));
  }, []);

  return medias;
};
