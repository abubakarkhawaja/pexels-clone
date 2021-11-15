import { saveAs } from 'file-saver';
import { HEART_SVG } from '../assets/logo';

export function interactions(likeEvent, media, link) {
  return (
    <div className='interactions'>
      <button onClick={likeEvent}>
        {HEART_SVG}
        Like
      </button>

      <button
        onClick={() => {
          saveAs(link, media.id);
        }}
      >
        Download
      </button>
    </div>
  );
}
