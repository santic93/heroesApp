import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const [name, setName] = useState();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login(name);
    navigate(lastPath, {
      replace: true,
    });
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className='container mt5 text-center'>
      <h1>Entrar</h1>

      <hr />
      <span>
        <b>Ingrese su nombre: </b>
      </span>
      <input
        type='text'
        placeholder='Nombre y Apellido'
        required={true}
        onChange={handleChange}
      />
      <br />
      <br />
      <br />
      <hr />
      <button className='btn btn-primary' onClick={onLogin} disabled={!name} >
        Entrar
      </button>
    </div>
  );
};
