import { Link } from 'react-router-dom';
import { IMAGE_CONTENT_TYPE } from '../config';
import './Table.css';

export default function Table({ medias, label, contentType }) {
  function showPhotos() {
    return (
      <div className='image-wrapper'>
        {medias &&
          medias.map((img) => {
            return (
              <Link to={`/photo/${img.id}`} key={img.id}>
                <img
                  className='image'
                  key={img.id}
                  src={img.src?.portrait}
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
      <div className='player-wrapper-grid'>
        {medias &&
          medias.map((video) => {
            return (
              <Link to={`/video/${video.id}`} key={video.id}>
                <video
                  className='react-player'
                  key={video.id}
                  src={video.video_files[2].link}
                  poster={video.image}
                  onMouseOver={(event) => event.target.play()}
                  onMouseOut={(event) => event.target.pause()}
                  muted
                  loop
                />
              </Link>
            );
          })}
      </div>
    );
  }
  return (
    <>
      <div className='medias'>
        <label className='lable'>{label}</label>
        {contentType === IMAGE_CONTENT_TYPE ? showPhotos() : showVideos()}
      </div>
    </>
  );
}
