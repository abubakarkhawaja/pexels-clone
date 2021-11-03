import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import avatar from '../assets/Avatar.png';
import './Profile.css';

function Profile() {
  const user = useSelector((state) => state.user);
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
      <p className='profile__text'>Hi {user.name}!</p>
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
        ? user?.photos.map((id) => <p key={id}>{id}</p>)
        : user?.videos.map((id) => <p key={id}>{id}</p>)}
    </div>
  );
}

export default Profile;
