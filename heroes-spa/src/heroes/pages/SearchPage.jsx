import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
import { useEffect } from 'react';
export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange, onResetForm } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };
  const showSearch = searchText.length === 0;
  const showError = searchText.length > 0 && heroes.length === 0;
  return (
    <div>
      <h1>Buscar</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h5>Ingrese un Super Heroe</h5>
          <hr />
          <form action='' onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Enter o Presione el Boton para Buscar'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>Buscar</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados: {!showSearch && q}</h4>
          <hr />
          <div
            className='alert alert-primary'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Busca un heroe
          </div>
          <div
            className='alert alert-danger'
            style={{ display: showError ? ' ' : 'none' }}
          >
            No se encontro un heroe <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
