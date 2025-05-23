import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitulo from '../hooks/useTitulo';

const ProductosPage = () => {
  useTitulo('Productos | CoffCoffee');
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/885057-866738-default/productos')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar productos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={styles.loading}>Cargando productos...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nuestros Cafés Selectos</h1>
      <div style={styles.grid}>
        {productos.map((producto, index) => (
          <div 
            key={producto.id} 
            style={{
              ...styles.card,
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s`
            }}
          >
            <div style={styles.cardContent}>
              <h3 style={styles.productTitle}>{producto.nombre}</h3>
              <p style={styles.description}>{producto.descripcion}</p>
              <p style={styles.price}>€{producto.precio}</p>
              <Link to={`/producto/${producto.id}`} style={styles.viewButton}>
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: 'calc(100vh - 80px)'
  },
  title: {
    textAlign: 'center',
    color: 'var(--color-text)',
    marginBottom: '40px',
    fontSize: '2.5rem',
    fontFamily: 'Playfair Display, serif'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    padding: '20px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  productTitle: {
    color: 'var(--color-text)',
    fontSize: '1.5rem',
    margin: '0 0 15px 0',
    fontFamily: 'Playfair Display, serif'
  },
  description: {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    flex: 1,
    marginBottom: '20px'
  },
  price: {
    color: 'var(--color-primary)',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    margin: '0 0 20px 0'
  },
  viewButton: {
    display: 'inline-block',
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: 'var(--color-secondary)',
      transform: 'translateY(-2px)'
    }
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem',
    color: 'var(--color-text)'
  }
};

export default ProductosPage;
