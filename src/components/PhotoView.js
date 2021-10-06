import React from 'react';
import { saveAs } from 'file-saver';
import { useFetchPhoto } from '../useFetch';
import { BASE_IMAGE_URL } from '../config';
import './PhotoView.css';

function PhotoView({ match }) {
  const { photo } = useFetchPhoto({
    url: `${BASE_IMAGE_URL}${match.params.id}`,
  });

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
