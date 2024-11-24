import { Link } from 'react-router-dom';
import { picks } from './picks.js';
import './App.css';


export default function App() {
  return (
    <div className="container">
      {Object.entries(picks).map(([key, value], index) => {
        return (
          <section key={index}>
            <h2>{key}</h2>

            <div className="pics-box">
              {value.map(({ name, image, department, title, status }, index) => {
                return (
                  <Link key={`${department}-${index}`} to={`/${image}`} state={{ name, image, department, title, status  }}>

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
  );
}
