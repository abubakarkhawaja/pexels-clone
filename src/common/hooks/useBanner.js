import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBannerAction } from '../../app/actions';

export const useBanner = () => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.mediaReducer.banner);

  useEffect(() => {
    dispatch(getBannerAction());
  }, []);

  return { banner };
};
