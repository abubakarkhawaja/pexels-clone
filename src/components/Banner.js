import React, { useState, useEffect } from 'react';
import './Banner.css';

export default function Banner() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const fetchData = await fetch(
      `https://api.pexels.com/v1/curated?page=2&per_page=${process.env.REACT_APP_PER_PAGE}`,
      {
        headers: new Headers({
          Authorization: process.env.REACT_APP_API_KEY,
        }),
      }
    ).then((response) => {
      console.log('Response:', response.ok);
      if (response.ok) {
        return response.json();
      }
    });

    if (fetchData !== undefined) {
      const random_image =
        fetchData.photos[Math.floor(Math.random() * fetchData.photos.length)];
      setImage(random_image.src);
    }
  }

  return (
    <div className='banner'>
      <img
        className='banner__image'
        src={`${image.landscape}`}
        alt={`${image.id}`}
      />
      <section className='banner__content'>
        <h1 className='banner__title'>
          The best free stock photos & videos shared by talented creators.
        </h1>
      </section>
    </div>
  );
}
