import React from 'react';
import './card-list.styles.scss';
import { Monster } from '../../types/monster';
import { Card } from '../card/card.component';

interface CardListProps {
  monsters: Monster[];
}

export const CardList: React.FC<CardListProps> = ({ monsters }) => {
  return (<div className="card-list">
    {monsters.map((monster) =>
        <Card key={monster.id} monster={monster} />
    )}
  </div>);
};
