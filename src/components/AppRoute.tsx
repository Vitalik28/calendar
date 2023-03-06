import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { privateRoutes, publicRoutes, RoutesName } from '../routes';

const AppRoute = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route path="*" element={<Navigate to={RoutesName.Event} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route path="*" element={<Navigate to={RoutesName.Login} replace />} />
    </Routes>
  );
};

export default AppRoute;
