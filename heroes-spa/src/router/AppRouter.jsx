import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <Route path='/*' element={<HeroesRoutes />} />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
