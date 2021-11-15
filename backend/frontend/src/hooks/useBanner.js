import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBannerAction } from '../actions/mediaActions';

export const useBanner = () => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.media.banner);

  useEffect(() => {
    dispatch(getBannerAction());
  }, []);

  return { banner };
};
