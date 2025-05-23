import React from 'react';
import { useUser } from '../context/UserContext';
import SinAccesoPage from '../pages/SinAccesoPage'; // Importa la página que has creado

const PrivateRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    // En lugar de redirigir, mostramos la página SinAccesoPage
    return <SinAccesoPage />;
  }

  // Si hay usuario logueado, mostramos la ruta protegida
  return children;
};

export default PrivateRoute;
