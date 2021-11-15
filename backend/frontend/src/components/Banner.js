import React from 'react';
import { useBanner } from '../hooks/useBanner';
import './Banner.css';

export default function Banner() {
  const { banner } = useBanner();

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
