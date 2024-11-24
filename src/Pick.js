import { useLocation } from 'react-router-dom';
import './Pick.css';

export default function Pick() {
  const { state: { name, converted, title_full, status, data } } = useLocation();
  const { education, background } = data;

  return (
    <div className="pick">
      <div className="pick-title-box">
        <img src={`/images/${converted}.png`} alt={name} />

        <div className="pick-title">
          <p className="pick-title__name">{name}</p>
          <p className="pick-title__title">{title_full}</p>
          <p className={`pick-title_${status.toLowerCase()}`}>{status}</p>
        </div>
      </div>

      <div className="pick-data-box">
        {education && <p><strong>Education: </strong>{education}</p>}
        {background && <p><strong>Background: </strong>{background}</p>}
      </div>
    </div>
  )
}