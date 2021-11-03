import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { saveAs } from 'file-saver';
import { useMedia } from '../hooks/useMedia';
import { likeVideo, unlikeVideo } from '../actions/actions';
import { HEART_SVG, ADD_SVG } from '../assets/logo';
import './PhotoView.css';

function VideoView({ match }) {
  const { media } = useMedia({
    url: `${process.env.REACT_APP_BASE_VIDEO_URL}${match.params.id}`,
  });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  function likeEvent() {
    if (!user.isAuthenticated) {
      history.replace({
        pathname: '/login',
      });
    }

    if (user.videos?.indexOf(media.id) !== -1) {
      dispatch(unlikeVideo(media.id));
      return;
    }
    dispatch(likeVideo(media.id));
  }
  return (
    <>
      <div className='header'>
        <div className='photographer'>{media?.user?.name}</div>

        <div className='interactions'>
          <button onClick={likeEvent}>
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
