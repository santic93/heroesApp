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
    <div className='col'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImg} alt={superhero} className='card-img' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alert_ego}</p>

             <CharactersByHero characters={characters} alert_ego={alert_ego}/>
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Mas informacionu</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
