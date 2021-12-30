import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useProfileMedias } from '../hooks/useProfileMedias';
import { IMAGE_CONTENT_TYPE, VIDEO_CONTENT_TYPE } from '../config';
import avatar from '../assets/Avatar.png';
import Table from './Table';
import './Profile.css';

function Profile() {
  const user = useSelector((state) => state.user);
  const activeUser = user.users.byId[user.authenticatedUser];
  const photos = useProfileMedias({
    token: activeUser?.token,
    contentType: IMAGE_CONTENT_TYPE,
    id: activeUser.id,
  });
  const videos = useProfileMedias({
    token: activeUser?.token,
    contentType: VIDEO_CONTENT_TYPE,
    id: activeUser.id,
  });
  const [showPhotos, setShowPhotos] = useState(true);
  const history = useHistory();

  if (!user.isAuthenticated) {
    history.replace({
      pathname: '/login',
    });
  }

  return (
    <div className='profile'>
      <img className='profile__avatar' src={avatar} />
      <p className='profile__text'>
        Hi {user.isAuthenticated ? activeUser.name : ''}!
      </p>
      <div className='tabs'>
        <a className='underlined-tabs__tab active'>Liked</a>
      </div>
      <div className='tabs'>
        <a
          className={`underlined-tabs__tab ${showPhotos ? 'active' : ''}`}
          onClick={() => setShowPhotos(true)}
        >
          Photos
        </a>
        <a
          className={`underlined-tabs__tab ${!showPhotos ? 'active' : ''}`}
          onClick={() => setShowPhotos(false)}
        >
          Videos
        </a>
      </div>

      {showPhotos
        ? photos && <Table medias={photos} contentType={IMAGE_CONTENT_TYPE} />
        : videos && <Table medias={videos} contentType={VIDEO_CONTENT_TYPE} />}
    </div>
  );
}

export default Profile;