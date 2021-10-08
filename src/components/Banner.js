import React from 'react';
import { BASE_URL } from '../config';
import { useBanner } from '../hooks/useBanner';
import '../style/Banner.css';

export default function Banner() {
  const { image } = useBanner({
    url: `${BASE_URL}?page=2&per_page=${process.env.REACT_APP_PER_PAGE}`,
  });

  return (
    <div className='banner'>
      <img className='banner__image' src={image.landscape} alt={image.id} />
      <section className='banner__content'>
        <h1 className='banner__title'>
          The best free stock photos & videos shared by talented creators.
        </h1>
      </section>
    </div>
  );
}
