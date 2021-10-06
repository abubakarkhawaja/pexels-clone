import { Link } from 'react-router-dom';
import './Table.css';

export default function Table({ items, label }) {
  return (
    <div className='items'>
      <label>{label}</label>
      <div className='items_grid'>
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
    </div>
  );
}
