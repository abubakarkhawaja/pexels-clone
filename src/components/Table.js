import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Table.css';

export default function Table({ items, label, activePhotoBar }) {
  function showPhotos() {
    return (
      <div className='image-wrapper'>
        {items &&
          items.map((img) => {
            return (
              <Link to={`/photo/${img.id}`} key={img.id}>
                <img
                  className='image'
                  key={img.id}
                  src={img.src.portrait}
                  alt={img.id}
                />
              </Link>
            );
          })}
      </div>
    );
  }

  function showVideos() {
    return (
      <div className='player-wrapper'>
        {items &&
          items.map((video) => {
            return (
              <Link to={`/video/${video.id}`} key={video.id}>
                <ReactPlayer
                  className='react-player'
                  key={video.id}
                  url={video.video_files[1].link}
                  playing
                  muted
                />
              </Link>
            );
          })}
      </div>
    );
  }
  return (
    <>
      <div className='items'>
        <label>{label}</label>
        {activePhotoBar ? showPhotos() : showVideos()}
      </div>
    </>
  );
}
