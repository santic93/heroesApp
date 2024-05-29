import { useEffect } from 'react';
import { HeroeList } from '../components/HeroeList';
import { getHeroesByPublisher } from '../helpers';

export const MarvelPage = () => {

  return (
    <>
      <h1>MarvelPage</h1> <hr />
      <HeroeList  publisher={'Marvel Comics'}/>
    </>
  );
};
