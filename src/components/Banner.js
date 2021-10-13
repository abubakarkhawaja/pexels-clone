import React from 'react';
import { BASE_URL } from '../config';
import { useBanner } from '../hooks/useBanner';
import '../style/Banner.css';

export default function Banner() {
  const { banner } = useBanner({
    url: `${BASE_URL}?page=2&per_page=${process.env.REACT_APP_PER_PAGE}`,
  });

  return (
    <div className='banner'>
      <img className='banner__image' src={banner.landscape} alt={banner.id} />
      <section className='banner__content'>
        <h1 className='banner__title'>
          The best free stock photos & videos shared by talented creators.
        </h1>
      </section>
    </div>
  );
}
