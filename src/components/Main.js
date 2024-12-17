import { Link } from 'react-router-dom';
import { picks } from '../data/picks.js';
import './Main.css';

export default function Main() {

  return (
    <div className="main">
      {Object.entries(picks).map(([key, value], index) => {
        return (
          <section key={index}>
            <h2>{key}</h2>

            <div className="pics-box">
              {value.map(({ name, image, department, title, title_url, status }, index) => {
                return (
                  <Link key={`${department}-${index}`} to={`/${image !== 'placeholder' ? image : ''}`} state={{ name, image, title, title_url, status }}>

                    <div className="image-box">
                      <img src={`/images/${image}.png`} alt={name} />
                      <p className={`caption ${status.toLowerCase()}`}>{status}</p>
      
                      <div className="title-box">
                        <p className="title">{department}</p>
                        <p className="name">{name}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  )
}