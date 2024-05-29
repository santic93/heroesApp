import React from 'react';
import { getHeroesByPublisher } from '../helpers';

export const HeroeList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <>
      {heroes.map((heroe) => 
        <ul key={heroe.id}>
          <li>Superheroe: {heroe.superhero}</li>
          <li>Editorial: {heroe.publisher}</li>
          <li>Primera aparacion: {heroe.first_appearance}</li>
          <li>Caracteristicas: {heroe.characters}</li>
        </ul>
      )}
    </>
  );
};
