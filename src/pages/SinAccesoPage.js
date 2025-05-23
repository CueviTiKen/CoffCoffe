import React from 'react';
import { Link } from 'react-router-dom';

const SinAccesoPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Acceso Restringido</h2>
        <p style={styles.text}>Necesitas iniciar sesión para acceder a esta sección</p>
        <Link to="/login" style={styles.button}>
          Iniciar Sesión
        </Link>
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
    padding: '20px',
    backgroundColor: 'var(--color-background)'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '40px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%'
  },
  title: {
    color: 'var(--color-text)',
    fontSize: '2rem',
    marginBottom: '20px'
  },
  text: {
    color: '#666',
    marginBottom: '30px',
    fontSize: '1.1rem',
    lineHeight: '1.5'
  },
  button: {
    display: 'inline-block',
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '1.1rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'var(--color-secondary)',
      transform: 'translateY(-2px)'
    }
  }
};

export default SinAccesoPage;
