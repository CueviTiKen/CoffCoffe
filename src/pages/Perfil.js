import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import useTitulo from '../hooks/useTitulo';

const Perfil = () => {
  useTitulo('Perfil de Usuario');
  const [usuarioApi, setUsuarioApi] = useState(null);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    fetch(`https://mock.apidog.com/m1/885057-866738-default/usuario/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUsuarioApi(data);
      })
      .catch((err) => {
        console.error('Error al obtener datos del usuario:', err);
      });
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return <div style={styles.message}>No tienes acceso. Inicia sesión.</div>;
  if (!usuarioApi) return <div style={styles.message}>Cargando perfil...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Mi Perfil</h2>
        <div style={styles.info}>
          <div style={styles.infoGroup}>
            <span style={styles.label}>Nombre</span>
            <p style={styles.value}>{user.nombre || usuarioApi.nombre || 'No disponible'}</p>
          </div>
          <div style={styles.infoGroup}>
            <span style={styles.label}>Email</span>
            <p style={styles.value}>{user.email || usuarioApi.email || 'No disponible'}</p>
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <Link to="/mis-pedidos" style={styles.pedidosButton}>
            Ver mis pedidos
          </Link>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: 'var(--color-background)'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '40px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  title: {
    color: 'var(--color-text)',
    fontSize: '2rem',
    marginBottom: '30px',
    textAlign: 'center'
  },
  info: {
    marginBottom: '30px'
  },
  infoGroup: {
    marginBottom: '20px'
  },
  label: {
    color: '#666',
    fontSize: '0.9rem',
    display: 'block',
    marginBottom: '5px'
  },
  value: {
    color: 'var(--color-text)',
    fontSize: '1.2rem',
    margin: '0'
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px'
  },
  pedidosButton: {
    flex: 1,
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    padding: '12px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  },
  logoutButton: {
    flex: 1,
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  message: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem',
    color: 'var(--color-text)'
  }
};

export default Perfil;
