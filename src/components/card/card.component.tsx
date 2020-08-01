import React from 'react';
import { Monster } from '../../types/monster';

import './card.styles.scss';

interface CardProps {
  monster: Monster
}

export const Card: React.FC<CardProps> = ({ monster }) => (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.name.replace(' ', '')}?set=set2&size=180x180`} alt="monster" />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
);
