import React from 'react';
import { saveAs } from 'file-saver';
import { useMedia } from '../hooks/useMedia';
import { BASE_VIDEO_URL } from '../config';
import '../style/PhotoView.css';

function VideoView({ match }) {
  const { media } = useMedia({
    url: `${BASE_VIDEO_URL}${match.params.id}`,
  });

  return (
    <>
      <div className='header'>
        <div className='photographer'>{media && media.user.name}</div>

        <div className='interactions'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'></path>
            </svg>
            Like
          </button>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'></path>
            </svg>
            Add
          </button>

          <button
            onClick={() => {
              saveAs(media.video_files[1].link, media.id);
            }}
          >
            Download
          </button>
        </div>
      </div>
      <div className='player-wrapper'>
        {media && (
          <video
            className='react-player'
            key={media.id}
            src={media.video_files[2].link}
            poster={media.image}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            muted
            loop
          />
        )}
      </div>
    </>
  );
}

export default VideoView;
