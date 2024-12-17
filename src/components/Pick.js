import { useLocation, Link } from 'react-router-dom';
import { data } from '../data/data.js';
import './Pick.css';

export default function Pick() {
  const { state: { name, image, title, title_url, status } } = useLocation();
  const { education, background, professional, controversies, positions, fun_facts, assessment, special } = data[image];

  return (
    <div className="pick">
      <div className="pick-role-box">
        <img src={`/images/${image}.png`} alt={name} />

        <div className="pick-role">
          <p className="pick-role__name">{name}</p>
          <Link to={title_url} target="_blank" rel="noopener noreferrer"><p className="pick-role__title">{title}</p></Link>
          <p className={`pick-role__${status.toLowerCase()}`}>{status}</p>
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
        {special &&  <p className='special'><img src={special} alt={name} /></p>}
      </div>
    </div>
  )
}