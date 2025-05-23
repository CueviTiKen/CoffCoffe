import React from 'react';
import useTitulo from '../hooks/useTitulo'; // Ajusta el path si está en otra carpeta

function LandingPage() {
  useTitulo('Inicio | CoffCoffee');

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Bienvenido a CoffCoffee ☕</h1>
        <p style={styles.subtitle}>Descubre nuestra selección de granos de café premium de todo el mundo</p>
      </div>

      {/* Sección tipo "sobre nosotros" */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutText}>
          <h2 style={styles.aboutTitle}>Pasión por el café artesanal</h2>
          <p style={styles.aboutDescription}>
            En CoffCoffee creemos que cada taza de café cuenta una historia. Nos dedicamos a seleccionar granos de
            la más alta calidad y tostarlos con esmero para ofrecer una experiencia única en cada sorbo.
          </p>
        </div>
        <div style={styles.aboutImage}>
          <img
            src="/about-coffee.jpg"
            alt="Café artesanal"
            style={styles.image}
          />
        </div>
      </section>

      {/* CTA final */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Explora nuestros productos y encuentra tu mezcla perfecta</h2>
        <a href="/productos" style={styles.ctaButton}>Ver Productos</a>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fdfaf6',
    overflowX: 'hidden', // ✅ evita desbordamiento
    width: '100%',
  },
  hero: {
    textAlign: 'center',
    padding: '80px 20px',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/coffee-beans-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    width: '100%',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
    maxWidth: '600px',
    margin: '0 auto',
  },

  aboutSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 20px',
    maxWidth: '1200px',
    width: '100%',
    boxSizing: 'border-box',
  },
  aboutText: {
    flex: '1 1 400px',
    padding: '20px',
  },
  aboutTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#6f4e37',
  },
  aboutDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  aboutImage: {
    flex: '1 1 400px',
    padding: '20px',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },

  ctaSection: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#fff6ee',
    width: '100%',
  },
  ctaTitle: {
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: '#6f4e37',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
};

export default LandingPage;
