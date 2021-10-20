import React from 'react';
import { saveAs } from 'file-saver';
import { useMedia } from '../hooks/useMedia';
import { HEART_SVG, ADD_SVG } from '../assets/logo';
import './PhotoView.css';

function PhotoView({ match }) {
  const { media } = useMedia({
    url: `${process.env.REACT_APP_BASE_IMAGE_URL}${match.params.id}`,
  });

  return (
    <>
      <div className='header'>
        <div className='photographer'>{media && media.photographer}</div>

        <div className='interactions'>
          <button>
            {HEART_SVG}
            Like
          </button>
          <button>
            {ADD_SVG}
            Add
          </button>

          <button
            onClick={() => {
              saveAs(media.src.original, media.id);
            }}
          >
            Download
          </button>
        </div>
      </div>
      {media && (
        <img
          className='image-view'
          src={media?.src?.landscape}
          alt={media.id}
        />
      )}
    </>
  );
}

export default PhotoView;
