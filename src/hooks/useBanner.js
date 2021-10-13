import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBannerAction } from '../redux/action/media';

export const useBanner = ({ url }) => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.mediaReducer.banner);

  useEffect(() => {
    dispatch(getBannerAction(url));
  }, [url]);

  return { banner };
};
