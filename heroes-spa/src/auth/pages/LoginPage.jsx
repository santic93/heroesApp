import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/', {
      replace: true,
    });
  };
  return (
    <div className='container mt5'>
      <h1>Entrar</h1>
      <hr />
      <button className='btn btn-primary' onClick={onLogin}>
        Entrar
      </button>
    </div>
  );
};
