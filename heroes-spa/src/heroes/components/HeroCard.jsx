import { Link } from 'react-router-dom';

const CharactersByHero = ({ alert_ego, characters }) => {
  if (alert_ego === characters) return <></>;
  return <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alert_ego,
  first_appearance,
  characters,
}) => {
  const heroImg = `/assets/heroes/${id}.jpg`;

  return (
    <div className='row row-cols-1 row-cols-md-1 g-4  '>
      <div className='col'>
        <div className='card h-100'>
          <img src={heroImg} alt={superhero} className='card-img-top' />
          <div className='card-body'>
            <h5 className='card-title'>{superhero}</h5>
            <p className='card-text'>{alert_ego}</p>
            <CharactersByHero characters={characters} alert_ego={alert_ego} />
            <p className='card-text'>
              <small className='text-muted'>{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`}>Mas informacion</Link>
          </div>
        </div>
      </div>
    </div>
   
  );
};
