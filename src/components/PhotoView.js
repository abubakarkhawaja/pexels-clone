import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';

import './PhotoView.css';

function PhotoView({ match }) {
  const [photo, setPhoto] = useState({ src: '' });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(
      `https://api.pexels.com/v1/photos/${match.params.id}`,
      {
        headers: new Headers({
          Authorization: process.env.REACT_APP_API_KEY,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error component: Photo View');
        }
      })
      .catch((error) => {
        console.error(error);
      });
    console.log('i ran');
    if (response !== undefined) {
      setPhoto(response);
      return response;
    }
  }

  return (
    <>
      <div className='header'>
        <div className='photographer'>{photo.photographer}</div>

        <div className='interactions'>
          <button>Like</button>
          <button>Add</button>

          <button
            onClick={() => {
              saveAs(photo.src.original, photo.id);
            }}
          >
            Download
          </button>
        </div>
      </div>
      <img
        className='image-view'
        src={photo.src.landscape}
        alt={photo.id}
      ></img>
    </>
  );
}

export default PhotoView;
