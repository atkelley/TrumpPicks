import { useState } from 'react';
import LeftArrows from '../icons/left-arrows.png';
import RightArrows from '../icons/right-arrows.png';
import { picks } from '../data/picks';
import './Sidebar.css';

export default function Sidebar() {
  const departments = [];
  const [isOpen, setIsOpen] = useState(false);

  for (let pick in picks) { 
    picks[pick].forEach(obj => departments.push(obj['department']));
  }

  return (
    <div className="sidebar" style={{ width: isOpen ? '300px' : '75px'}}>
      <div className="arrows-box">
        <img src={isOpen ? LeftArrows : RightArrows} alt={`${isOpen ? 'left' : 'right '} arrows`} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <ul className="departments">
        {departments.map((department, index) => <li key={index}>{department}</li>)}
      </ul>
    </div>
  )
}