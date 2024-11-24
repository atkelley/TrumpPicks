import { Link } from 'react-router-dom';
import { picks } from './picks.js';
import './App.css';


export default function App() {
  return (
    <div className="App">
      {Object.entries(picks).map(([key, value], index) => {
        return (
          <div key={index}>
            <h2>{key}</h2>

            <div className="pics">
              {value.map(({ name, title, title_full, status, data }) => {
                const converted = name.toLowerCase().replace(" ", "-");

                return (
                  <Link key={name} to={`/${converted}`} state={{ name, converted, title_full, status, data }}>

                    <div key={converted} className="image-box">
                      <img src={`/images/${converted}.png`} alt={name} />
                      <p className={`caption caption_${status.toLowerCase()}`}>{status}</p>
      
                      <div className="title-box">
                        <p className="title">{title}</p>
                        <p className="name">{name}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
