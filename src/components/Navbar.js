// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>CoffCoffee</h2>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Inicio</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/productos" style={styles.link}>Productos</Link></li>
        <li><Link to="/perfil" style={styles.link}>Perfil</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'var(--color-primary)',
    padding: '15px 40px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  logo: {
    margin: 0,
    fontSize: '2rem',
    fontFamily: 'Playfair Display, serif',
    color: '#FAF3E0'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px',
    margin: 0
  },
  link: {
    color: '#FAF3E0',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    padding: '5px 10px',
    borderRadius: '4px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-2px',
      left: '50%',
      width: '0',
      height: '2px',
      backgroundColor: '#FAF3E0',
      transition: 'all 0.3s ease',
    },
    '&:hover::after': {
      width: '100%',
      left: '0'
    }
  }
};

export default Navbar;
