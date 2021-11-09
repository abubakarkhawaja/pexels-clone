import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useMedia } from '../hooks/useMedia';
import { likeVideo, unlikeVideo } from '../actions/userActions';
import { interactions } from '../services/utils';
import './PhotoView.css';

function VideoView({ match }) {
  const { media } = useMedia({
    url: `${process.env.REACT_APP_BASE_VIDEO_URL}${match.params.id}`,
  });
  const user = useSelector((state) => state.user);
  const activeUser = user.users.byId[user.authenticatedUser];
  const dispatch = useDispatch();
  const history = useHistory();

  function likeEvent() {
    if (!user.isAuthenticated) {
      history.replace({
        pathname: '/login',
      });
    }
    if (activeUser.videos?.indexOf(media.id) !== -1) {
      dispatch(unlikeVideo(activeUser, media.id));
      return;
    }
    dispatch(likeVideo(activeUser, media.id));
  }

  return (
    <>
      <div className='header'>
        <div className='photographer'>{media?.user?.name}</div>

        {interactions(likeEvent, media, media?.video_files)}
      </div>

      <div className='player-wrapper'>
        {media.video_files && (
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
