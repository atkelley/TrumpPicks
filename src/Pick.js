import { useLocation } from 'react-router-dom';
import { data } from './data.js';
import './Pick.css';

export default function Pick() {
  const { state: { name, image, title, status } } = useLocation();
  const { education, background, professional, controversies, positions, fun_facts, assessment } = data[image];

  return (
    <div className="pick">
      <div className="pick-title-box">
        <img src={`/images/${image}.png`} alt={name} />

        <div className="pick-title">
          <p className="pick-title__name">{name}</p>
          <p className="pick-title__title">{title}</p>
          <p className={`pick-title_${status.toLowerCase()}`}>{status}</p>
        </div>
      </div>

      <div className="pick-data-box">
        {education && <p><strong>Education: </strong>{education}</p>}
        {background && <p><strong>Background: </strong>{background}</p>}
        {professional && <p><strong>Professional: </strong>{professional}</p>}
        {!!controversies.length && 
          <div>
            <strong>Controversies: </strong>
            <ul>
              {controversies.map((controversy, index) => <li key={index}>{controversy}</li>)}
            </ul>
          </div>
        }

        {!!positions.length && 
          <div>
            <strong>Positions: </strong>
            <ul>
              {positions.map((position, index) => <li key={index}>{position}</li>)}
            </ul>
          </div>
        }

        {!!fun_facts.length && 
          <div>
            <strong>Fun facts: </strong>
            <ul>
              {fun_facts.map((fact, index) => <li key={index}>{fact}</li>)}
            </ul>
          </div>
        }

        {assessment && <p><strong>Assessment: </strong>{assessment}</p>}
      </div>
    </div>
  )
}