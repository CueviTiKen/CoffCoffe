import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProductosPage from './pages/ProductosPage';
import Perfil from './pages/Perfil';
import MisPedidosPage from './pages/MisPedidosPage';
import ProductoDetallePage from './pages/ProductoDetallePage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route 
          path="/perfil" 
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/mis-pedidos" 
          element={
            <PrivateRoute>
              <MisPedidosPage />
            </PrivateRoute>
          } 
        />
        <Route path="/producto/:id" element={<ProductoDetallePage />} />
      </Routes>
    </Router>
  );
}

export default App;
