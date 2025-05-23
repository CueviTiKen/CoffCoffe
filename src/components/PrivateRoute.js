import React from 'react';
import { useUser } from '../context/UserContext';
import SinAccesoPage from '../pages/SinAccesoPage';

const PrivateRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <SinAccesoPage />;
  }

  return children;
};

export default PrivateRoute;
