import { useEffect } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroeList } from '../components/HeroeList';

export const DcPage = () => {
  // useEffect(() => {
  //   getHeroesByPublisher('DC Comics');
  // }, []);
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroeList publisher={'DC Comics'}/>
    </>
  );
};
