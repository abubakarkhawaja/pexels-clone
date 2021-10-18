import React from 'react';
import { saveAs } from 'file-saver';
import { useMedia } from '../../common/hooks/useMedia';
import { HEART_SVG, ADD_SVG } from '../../static/svg/logo';
import '../../static/css/PhotoView.css';

function VideoView({ match }) {
  const { media } = useMedia({
    url: `${process.env.REACT_APP_BASE_VIDEO_URL}${match.params.id}`,
  });

  return (
    <>
      <div className='header'>
        <div className='photographer'>{media?.user?.name}</div>

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
            src={media ?? media.video_files[2].link}
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
