import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import useTitulo from '../hooks/useTitulo';

const LoginPage = () => {
  useTitulo('Iniciar Sesión | CoffCoffee');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeUser = { id: 1, nombre, email };
    login(fakeUser);
    navigate('/perfil');
  };

  return (
    <div style={styles.container}>
      <div style={{
        ...styles.loginBox,
        animation: 'fadeIn 0.8s ease-out'
      }}>
        <h2 style={styles.title}>Bienvenido de nuevo</h2>
        <p style={styles.subtitle}>Inicia sesión para acceder a tu cuenta</p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre</label>
            <input
              style={styles.input}
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Correo electrónico</label>
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Contraseña</label>
            <input
              style={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Iniciar Sesión
          </button>
        </form>
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
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/coffee-shop-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  loginBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    backdropFilter: 'blur(10px)'
  },
  title: {
    color: 'var(--color-text)',
    fontSize: '2rem',
    marginBottom: '10px',
    textAlign: 'center',
    fontFamily: 'Playfair Display, serif'
  },
  subtitle: {
    color: '#666',
    textAlign: 'center',
    marginBottom: '30px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    color: 'var(--color-text)',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  input: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    '&:focus': {
      borderColor: 'var(--color-primary)'
    }
  },
  button: {
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    padding: '14px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: 'var(--color-secondary)',
      transform: 'translateY(-2px)'
    }
  }
};

export default LoginPage;
